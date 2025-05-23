# Shiny Octopus - Astro SSR con Cloudflare Pages

Proyecto desarrollado con Astro y desplegado en Cloudflare Pages con SSR (Server-Side Rendering).

## 📋 Instrucciones de Despliegue Seguro

Para desplegar este proyecto en Cloudflare Pages sin exponer archivos sensibles, sigue estos pasos:

### Método 1: Usando el script de despliegue (Recomendado)

1. Asegúrate de haber construido el proyecto primero:
   ```sh
   bun run build
   ```

2. Ejecuta el script de despliegue:
   ```sh
   ./deploy.sh
   ```

Este script crea un directorio temporal, copia solo los archivos necesarios (excluyendo archivos sensibles como `.env`), verifica que no haya archivos sensibles y luego despliega a Cloudflare Pages.

### Método 2: Despliegue manual

Si prefieres desplegar manualmente, asegúrate de:

1. Construir el proyecto:
   ```sh
   bun run build
   ```

2. Desplegar solo el directorio `dist` usando Wrangler:
   ```sh
   cd dist && npx wrangler pages deploy .
   ```

⚠️ **IMPORTANTE**: Asegúrate de que no haya archivos sensibles (como `.env`) en el directorio `dist` antes de desplegar.

## 🚀 Estructura del Proyecto

Estructura principal de carpetas y archivos:

```text
/
├── public/          # Archivos estáticos (imágenes, fuentes, etc.)
├── src/             # Código fuente
│   ├── actions/     # Acciones del servidor
│   ├── components/  # Componentes reutilizables
│   ├── layouts/     # Plantillas de página
│   └── pages/       # Páginas de la aplicación
├── deploy.sh        # Script para despliegue seguro
├── wrangler.toml    # Configuración de Cloudflare Wrangler
├── .wranglerignore  # Archivos a ignorar en el despliegue (no funciona correctamente)
└── package.json     # Dependencias y scripts
```

## 🦟 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                 | Acción                                             |
| :---------------------- | :-------------------------------------------------- |
| `bun install`           | Instala dependencias                               |
| `bun run dev`           | Inicia servidor local en `localhost:4321`          |
| `bun run build`         | Construye el sitio para producción en `./dist/`    |
| `bun run preview`       | Vista previa local antes de desplegar              |
| `./deploy.sh`           | Despliega de forma segura a Cloudflare Pages       |

## ℹ️ Notas Importantes

1. El archivo `.wranglerignore` no funciona correctamente con Wrangler para Pages, por lo que se recomienda usar el script `deploy.sh` para despliegues seguros.

2. La configuración en `wrangler.toml` ha sido simplificada para evitar advertencias.

3. Para configurar variables de entorno en Cloudflare Pages, házlo desde el panel de control de Cloudflare en lugar de subir archivos `.env`.

4. Si necesitas añadir más archivos o patrones a excluir del despliegue, edita el script `deploy.sh` en la sección de `rsync`.

## 👀 Recursos Adicionales

Para más información sobre Astro, consulta [la documentación oficial](https://docs.astro.build).
Para Cloudflare Pages, visita [la documentación de Cloudflare Pages](https://developers.cloudflare.com/pages/).
