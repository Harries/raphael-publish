const content = `# Raphael Publish - Editor de artigos para WeChat

> Boas-vindas ao Raphael Publish, um motor moderno de diagramação em Markdown feito para **contas oficiais do WeChat** e **criadores de conteúdo**!

## Principais recursos

### 1. Colagem mágica

- **Cole de qualquer lugar**: copie texto formatado do **Lark, Notion, Word** ou de qualquer página da web e ele vira Markdown limpo no momento em que você cola
- **Limpeza inteligente**: estilos redundantes e caracteres estranhos são removidos, mantendo apenas parágrafos, negrito, listas, blocos de código e a estrutura essencial
- **Nada para aprender**: não é preciso saber Markdown; é só colar e usar
- **Cole imagens diretamente**: cole uma captura de tela ou imagem da área de transferência (Ctrl/Cmd + V) e ela é inserida automaticamente como imagem Markdown

### 2. Layout com várias imagens

Há suporte a grades de várias colunas, como as duas imagens lado a lado abaixo. Graças ao motor \`wechatCompat\`, elas também aparecem perfeitamente no WeChat:

![](https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop)
![](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop)

### 3. 30 temas feitos com capricho

Diga adeus aos modelos brancos todos iguais. Alterne entre 30 temas visuais cuidadosamente lapidados (aqui estão listados apenas alguns representativos):

1. **Minimalistas e clássicos**: Mac, WeChat nativo, Medium
2. **Leitura aprofundada**: Claude, NYT, Retro
3. **Geek e negócios**: Stripe, Lark Workspace, Linear, Bloomberg

> Experimente trocar o “Tema” no topo. Cada um tem suas próprias cores, fontes e estilo de citação.

### 4. Copie para o WeChat com um clique

Clique no botão “**Copiar para o WeChat**” e cole no editor da conta oficial com a formatação totalmente preservada:

- **Imagens empacotadas automaticamente**: todas as imagens externas são convertidas em Base64, sem o erro “esta imagem vem de terceiros”
- **Sem perda de estilo**: cores de fundo, cantos arredondados e espaçamentos são reproduzidos com precisão
- **Tabelas intactas**: o DOM é reconstruído nos bastidores, então listas e tabelas não quebram no WeChat

### 5. Pré-visualização ao vivo em vários dispositivos

A barra de ferramentas à direita oferece três tamanhos de pré-visualização:

- **Visualização móvel** (480px): simula a largura real de leitura no WeChat
- **Visualização tablet** (768px): para conferir a leitura em modo paisagem
- **Visualização desktop** (PC): pré-visualização completa em tela larga

### 6. Exportação

Além de copiar para o WeChat, você também pode:

- **Exportar PDF**: gerar um PDF de alta qualidade para arquivar e compartilhar
- **Exportar HTML**: obter o HTML completo com estilos, para e-mail ou publicação na web

## Realce de código

Um console de código no estilo macOS vem embutido, com realce de sintaxe para várias linguagens:

\`\`\`javascript
// Fluxo principal do motor do Raphael Publish
const raphael = {
  // 1. smart paste: limpa o texto formatado
  paste: (richText) => cleanToMarkdown(richText),

  // 2. render: Markdown → HTML estilizado
  render: (md) => applyTheme(md, selectedTheme),

  // 3. export: empacotamento de imagens + compatibilidade com o WeChat
  export: async (html) => {
    const compatible = await makeWeChatCompatible(html);
    return bundleImagesAsBase64(compatible);
  }
};
\`\`\`

## Citações

> Cada tema tem seu próprio estilo de citação, com fundo, cor de texto e borda esquerda diferentes. Observe a citação mudar ao trocar de tema.

## Tabelas

| Recurso | Descrição |
|------|------|
| Colagem mágica | Cole do Lark/Notion/Word e obtenha Markdown automaticamente |
| 30 temas | Clássicos / Tendências / Mais estilos, para qualquer cenário |
| Empacotamento de imagens | Imagens externas viram Base64, sem erros no WeChat |
| Colagem de imagens | Cole capturas ou imagens diretamente como imagens Markdown |
| Várias imagens | Grades de 2 a 3 colunas que não quebram no WeChat |
| Realce de código | Janela no estilo macOS + realce de sintaxe multilíngue |
| Pré-visualização multidispositivo | Alterne entre móvel / tablet / desktop em tempo real |
| Exportação | Exportação em PDF e HTML |

---

**Dicas**:

- Troque o “Tema” no topo para ver o visual de cada um
- Copie algo do Lark ou do Notion e cole à esquerda para testar a colagem mágica
- Clique nos ícones de dispositivo para alternar entre móvel / tablet / desktop
- Apague tudo acima e comece a escrever
`;

export default content;
