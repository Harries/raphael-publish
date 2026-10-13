const content = `# Raphael Publish - WeChat-Artikel-Editor

> Willkommen bei Raphael Publish, einer modernen Markdown-Satz-Engine für **offizielle WeChat-Konten** und **Content-Creator**!

## Kernfunktionen

### 1. Magisches Einfügen

- **Von überall einfügen**: Kopiere Rich Text aus **Lark, Notion, Word** oder von einer beliebigen Webseite – beim Einfügen wird daraus sofort sauberes Markdown
- **Intelligente Bereinigung**: Überflüssige Stile und Zeichensalat werden entfernt; erhalten bleiben Absätze, Fettdruck, Listen, Codeblöcke und die übrige Kernstruktur
- **Kein Lernaufwand**: Du musst kein Markdown können – einfügen und loslegen
- **Bilder direkt einfügen**: Füge einen Screenshot oder ein Bild aus der Zwischenablage ein (Strg/Cmd + V), und es wird automatisch als Markdown-Bild eingesetzt

### 2. Layout mit mehreren Bildern

Mehrspaltige Raster werden unterstützt, wie die beiden nebeneinanderstehenden Bilder unten. Dank der \`wechatCompat\`-Engine werden sie auch in WeChat einwandfrei dargestellt:

![](https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop)
![](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop)

### 3. 30 handverlesene Designs

Schluss mit austauschbaren weißen Vorlagen. Wechsle zwischen 30 sorgfältig ausgearbeiteten Designs (hier sind nur einige typische Beispiele genannt):

1. **Minimalistisch & klassisch**: Mac, WeChat Nativ, Medium
2. **Vertieftes Lesen**: Claude, NYT, Retro
3. **Geek & Business**: Stripe, Lark Workspace, Linear, Bloomberg

> Probiere oben verschiedene Einträge unter „Design“ aus. Jedes hat eigene Farben, Schriften und einen eigenen Zitatstil.

### 4. Mit einem Klick nach WeChat kopieren

Klicke auf „**Für WeChat kopieren**“ und füge den Inhalt im Editor des offiziellen Kontos ein – die Formatierung bleibt vollständig erhalten:

- **Bilder werden automatisch gebündelt**: Alle externen Bilder werden in Base64 umgewandelt, die Meldung „Dieses Bild stammt von einem Drittanbieter“ bleibt aus
- **Kein Stilverlust**: Hintergrundfarben, abgerundete Ecken und Abstände werden exakt übernommen
- **Tabellen bleiben stabil**: Das DOM wird im Hintergrund neu aufgebaut, sodass Listen und Tabellen in WeChat nicht zerfallen

### 5. Live-Vorschau für mehrere Geräte

Die Werkzeugleiste rechts bietet drei Vorschaugrößen:

- **Mobilansicht** (480px): simuliert die tatsächliche Lesebreite in WeChat
- **Tablet-Ansicht** (768px): zum Prüfen der Darstellung im Querformat
- **Desktop-Ansicht** (PC): vollständige Vorschau im Breitbild

### 6. Export

Neben dem Kopieren nach WeChat kannst du außerdem:

- **PDF exportieren**: ein hochwertiges PDF zum Archivieren und Teilen erzeugen
- **HTML exportieren**: das vollständige HTML mit Stilen erhalten, etwa für E-Mails oder Webveröffentlichungen

## Code-Hervorhebung

Eine Code-Konsole im macOS-Stil ist eingebaut und unterstützt Syntaxhervorhebung für viele Sprachen:

\`\`\`javascript
// Kernablauf der Raphael-Publish-Engine
const raphael = {
  // 1. smart paste: Rich Text bereinigen
  paste: (richText) => cleanToMarkdown(richText),

  // 2. render: Markdown → gestyltes HTML
  render: (md) => applyTheme(md, selectedTheme),

  // 3. export: Bilder bündeln + WeChat-Kompatibilität
  export: async (html) => {
    const compatible = await makeWeChatCompatible(html);
    return bundleImagesAsBase64(compatible);
  }
};
\`\`\`

## Zitate

> Jedes Design hat seinen eigenen Zitatstil – mit anderem Hintergrund, anderer Textfarbe und anderem linken Rand. Achte beim Wechseln der Designs darauf, wie sich das Zitat verändert.

## Tabellen

| Funktion | Beschreibung |
|------|------|
| Magisches Einfügen | Aus Lark/Notion/Word einfügen und automatisch Markdown erhalten |
| 30 Designs | Klassiker / Im Trend / Weitere Stile – für jeden Anlass |
| Bilder bündeln | Externe Bilder werden zu Base64, keine Fehler in WeChat |
| Bilder einfügen | Screenshots und Bilder direkt als Markdown-Bilder einfügen |
| Mehrere Bilder | Raster mit 2–3 Spalten, die in WeChat nicht zerfallen |
| Code-Hervorhebung | Fenster im macOS-Stil + Syntaxhervorhebung für viele Sprachen |
| Geräte-Vorschau | In Echtzeit zwischen Mobil / Tablet / Desktop wechseln |
| Export | Export als PDF und HTML |

---

**Tipps**:

- Wechsle oben das „Design“, um die Wirkung der verschiedenen Designs zu sehen
- Kopiere etwas aus Lark oder Notion und füge es links ein, um das magische Einfügen auszuprobieren
- Klicke auf die Gerätesymbole, um zwischen Mobil-, Tablet- und Desktop-Vorschau zu wechseln
- Lösche den gesamten Inhalt oben und fang an zu schreiben
`;

export default content;
