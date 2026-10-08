// Donnees de secours definies dans data.js.
const FALLBACK_PROJECTS = window.PROJECTS || [];

// Charge les donnees locales, puis utilise le jeu de secours en cas d'erreur.
async function loadProjects() {
  if (Array.isArray(FALLBACK_PROJECTS) && FALLBACK_PROJECTS.length) {
    return FALLBACK_PROJECTS;
  }

  try {
    const response = await fetch("data/projet.json");
    if (!response.ok) {
      throw new Error("Project data could not be loaded");
    }

    const data = await response.json();
    if (Array.isArray(data) && data.length) {
      return data;
    }
  } catch (error) {
    console.warn("Loading projet.json failed, using fallback dataset.", error);
  }

  return FALLBACK_PROJECTS;
}

// Cree les cartes de projets de la page d'accueil a partir des donnees.
function renderHomeProjects(projects) {
  const grid = document.querySelector("#project-grid");
  if (!grid || !projects.length) {
    return;
  }

  grid.innerHTML = projects
    .map(
      (project) => `
        <a class="project-tile" href="projets.html?id=${project.id}" data-project-id="${project.id}">
          <img src="${project.cover}" alt="${project.alt || project.title}" />
          <span class="project-tile__label">${project.title}</span>
        </a>
      `,
    )
    .join("");
}

// Uniformise une valeur de moodboard en tableau d'images.
function normalizeProjectList(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  if (typeof value === "string" && value.trim()) {
    return [value];
  }

  return [];
}

// Gere le moodboard: il est visible uniquement pour le projet illustration.
function renderProjectMoodboard(project, moodboardImage, previousButton, nextButton) {
  const moodboardSection = document.querySelector("#project-moodboard");
  const moodboardSlides = normalizeProjectList(project.moodboard || project.moodboardImages);

  if (!moodboardSection || !moodboardImage) {
    return;
  }

  const isIllustrationProject = (project.id || "").toLowerCase() === "illustration";
  moodboardSection.hidden = !isIllustrationProject;

  if (!isIllustrationProject || !moodboardSlides.length) {
    return;
  }

  let index = 0;

  // Actualise l'image et son texte alternatif selon la diapositive active.
  const updateMoodboard = () => {
    const slide = moodboardSlides[index] || moodboardSlides[0];
    moodboardImage.src = slide;
    moodboardImage.alt = `${project.title} moodboard ${index + 1}`;
  };

  if (previousButton) {
    previousButton.onclick = () => {
      index = (index - 1 + moodboardSlides.length) % moodboardSlides.length;
      updateMoodboard();
    };
  }

  if (nextButton) {
    nextButton.onclick = () => {
      index = (index + 1) % moodboardSlides.length;
      updateMoodboard();
    };
  }

  updateMoodboard();
}

// Gere la galerie d'images supplementaires du projet illustration.
function renderPortraitGallery(project) {
  const portraitGallery = document.querySelector("#portrait-gallery");
  const portraitGalleryImage = document.querySelector("#portrait-gallery-image");
  const portraitPrevButton = document.querySelector('#portrait-gallery [aria-label="Projet précédent"]');
  const portraitNextButton = document.querySelector('#portrait-gallery [aria-label="Projet suivant"]');

  if (!portraitGallery || !portraitGalleryImage) {
    return;
  }

  const portraitImages = [
    "assets/image/Image1.jpg",
    "assets/image/Image3.jpg",
    "assets/image/Image4.jpg",
    "assets/image/Image5.jpg",
    "assets/image/Image6.jpg",
  ];
  let portraitIndex = 0;

  // Actualise l'image de la galerie et son texte alternatif.
  const updatePortraitGallery = () => {
    portraitGalleryImage.src = portraitImages[portraitIndex] || portraitImages[0];
    portraitGalleryImage.alt = `${project.title} projet ${portraitIndex + 1}`;
  };

  const projectKey = (project.id || "").toLowerCase();
  const isPortraitProject = ["portrait", "illustration"].includes(projectKey);
  portraitGallery.hidden = !isPortraitProject;

  if (portraitPrevButton) {
    portraitPrevButton.onclick = () => {
      portraitIndex = (portraitIndex - 1 + portraitImages.length) % portraitImages.length;
      updatePortraitGallery();
    };
  }

  if (portraitNextButton) {
    portraitNextButton.onclick = () => {
      portraitIndex = (portraitIndex + 1) % portraitImages.length;
      updatePortraitGallery();
    };
  }

  updatePortraitGallery();
}

