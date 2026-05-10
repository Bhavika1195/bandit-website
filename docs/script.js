const pageTitle = document.getElementById('page-title');
const pageContent = document.getElementById('page-content');
const taskLinks = document.querySelectorAll('.task-link');

async function loadPage(pageFile) {
  try {
    const response = await fetch(pageFile);
    if (!response.ok) {
      throw new Error('Unable to load page');
    }

    const markdown = await response.text();
    pageTitle.innerHTML = `<h2>${pageFile.replace('.md', '').replace('bandit', 'Bandit ')}</h2>`;
    pageContent.innerHTML = marked.parse(markdown);
  } catch (error) {
    pageTitle.innerHTML = '<h2>Error</h2>';
    pageContent.innerHTML = `<p>Could not load <strong>${pageFile}</strong>. ${error.message}</p>`;
  }
}

function setupTaskLinks() {
  taskLinks.forEach((button) => {
    button.addEventListener('click', () => {
      taskLinks.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      loadPage(button.dataset.page);
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setupTaskLinks();
  loadPage('bandit0.md');
});
