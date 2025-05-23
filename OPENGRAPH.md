# Open Graph Protocol

## Introducción

El [Open Graph protocol](https://ogp.me/) permite que cualquier página web se convierta en un objeto rico en un gráfico social. Por ejemplo, esto se usa en Facebook para permitir que cualquier página web tenga la misma funcionalidad que cualquier otro objeto en Facebook.

Aunque existen muchas tecnologías y esquemas diferentes que podrían combinarse, no hay una sola tecnología que proporcione suficiente información para representar de manera rica cualquier página web dentro del gráfico social. El Open Graph protocol se basa en estas tecnologías existentes y ofrece a los desarrolladores una sola cosa que implementar. La simplicidad del desarrollador es un objetivo clave del Open Graph protocol que ha informado muchas de [las decisiones de diseño técnico](https://www.scribd.com/doc/30715288/The-Open-Graph-Protocol-Design-Decisions).

## Metadatos Básicos

Para convertir tus páginas web en objetos gráficos, necesitas agregar metadatos básicos a tu página. Hemos basado la versión inicial del protocolo en [RDFa](https://en.wikipedia.org/wiki/RDFa), lo que significa que colocarás etiquetas `<meta>` adicionales en el `<head>` de tu página web.

Las cuatro propiedades requeridas para cada página son:

- **`og:title`** - El título de tu objeto como debe aparecer dentro del gráfico, por ejemplo, "The Rock".
- **`og:type`** - El [tipo](#types) de tu objeto, por ejemplo, "video.movie". Dependiendo del tipo que especifiques, pueden requerirse otras propiedades también.
- **`og:image`** - Una URL de imagen que debe representar tu objeto dentro del gráfico.
- **`og:url`** - La URL canónica de tu objeto que se utilizará como su ID permanente en el gráfico, por ejemplo, "https://www.imdb.com/title/tt0117500/".

### Ejemplo

Como ejemplo, el siguiente es el marcado del protocolo Open Graph para [The Rock en IMDB](https://www.imdb.com/title/tt0117500/):

```html
<html prefix="og: https://ogp.me/ns#">
<head>
<title>The Rock (1996)</title>
<meta property="og:title" content="The Rock" />
<meta property="og:type" content="video.movie" />
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
...
</head>
...
</html>
```

## Metadatos Opcionales

Las siguientes propiedades son opcionales para cualquier objeto y generalmente se recomiendan:

- **`og:audio`** - Una URL a un archivo de audio para acompañar este objeto.
- **`og:description`** - Una descripción de una a dos oraciones de tu objeto.
- **`og:determiner`** - La palabra que aparece antes del título de este objeto en una oración. Un enum de (a, an, the, "", auto). Si se elige `auto`, el consumidor de tus datos debe elegir entre "a" o "an". El valor por defecto es "" (en blanco).
- **`og:locale`** - El idioma en el que están marcadas estas etiquetas. De la forma `language_TERRITORY`. El valor por defecto es `en_US`.
- **`og:locale:alternate`** - Un array de otros idiomas en los que esta página está disponible.
- **`og:site_name`** - Si tu objeto es parte de un sitio web más grande, el nombre que debe mostrarse para el sitio general. Por ejemplo, "IMDb".
- **`og:video`** - Una URL a un archivo de video que complementa este objeto.

### Ejemplo de metadatos opcionales

```html
<meta property="og:audio" content="https://example.com/bond/theme.mp3" />
<meta property="og:description"
      content="Sean Connery found fame and fortune as the
               suave, sophisticated British agent, James Bond." />
<meta property="og:determiner" content="the" />
<meta property="og:locale" content="en_GB" />
<meta property="og:locale:alternate" content="fr_FR" />
<meta property="og:locale:alternate" content="es_ES" />
<meta property="og:site_name" content="IMDb" />
<meta property="og:video" content="https://example.com/bond/trailer.swf" />
```

El esquema RDF (en [Turtle](https://en.wikipedia.org/wiki/Turtle_(syntax))) se puede encontrar en [ogp.me/ns](https://ogp.me/ns/ogp.me.ttl).

## Propiedades Estructuradas

Algunas propiedades pueden tener metadatos adicionales adjuntos. Estos se especifican de la misma manera que otros metadatos con `property` y `content`, pero la `property` tendrá `:` adicionales.

### og:image

La propiedad `og:image` tiene algunas propiedades estructuradas opcionales:

- **`og:image:url`** - Idéntico a `og:image`.
- **`og:image:secure_url`** - Una URL alternativa para usar si la página web requiere HTTPS.
- **`og:image:type`** - Un [tipo MIME](https://en.wikipedia.org/wiki/Internet_media_type) para esta imagen.
- **`og:image:width`** - El número de píxeles de ancho.
- **`og:image:height`** - El número de píxeles de alto.
- **`og:image:alt`** - Una descripción de lo que hay en la imagen (no un pie de foto). Si la página especifica un `og:image` debe especificar `og:image:alt`.

#### Ejemplo completo de imagen

```html
<meta property="og:image" content="https://example.com/ogp.jpg" />
<meta property="og:image:secure_url" content="https://secure.example.com/ogp.jpg" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="400" />
<meta property="og:image:height" content="300" />
<meta property="og:image:alt" content="A shiny red apple with a bite taken out" />
```

### og:video

La etiqueta `og:video` tiene las etiquetas idénticas a `og:image`. Aquí hay un ejemplo:

```html
<meta property="og:video" content="https://example.com/movie.swf" />
<meta property="og:video:secure_url" content="https://secure.example.com/movie.swf" />
<meta property="og:video:type" content="application/x-shockwave-flash" />
<meta property="og:video:width" content="400" />
<meta property="og:video:height" content="300" />
```

### og:audio

La etiqueta `og:audio` solo tiene las primeras 3 propiedades disponibles (ya que el tamaño no tiene sentido para el sonido):

```html
<meta property="og:audio" content="https://example.com/sound.mp3" />
<meta property="og:audio:secure_url" content="https://secure.example.com/sound.mp3" />
<meta property="og:audio:type" content="audio/mpeg" />
```

## Arrays

Si una etiqueta puede tener múltiples valores, simplemente coloca múltiples versiones de la misma etiqueta `<meta>` en tu página. A la primera etiqueta (de arriba hacia abajo) se le da preferencia durante los conflictos.

```html
<meta property="og:image" content="https://example.com/rock.jpg" />
<meta property="og:image" content="https://example.com/rock2.jpg" />
```

Coloca las propiedades estructuradas después de declarar su etiqueta raíz. Cuando se analiza otro elemento raíz, esa propiedad estructurada se considera terminada y se inicia otra.

### Ejemplo

```html
<meta property="og:image" content="https://example.com/rock.jpg" />
<meta property="og:image:width" content="300" />
<meta property="og:image:height" content="300" />
<meta property="og:image" content="https://example.com/rock2.jpg" />
<meta property="og:image" content="https://example.com/rock3.jpg" />
<meta property="og:image:height" content="1000" />
```

Esto significa que hay 3 imágenes en esta página: la primera imagen es 300x300, la del medio tiene dimensiones no especificadas, y la última tiene 1000 px de alto.

## Tipos de Objeto

Para que tu objeto sea representado dentro del gráfico, necesitas especificar su tipo. Esto se hace usando la propiedad `og:type`:

```html
<meta property="og:type" content="website" />
```

Cuando la comunidad está de acuerdo con el esquema para un tipo, se agrega a la lista de tipos globales. Todos los otros objetos en el sistema de tipos son [CURIEs](https://en.wikipedia.org/wiki/CURIE) de la forma:

```html
<head prefix="my_namespace: https://example.com/ns#">
<meta property="og:type" content="my_namespace:my_type" />
```

Los tipos globales están agrupados en verticales. Cada vertical tiene su propio namespace. Los valores `og:type` para un namespace siempre están prefijados con el namespace y luego un punto.

### Music

**Namespace URI:** `https://ogp.me/ns/music#`

#### music.song
- `music:duration` - integer >=1 - La duración de la canción en segundos.
- `music:album` - music.album array - El álbum del que proviene esta canción.
- `music:album:disc` - integer >=1 - En qué disco del álbum está esta canción.
- `music:album:track` - integer >=1 - Qué pista es esta canción.
- `music:musician` - profile array - El músico que hizo esta canción.

#### music.album
- `music:song` - music.song - La canción en este álbum.
- `music:song:disc` - integer >=1 - Lo mismo que `music:album:disc` pero en reverso.
- `music:song:track` - integer >=1 - Lo mismo que `music:album:track` pero en reverso.
- `music:musician` - profile - El músico que hizo esta canción.
- `music:release_date` - datetime - La fecha en que se lanzó el álbum.

#### music.playlist
- `music:song` - Idéntico a los de music.album
- `music:song:disc`
- `music:song:track`
- `music:creator` - profile - El creador de esta lista de reproducción.

#### music.radio_station
- `music:creator` - profile - El creador de esta estación.

### Video

**Namespace URI:** `https://ogp.me/ns/video#`

#### video.movie
- `video:actor` - profile array - Actores en la película.
- `video:actor:role` - string - El papel que interpretaron.
- `video:director` - profile array - Directores de la película.
- `video:writer` - profile array - Escritores de la película.
- `video:duration` - integer >=1 - La duración de la película en segundos.
- `video:release_date` - datetime - La fecha en que se lanzó la película.
- `video:tag` - string array - Palabras tag asociadas con esta película.

#### video.episode
- `video:actor` - Idéntico a video.movie
- `video:actor:role`
- `video:director`
- `video:writer`
- `video:duration`
- `video:release_date`
- `video:tag`
- `video:series` - video.tv_show - A qué serie pertenece este episodio.

#### video.tv_show
Un programa de TV de múltiples episodios.
Los metadatos son idénticos a video.movie.

#### video.other
Un video que no pertenece a ninguna otra categoría.
Los metadatos son idénticos a video.movie.

## Sin Vertical

Estos son objetos definidos globalmente que simplemente no encajan en una vertical pero que son ampliamente utilizados y acordados.

### article

**Namespace URI:** `https://ogp.me/ns/article#`

- `article:published_time` - datetime - Cuándo se publicó el artículo por primera vez.
- `article:modified_time` - datetime - Cuándo se cambió el artículo por última vez.
- `article:expiration_time` - datetime - Cuándo el artículo está desactualizado después.
- `article:author` - profile array - Escritores del artículo.
- `article:section` - string - Un nombre de sección de alto nivel. Por ejemplo, Tecnología.
- `article:tag` - string array - Palabras tag asociadas con este artículo.

### book

**Namespace URI:** `https://ogp.me/ns/book#`

- `book:author` - profile array - Quién escribió este libro.
- `book:isbn` - string - El [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number)
- `book:release_date` - datetime - La fecha en que se lanzó el libro.
- `book:tag` - string array - Palabras tag asociadas con este libro.

### profile

**Namespace URI:** `https://ogp.me/ns/profile#`

- `profile:first_name` - string - Un nombre normalmente dado a un individuo por un padre o auto-elegido.
- `profile:last_name` - string - Un nombre heredado de una familia o matrimonio y por el cual el individuo es comúnmente conocido.
- `profile:username` - string - Una cadena corta única para identificarlos.
- `profile:gender` - enum(male, female) - Su género.

### website

**Namespace URI:** `https://ogp.me/ns/website#`

No hay propiedades adicionales aparte de las básicas.

Cualquier página web sin marcado debe ser tratada como `og:type` website.

## Tipos de Datos

Los siguientes tipos se usan al definir atributos en el protocolo Open Graph.

| Tipo | Descripción | Literales |
|------|-------------|-----------|
| Boolean | Un valor verdadero o falso | true, false, 1, 0 |
| DateTime | [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) | |
| Enum | Una cadena que es miembro de una lista específica | |
| Float | Un número de 64 bits con signo | 1.234, -1.234, 1.2e3, -1.2e3, 7E-10 |
| Integer | Un número de 32 bits con signo | 1234, -123 |
| String | Una secuencia de caracteres Unicode | |
| URL | Una secuencia de caracteres Unicode que forman una URL válida | |

## Implementaciones

La comunidad de código abierto ha desarrollado una serie de analizadores y herramientas de publicación:

- **[Facebook Object Debugger](https://developers.facebook.com/tools/debug/)** - Analizador y depurador oficial de Facebook
- **[Google Rich Snippets Testing Tool](https://www.google.com/webmasters/tools/richsnippets)** - Soporte del protocolo Open Graph en verticales específicos y motores de búsqueda
- **[PHP Validator and Markup Generator](https://github.com/niallkennedy/open-graph-protocol-tools)** - Validador de entrada OGP 2011 y generador de marcado en objetos PHP5
- **[PHP Consumer](https://github.com/scottmac/opengraph)** - Una pequeña biblioteca para acceder a datos del protocolo Open Graph en PHP
- **[OpenGraphNode in PHP](https://buzzword.org.uk/2010/opengraph/#php)** - Un analizador simple para PHP
- **[PyOpenGraph](https://pypi.python.org/pypi/PyOpenGraph)** - Una biblioteca escrita en Python para analizar información del protocolo Open Graph de sitios web
- **[OpenGraph Ruby](https://github.com/intridea/opengraph)** - Gema de Ruby que analiza páginas web y extrae marcado del protocolo Open Graph
- **[OpenGraph for Java](https://github.com/callumj/opengraph-java)** - Pequeña clase de Java utilizada para representar el protocolo Open Graph
- **[RDF::RDFa::Parser](https://search.cpan.org/~tobyink/RDF-RDFa-Parser/lib/RDF/RDFa/Parser.pm)** - Analizador Perl RDFa que entiende el protocolo Open Graph
- **[WordPress plugin](https://wordpress.org/plugins/facebook/)** - Plugin oficial de WordPress de Facebook, que agrega metadatos Open Graph a sitios alimentados por WordPress
- **[Alternate WordPress OGP plugin](https://wordpress.org/plugins/wp-facebook-open-graph-protocol/)** - Un plugin simple y ligero de WordPress que agrega metadatos Open Graph a sitios alimentados por WordPress