// Remplit tous les blocs de la page projet avec le projet selectionne.
function renderProjectPage(project) {
  const heroImage = document.querySelector("#project-hero-image");
  const title = document.querySelector("#project-title");
  const introCopy = document.querySelector("#project-intro-copy");
  const softwareList = document.querySelector("#project-software-list");
  const rolesList = document.querySelector("#project-roles-list");
  const moodboardImage = document.querySelector("#project-moodboard-image");
  const contactSection = document.querySelector("#contact");
  const contactText = document.querySelector("#project-contact-text");
  const playButton = document.querySelector("#project-play-button");
  const paletteContainer = document.querySelector("#project-palette");
  const previousButton = document.querySelector('#project-moodboard .moodboard-arrow[aria-label="Moodboard précédent"]');
  const nextButton = document.querySelector('#project-moodboard .moodboard-arrow[aria-label="Moodboard suivant"]');

  if (!project) {
    return;
  }

  const isIllustrationProject = (project.id || "").toLowerCase() === "illustration";
  if (contactSection) {
    contactSection.hidden = !isIllustrationProject;
  }

  const videoLink = project.videoLink || project.link || "";

  // Ouvre le lien video du projet dans un nouvel onglet.
  if (playButton) {
    playButton.dataset.videoLink = videoLink;
    playButton.onclick = () => {
      if (videoLink) {
        window.open(videoLink, "_blank", "noopener,noreferrer");
      }
    };
  }

  // Remplit le hero et le titre du projet.
  if (heroImage) {
    heroImage.src = project.heroImage || project.cover;
    heroImage.alt = project.alt || project.title;
  }

  if (title) {
    title.textContent = project.title;
  }

  // Remplit la description, les logiciels, les roles et la palette.
  if (introCopy) {
    introCopy.innerHTML = (project.intro || []).map((paragraph) => `<p>${paragraph}</p>`).join("");
  }

  if (softwareList) {
    softwareList.innerHTML = (project.software || [])
      .map(
        (tool) => `
          <img src="${tool.icon}" alt="${tool.name || "Logiciel"}" title="${tool.name || "Logiciel"}" />
        `,
      )
      .join("");
  }

  if (rolesList) {
    rolesList.innerHTML = (project.roles || []).map((role) => `<li>${role}</li>`).join("");
  }

  if (paletteContainer) {
    const palette = normalizeProjectList(project.palette || project.colors || project.colorPalette);
    const swatches = palette.length ? palette : ["#171B2C", "#5E7CC6", "#A0D9DE", "#DBE7EE", "#F2D8AE"];
    paletteContainer.innerHTML = swatches
      .map((color) => `<span class="project-palette__swatch" style="background:${color};" aria-label="Couleur ${color}"></span>`)
      .join("");
  }

  // Lance les deux galeries apres avoir rempli les informations principales.
  renderProjectMoodboard(project, moodboardImage, previousButton, nextButton);
  renderPortraitGallery(project);

  if (contactText) {
    contactText.textContent = project.contact || "";
  }

  document.title = `Jessica Theoret | ${project.title}`;
}

// Determine la page courante et lance le rendu correspondant.
async function initPage() {
  const page = document.body?.dataset?.page;
  const projects = await loadProjects();

  if (page === "home") {
    renderHomeProjects(projects);
    return;
  }

  if (page === "project") {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("id");
    const selectedProject = projects.find((project) => project.id === projectId) || projects[0];
    renderProjectPage(selectedProject);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPage);
} else {
  initPage();
}
