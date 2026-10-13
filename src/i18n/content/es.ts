const content = `# Raphael Publish - Editor de artículos para WeChat

> Te damos la bienvenida a Raphael Publish, un motor moderno de maquetación en Markdown creado para **cuentas oficiales de WeChat** y **creadores de contenido**.

## Funciones principales

### 1. Pegado mágico

- **Pega desde cualquier lugar**: copia texto enriquecido de **Lark, Notion, Word** o cualquier página web y se convierte en Markdown limpio al pegarlo
- **Limpieza inteligente**: se eliminan los estilos sobrantes y los caracteres extraños, y solo se conservan párrafos, negritas, listas, bloques de código y demás estructura esencial
- **Nada que aprender**: no hace falta saber Markdown; pega y listo
- **Pega imágenes directamente**: pega una captura o una imagen del portapapeles (Ctrl/Cmd + V) y se inserta automáticamente como imagen Markdown

### 2. Composición con varias imágenes

Se admiten cuadrículas de varias columnas, como las dos imágenes en paralelo de abajo. Gracias al motor \`wechatCompat\`, también se muestran perfectamente en WeChat:

![](https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop)
![](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop)

### 3. 30 temas cuidados al detalle

Despídete de las plantillas blancas idénticas. Cambia entre 30 temas visuales pulidos con esmero (aquí solo se muestran algunos representativos):

1. **Minimalistas y clásicos**: Mac, WeChat nativo, Medium
2. **Lectura profunda**: Claude, NYT, Retro
3. **Geek y negocios**: Stripe, Lark Workspace, Linear, Bloomberg

> Prueba a cambiar el «Tema» en la parte superior. Cada uno tiene sus propios colores, tipografías y estilo de cita.

### 4. Copia a WeChat con un clic

Pulsa el botón «**Copiar para WeChat**» y pega en el editor de la cuenta oficial conservando todo el formato:

- **Imágenes empaquetadas automáticamente**: todas las imágenes externas se convierten a Base64, así que no aparece el error «esta imagen procede de un tercero»
- **Sin pérdida de estilo**: colores de fondo, esquinas redondeadas y espaciados se reproducen con precisión
- **Las tablas no se rompen**: el DOM se reconstruye internamente para que listas y tablas no se descuadren en WeChat

### 5. Vista previa en vivo en varios dispositivos

La barra de herramientas de la derecha ofrece tres tamaños de vista previa:

- **Vista móvil** (480px): simula el ancho real de lectura en WeChat
- **Vista tableta** (768px): para comprobar la lectura en horizontal
- **Vista escritorio** (PC): vista previa completa en pantalla ancha

### 6. Exportación

Además de copiar a WeChat, también puedes:

- **Exportar PDF**: genera un PDF de alta calidad para archivar y compartir
- **Exportar HTML**: obtén el HTML completo con estilos para correo o publicación web

## Resaltado de código

Incluye una consola de código al estilo macOS con resaltado de sintaxis para muchos lenguajes:

\`\`\`javascript
// Flujo principal del motor de Raphael Publish
const raphael = {
  // 1. smart paste: limpia el texto enriquecido
  paste: (richText) => cleanToMarkdown(richText),

  // 2. render: Markdown → HTML con estilos
  render: (md) => applyTheme(md, selectedTheme),

  // 3. export: empaquetado de imágenes + compatibilidad con WeChat
  export: async (html) => {
    const compatible = await makeWeChatCompatible(html);
    return bundleImagesAsBase64(compatible);
  }
};
\`\`\`

## Citas

> Cada tema tiene su propio estilo de cita, con distinto fondo, color de texto y borde izquierdo. Fíjate en cómo cambia la cita al cambiar de tema.

## Tablas

| Función | Descripción |
|------|------|
| Pegado mágico | Pega desde Lark/Notion/Word y obtén Markdown automáticamente |
| 30 temas | Clásicos / Tendencia / Más estilos, para cualquier situación |
| Empaquetado de imágenes | Las imágenes externas pasan a Base64, sin errores en WeChat |
| Pegado de imágenes | Pega capturas o imágenes directamente como imágenes Markdown |
| Varias imágenes | Cuadrículas de 2-3 columnas que no se rompen en WeChat |
| Resaltado de código | Ventana estilo macOS + resaltado de sintaxis multilenguaje |
| Vista previa multidispositivo | Cambia entre móvil / tableta / escritorio en tiempo real |
| Exportación | Exportación a PDF y HTML |

---

**Consejos**:

- Cambia el «Tema» en la parte superior para ver el aspecto de cada uno
- Copia algo de Lark o Notion y pégalo a la izquierda para probar el pegado mágico
- Haz clic en los iconos de dispositivo para alternar entre móvil / tableta / escritorio
- Borra todo lo anterior y empieza a escribir
`;

export default content;
