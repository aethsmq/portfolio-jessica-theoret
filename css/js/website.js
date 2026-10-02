const FALLBACK_PROJECTS = window.PROJECTS || [];

async function loadProjects() {
  if (Array.isArray(FALLBACK_PROJECTS) && FALLBACK_PROJECTS.length) {
    return FALLBACK_PROJECTS;
  }

  try {
    const response = await fetch('data/projet.json');
    if (!response.ok) {
      throw new Error('Project data could not be loaded');
    }

    const data = await response.json();
    if (Array.isArray(data) && data.length) {
      return data;
    }
  } catch (error) {
    console.warn('Loading projet.json failed, using fallback dataset.', error);
  }

  return FALLBACK_PROJECTS;
}

function renderHomeProjects(projects) {
  const grid = document.querySelector('#project-grid');
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
      `
    )
    .join('');
}

function renderProjectPage(project) {
  const heroImage = document.querySelector('#project-hero-image');
  const title = document.querySelector('#project-title');
  const introCopy = document.querySelector('#project-intro-copy');
  const softwareList = document.querySelector('#project-software-list');
  const rolesList = document.querySelector('#project-roles-list');
  const moodboardImage = document.querySelector('#project-moodboard-image');
  const contactText = document.querySelector('#project-contact-text');
  const playButton = document.querySelector('#project-play-button');

  if (!project) {
    return;
  }

  const videoLink = project.videoLink || project.link || '';

  if (playButton) {
    playButton.dataset.videoLink = videoLink;
    playButton.onclick = () => {
      if (videoLink) {
        window.open(videoLink, '_blank', 'noopener,noreferrer');
      }
    };
  }

  if (heroImage) {
    heroImage.src = project.heroImage || project.cover;
    heroImage.alt = project.alt || project.title;
  }

  if (title) {
    title.textContent = project.title;
  }

  if (introCopy) {
    introCopy.innerHTML = (project.intro || []).map((paragraph) => `<p>${paragraph}</p>`).join('');
  }

  if (softwareList) {
    softwareList.innerHTML = (project.software || [])
      .map(
        (tool) => `
          <img src="${tool.icon}" alt="${tool.name || 'Logiciel'}" title="${tool.name || 'Logiciel'}" />
        `
      )
      .join('');
  }

  if (rolesList) {
    rolesList.innerHTML = (project.roles || []).map((role) => `<li>${role}</li>`).join('');
  }

  if (moodboardImage) {
    moodboardImage.src = project.moodboard || project.heroImage || project.cover;
    moodboardImage.alt = `${project.title} moodboard`;
  }

  if (contactText) {
    contactText.textContent = project.contact || '';
  }

  document.title = `Jessica Theoret | ${project.title}`;
}

async function initPage() {
  const page = document.body?.dataset?.page;
  const projects = await loadProjects();

  if (page === 'home') {
    renderHomeProjects(projects);
    return;
  }

  if (page === 'project') {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const selectedProject = projects.find((project) => project.id === projectId) || projects[0];
    renderProjectPage(selectedProject);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
