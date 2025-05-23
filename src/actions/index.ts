// src/actions/index.ts
import { z } from 'zod';
import { Resend } from 'resend';

// Inicializar Resend con la API key (solo disponible en el servidor)
const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Verificar que la API key esté disponible
if (!import.meta.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY no está definida. Asegúrate de configurarla en el archivo .env o en las variables de entorno de Cloudflare Pages.');
}

// Usar un token único para prevenir envíos múltiples
const FORM_TOKEN_KEY = 'form_token';
const PROCESSED_TOKENS = new Set<string>();

// Definir esquema de validación con Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' }),
  source: z.string(),
  otherSource: z.string().optional(),
});

// Tipo para los datos del formulario
type ContactFormData = z.infer<typeof contactFormSchema>;

// Tipo para los errores de validación
export type ContactFormErrors = {
  name?: string;
  email?: string;
  message?: string;
  source?: string;
  otherSource?: string;
  form?: string;
};

// Tipo para los resultados de la acción
export type ActionResult = {
  success: boolean;
  errors?: ContactFormErrors;
  data?: any;
  message?: string;
};

// Generar un token único para el formulario
export function generateFormToken(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

// Verificar si un token ya fue procesado
export function isTokenProcessed(token: string | undefined): boolean {
  if (!token) return false;
  return PROCESSED_TOKENS.has(token);
}

// Marcar un token como procesado
export function markTokenAsProcessed(token: string | undefined): void {
  if (!token) return;
  
  PROCESSED_TOKENS.add(token);
  
  // Limitar el tamaño del conjunto para evitar crecimiento excesivo en memoria
  if (PROCESSED_TOKENS.size > 1000) {
    const iterator = PROCESSED_TOKENS.values();
    const firstValue = iterator.next().value;
    if (firstValue !== undefined) {
      PROCESSED_TOKENS.delete(firstValue);
    }
  }
}

// Función de acción del servidor
export const server = {
  async send(formData: FormData): Promise<ActionResult> {
    // Extraer datos del formulario
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    const source = formData.get('source')?.toString() || '';
    const otherSource = formData.get('otherSource')?.toString() || '';
    const formToken = formData.get(FORM_TOKEN_KEY)?.toString();

    // Objeto con los datos del formulario
    const data = {
      name,
      email,
      message,
      source,
      otherSource,
    };
    
    // Verificar token para prevenir envíos duplicados
    if (!formToken) {
      console.log('Error: Missing form token');
      return {
        success: false,
        errors: {
          form: 'Invalid form submission. Please try again.'
        },
        data
      };
    }
    
    // Si el token ya fue procesado, devolver éxito sin enviar otro correo
    if (formToken && isTokenProcessed(formToken)) {
      console.log('Duplicate submission detected with token:', formToken);
      return {
        success: true,
        message: 'Your message has been sent successfully. We will contact you soon.'
      };
    }
    
    // Marcar el token como procesado inmediatamente
    if (formToken) {
      markTokenAsProcessed(formToken);
    }

    // Validación de datos
    const result = contactFormSchema.safeParse(data);
    
    // Si hay errores de validación
    if (!result.success) {
      const errors: ContactFormErrors = {};
      
      // Extraer errores de validación
      result.error.issues.forEach((issue) => {
        const path = issue.path[0].toString();
        errors[path as keyof ContactFormErrors] = issue.message;
      });
      
      // Devolver errores y los datos introducidos para mantenerlos en el formulario
      return {
        success: false,
        errors,
        data
      };
    }

    try {
      // Formatear el mensaje de la fuente
      let formattedSource = source;
      if (source === 'Other' && otherSource) {
        formattedSource = `Otro: ${otherSource}`;
      }

      // Enviar email con Resend
      const { data: emailData, error } = await resend.emails.send({
        from: 'Shiny Octopus <hi@shinyoctopus.studio>', // Usando el dominio verificado en Resend
        to: ['hola@shinyoctopus.com.ar'], // Reemplaza con tu correo
        replyTo: result.data.email, // Para que puedas responder directamente al remitente
        subject: 'Nuevo mensaje desde Shiny Octopus',
        html: `
          <h2>Nuevo mensaje desde Shiny Octopus</h2>
          <p><strong>Nombre:</strong> ${result.data.name}</p>
          <p><strong>Email:</strong> ${result.data.email}</p>
          <p><strong>Cómo nos encontró:</strong> ${formattedSource}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${result.data.message.replace(/\n/g, '<br>')}</p>
        `,
      });

      if (error) {
        console.error('Error al enviar email con Resend:', error);
        
        // Devolver error general
        return {
          success: false,
          errors: {
            form: 'An error occurred while sending your message. Please try again later.'
          },
          data
        };
      }

      // Devolver mensaje de éxito sin redireccionar
      return {
        success: true,
        message: 'Your message has been sent successfully. We will contact you soon.'
      };
    } catch (error) {
      console.error('Error al enviar email:', error);
      
      // Devolver error general
      return {
        success: false,
        errors: {
          form: 'An error occurred while sending your message. Please try again later.'
        },
        data
      };
    }
  }
};