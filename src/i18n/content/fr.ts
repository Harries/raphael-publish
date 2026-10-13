const content = `# Raphael Publish - Éditeur d’articles WeChat

> Bienvenue sur Raphael Publish, un moteur de mise en page Markdown moderne conçu pour les **comptes officiels WeChat** et les **créateurs de contenu** !

## Fonctionnalités principales

### 1. Collage magique

- **Collez depuis n’importe où** : copiez du texte enrichi depuis **Lark, Notion, Word** ou n’importe quelle page web, il devient du Markdown propre dès le collage
- **Nettoyage intelligent** : les styles superflus et les caractères parasites sont supprimés, seuls restent les paragraphes, le gras, les listes, les blocs de code et la structure essentielle
- **Rien à apprendre** : pas besoin de connaître Markdown, collez et c’est prêt
- **Collage direct d’images** : collez une capture d’écran ou une image du presse-papiers (Ctrl/Cmd + V), elle est insérée automatiquement en image Markdown

### 2. Mise en page multi-images

Les grilles à plusieurs colonnes sont prises en charge, comme les deux images côte à côte ci-dessous. Grâce au moteur \`wechatCompat\`, elles s’affichent aussi parfaitement dans WeChat :

![](https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop)
![](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop)

### 3. 30 thèmes soignés

Fini les modèles blancs qui se ressemblent tous. Passez d’un thème à l’autre parmi 30 thèmes visuels peaufinés (seuls quelques exemples représentatifs sont cités ici) :

1. **Minimalistes et classiques** : Mac, WeChat natif, Medium
2. **Lecture approfondie** : Claude, NYT, Retro
3. **Geek et business** : Stripe, Lark Workspace, Linear, Bloomberg

> Essayez de changer le « Thème » en haut de la page. Chacun a ses couleurs, ses polices et son style de citation.

### 4. Copie vers WeChat en un clic

Cliquez sur le bouton « **Copier pour WeChat** » puis collez dans l’éditeur du compte officiel : la mise en forme est entièrement conservée :

- **Images regroupées automatiquement** : toutes les images externes sont converties en Base64, plus d’erreur « cette image provient d’un tiers »
- **Aucune perte de style** : couleurs de fond, coins arrondis et espacements sont restitués fidèlement
- **Des tableaux intacts** : le DOM est reconstruit en coulisses, listes et tableaux ne se déforment pas dans WeChat

### 5. Aperçu multi-appareils en direct

La barre d’outils à droite propose trois tailles d’aperçu :

- **Vue mobile** (480px) : simule la largeur de lecture réelle dans WeChat
- **Vue tablette** (768px) : pour vérifier la lecture en mode paysage
- **Vue bureau** (PC) : aperçu complet en grand écran

### 6. Export

En plus de la copie vers WeChat, vous pouvez aussi :

- **Exporter en PDF** : générez un PDF de haute qualité pour l’archivage et le partage
- **Exporter en HTML** : récupérez le HTML complet avec ses styles, pour un e-mail ou une publication web

## Coloration du code

Une console de code façon macOS est intégrée, avec coloration syntaxique pour de nombreux langages :

\`\`\`javascript
// Flux principal du moteur Raphael Publish
const raphael = {
  // 1. smart paste : nettoyage du texte enrichi
  paste: (richText) => cleanToMarkdown(richText),

  // 2. render : Markdown → HTML stylisé
  render: (md) => applyTheme(md, selectedTheme),

  // 3. export : regroupement des images + compatibilité WeChat
  export: async (html) => {
    const compatible = await makeWeChatCompatible(html);
    return bundleImagesAsBase64(compatible);
  }
};
\`\`\`

## Citations

> Chaque thème a son propre style de citation, avec un fond, une couleur de texte et une bordure gauche différents. Observez la citation changer quand vous changez de thème.

## Tableaux

| Fonction | Description |
|------|------|
| Collage magique | Collez depuis Lark/Notion/Word et obtenez du Markdown automatiquement |
| 30 thèmes | Classiques / Tendance / Autres styles, pour toutes les situations |
| Regroupement des images | Les images externes passent en Base64, aucune erreur dans WeChat |
| Collage d’images | Collez captures et images directement en images Markdown |
| Multi-images | Grilles de 2 à 3 colonnes qui ne cassent pas dans WeChat |
| Coloration du code | Fenêtre façon macOS + coloration syntaxique multi-langage |
| Aperçu multi-appareils | Basculez entre mobile / tablette / bureau en temps réel |
| Export | Export en PDF et en HTML |

---

**Astuces** :

- Changez le « Thème » en haut de la page pour voir le rendu de chaque thème
- Copiez un contenu depuis Lark ou Notion et collez-le à gauche pour essayer le collage magique
- Cliquez sur les icônes d’appareil pour passer de l’aperçu mobile à tablette ou bureau
- Effacez tout ce qui précède et commencez à écrire
`;

export default content;
