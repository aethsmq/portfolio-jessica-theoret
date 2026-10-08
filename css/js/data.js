// Jeu de donnees de secours utilise si data/projet.json ne peut pas etre charge.
window.PROJECTS = [
  // Projet d'animation 3D et de montage video.
  {
    id: "In my mind",
    title: "In my mind",
    cover: "assets/image/in my mind - Trim.gif",
    alt: "Animation 3D de personnages flottants sous l’eau",
    heroImage: "assets/image/in my mind - Trim.gif",
    videoLink: "https://youtu.be/b_uDgA1EgUw",
    link: "https://youtu.be/b_uDgA1EgUw",
    intro: [
      "Une animation en 3D qui suit une petite fille dans son univers, où son imagination prend peu à peu vie autour d’elle. À travers différents décors et situations, elle s’enfonce toujours plus profondément dans son monde intérieur, laissant la réalité se mélanger à ses rêves.",
      "Le projet explore le voyage intérieur, la curiosité et la sensation de flotter entre rêve et réalité.",
    ],
    software: [
      { name: "DaVinci Resolve", icon: "assets/icone/davinci.png" },
      { name: "Maya", icon: "assets/icone/maya.png" },
      { name: "Illustrator", icon: "assets/icone/Illustrator icon.png" },
    ],
    roles: ["Animateur 3d", "Monteuse video"],
    palette: ["#051028", "#C3D6E5", "#fbd984", "#9C8AFF", "#ffffff"],
    moodboard: ["assets/image/moodboard1.png", "assets/image/moodboard2.png"],
    contact: "Une expérience visuelle et sonore qui plonge le spectateur dans une rêverie subaquatique où l’imagination prend le dessus.",
  },
  // Projet video construit autour d'une atmosphere de dimension parallele.
  {
    id: "La reflection perdue",
    title: "La reflection perdue",
    cover: "assets/image/reflectiongif.gif",
    alt: "Projet vidéo avec une télévision et des chaussures",
    heroImage: "assets/image/reflectiongif.gif",
    link: "https://youtu.be/zXPtqvA6bJQ?si=DGBEXCj7Nhg4M2Vn",
    intro: [
      "une jeune fille plongée dans sa lecture perd peu à peu le fil du réel. Lorsqu'elle détache ses yeux des pages, le paysage urbain a cédé la place à une atmosphère décalée : sans s'en rendre compte, elle a franchi la frontière d'une autre dimension. Mais le véritable trouble survient lorsqu'au bout du wagon, son regard croise celui d'une passagère au visage parfaitement identique au sien.",
    ],
    software: [
      { name: "DaVinci Resolve", icon: "assets/icone/davinci.png" },
      { name: "Reaper", icon: "assets/icone/reaper.png" },
    ],
    roles: ["Monteur vidéo", "Motion designer"],
    palette: ["#000000", "#61090C", "#C40A11", "#d7d7d3", "#ffff"],
    moodboard: ["assets/image/moodboard1.png", "assets/image/moodboard2.png"],
    contact: "Un projet de mise en scène vidéo orienté autour du mouvement, de la texture et de l’ambiance visuelle.",
  },
  // Projet d'illustration: ses images de moodboard sont affichees sur la page detaillee.
  {
    id: "illustration",
    title: "Illustration",
    cover: "assets/image/Picture2.jpg",
    alt: "Illustration d’un personnage aux couleurs bleues et vertes",
    heroImage: "assets/image/Picture2.jpg",
    intro: [
      "Un projet d’illustration composé de six dessins et d’un logo, réalisés avec une palette de couleurs cohérente afin de créer une identité visuelle uniforme. Les illustrations s’inspirent de l’esthétique Y2K et du style anime, en mélangeant des couleurs vibrantes, des formes dynamiques et une touche rétro-futuriste. L’objectif était de créer un univers visuel reconnaissable et harmonieux à travers l’ensemble des créations.",
    ],
    software: [{ name: "Photoshop", icon: "assets/icone/photoshop.png" }],
    roles: ["Illustratrice", "Direction artistique"],
    palette: ["#081c2b", "#6e93c5", "#76d6d1", "#d6e7ef", "#f5d7a8"],
    moodboard: ["assets/image/Image2.jpg", "assets/image/Image7.jpg"],
    contact:
      "Ce moodboard présente une direction artistique inspirée de l’esthétique Y2K, avec une approche graphique colorée et futuriste. Les références mettent en avant des formes arrondies, des typographies originales, des effets de contour et des éléments graphiques",
  },
  // Projet de montage video inspire par un univers sous-marin.
  {
    id: "metamorphose",
    title: "Metamorphose",
    cover: "assets/image/metamorphosegif.gif",
    alt: "Projet vidéo en gros plan",
    heroImage: "assets/image/metamorphosegif.gif",
    link: "https://www.youtube.com/watch?v=m1eJhb7E1Hs",
    intro: [
      "Un projet de montage vidéo rapproché, cinétique et immersif, inspiré de l’univers mystérieux et envoûtant des sirènes. Le montage met l’accent sur les détails du visage, les textures et le maquillage afin de créer une esthétique aquatique et captivante. Les nuances de bleu et de violet dominent l’ensemble du projet pour rappeler l’ambiance sous-marine et renforcer son côté rêveur, mystérieux et fantastique.",
    ],
    software: [
      { name: "DaVinci Resolve", icon: "assets/icone/davinci.png" },
      { name: "Reaper", icon: "assets/icone/reaper.png" },
      { name: "Photoshop", icon: "assets/icone/photoshop.png" },
    ],
    roles: ["Monteur vidéo", "Cadreur"],
    palette: ["#1d6da3", "#5032a2", "#b53bb7", "#eda964", "#000000"],
    moodboard: ["assets/image/moodboard1.png", "assets/image/moodboard2.png"],
    contact: "Le travail se concentre sur l’intimité du cadre et sur la manière dont le mouvement peut transformer un simple détail en un acte narratif.",
  },
  // Projet de creation d'identite visuelle pour Animorency.
  {
    id: "Animorency",
    title: "Animorency",
    cover: "assets/image/logo color ver.png",
    alt: "Projet d’identité visuelle animé",
    heroImage: "assets/image/logo color ver.png",
    intro: [
      "Un projet de création de logo pour le club Animorency de l’AGEM. Le design s’inspire de l’esthétique anime afin de représenter l’univers du club de manière dynamique et reconnaissable. L’objectif était de créer un logo qui reflète davantage l’identité du club, ses intérêts et son côté créatif, tout en ayant une apparence moderne et attrayante pour les étudiants.",
    ],
    software: [
      { name: "Figma", icon: "assets/icone/Figma.png" },
      { name: "Photoshop", icon: "assets/icone/photoshop.png" },
    ],
    roles: ["Designer graphique", "Direction artistique"],
    palette: ["#2881AA", "#ADEDDC", "#EC503F"],
    moodboard: ["assets/image/moodboard1.png", "assets/image/moodboard2.png"],
    contact: "L’identité visuelle a été construite comme une signature claire, légère et distincte, qui garde une sensation de mouvement.",
  },
];
