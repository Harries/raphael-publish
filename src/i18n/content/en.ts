const content = `# Raphael Publish - WeChat Article Formatter

> Welcome to Raphael Publish, a modern Markdown typesetting engine built for **WeChat Official Accounts** and **content creators**!

## Core Features

### 1. Magic Paste

- **Paste from anywhere**: copy rich text from **Lark, Notion, Word** or any web page, and it turns into clean Markdown the moment you paste
- **Smart cleanup**: redundant styles and garbage are stripped away, keeping only paragraphs, bold text, lists, code blocks and other core structure
- **Nothing to learn**: you don't need to know Markdown, just paste and go
- **Paste images directly**: paste a screenshot or clipboard image (Ctrl/Cmd + V) and a Markdown image is inserted automatically

### 2. Multi-Image Layout

Multi-column grids are supported, like the two side-by-side images below. Thanks to the \`wechatCompat\` engine they render perfectly in WeChat as well:

![](https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop)
![](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop)

### 3. 30 Handcrafted Themes

Say goodbye to look-alike white templates. Switch between 30 carefully polished visual themes (only a few representative ones are listed here):

1. **Minimal & classic**: Mac, WeChat Native, Medium
2. **Deep reading**: Claude, NYT, Retro
3. **Geek & business**: Stripe, Lark Workspace, Linear, Bloomberg

> Try switching the "Theme" at the top. Each one has its own colors, fonts and blockquote style.

### 4. One-Click Copy to WeChat

Click the "**Copy for WeChat**" button and paste into the Official Account editor with formatting fully preserved:

- **Images bundled automatically**: every external image is converted to Base64, so no "this image comes from a third party" errors
- **No style loss**: background colors, rounded corners and spacing are restored precisely
- **Tables stay intact**: the DOM is rebuilt under the hood, so lists and tables don't break in WeChat

### 5. Live Multi-Device Preview

The toolbar on the right offers three preview sizes:

- **Mobile view** (480px): simulates the real reading width in WeChat
- **Tablet view** (768px): previews the landscape reading experience
- **Desktop view** (PC): full wide-screen preview

### 6. Export

Besides copying to WeChat, you can also:

- **Export PDF**: generate a high-quality PDF for archiving and sharing
- **Export HTML**: get the complete styled HTML for email or web publishing

## Code Highlighting

A built-in macOS-style code console with syntax highlighting for many languages:

\`\`\`javascript
// Core pipeline of the Raphael Publish engine
const raphael = {
  // 1. smart paste: clean up rich text
  paste: (richText) => cleanToMarkdown(richText),

  // 2. render: Markdown → styled HTML
  render: (md) => applyTheme(md, selectedTheme),

  // 3. export: bundle images + WeChat compatibility
  export: async (html) => {
    const compatible = await makeWeChatCompatible(html);
    return bundleImagesAsBase64(compatible);
  }
};
\`\`\`

## Blockquotes

> Every theme has its own blockquote style, with a different background, text color and left border. Watch the blockquote change as you switch themes.

## Tables

| Feature | Description |
|------|------|
| Magic paste | Paste from Lark/Notion/Word and get Markdown automatically |
| 30 themes | Classic / Trending / More styles, for every scenario |
| Image bundling | External images become Base64, no errors in WeChat |
| Image paste | Paste screenshots or images straight in as Markdown images |
| Multi-image layout | 2-3 column grids that don't collapse in WeChat |
| Code highlighting | macOS-style window controls + multi-language syntax highlighting |
| Multi-device preview | Switch between mobile / tablet / desktop in real time |
| Export | PDF and HTML export |

---

**Tips**:

- Switch the "Theme" at the top to see how different themes look
- Copy something from Lark or Notion and paste it on the left to try magic paste
- Click the device icons to switch between mobile / tablet / desktop preview
- Clear everything above and start writing
`;

export default content;
