// Renders MENU (from menu-data.js) into the page.
// No need to edit this file to change menu content.

function renderMenu() {
  const nav = document.getElementById('category-nav');
  const main = document.getElementById('menu-sections');

  MENU.forEach((section, i) => {
    const slug = slugify(section.category);

    // nav pill
    const navBtn = document.createElement('a');
    navBtn.href = '#' + slug;
    navBtn.className = 'nav-pill';
    navBtn.textContent = section.category;
    nav.appendChild(navBtn);

    // section
    const sectionEl = document.createElement('section');
    sectionEl.className = 'menu-section';
    sectionEl.id = slug;

    const heading = document.createElement('div');
    heading.className = 'section-heading';
    heading.innerHTML = `
      <span class="section-number">${String(i + 1).padStart(2, '0')}</span>
      <h2>${section.category}</h2>
    `;
    sectionEl.appendChild(heading);

    const list = document.createElement('div');
    list.className = 'item-list';

    section.items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'item-row' + (item.tag === 'soldout' ? ' is-soldout' : '');

      const tagHtml = item.tag === 'favorite'
        ? '<span class="tag tag-favorite">NC FAVORITE</span>'
        : item.tag === 'soldout'
          ? '<span class="tag tag-soldout">OUT OF STOCK</span>'
          : '';

      row.innerHTML = `
        <div class="item-main">
          <div class="item-name-line">
            <span class="item-name">${item.name}</span>
            ${tagHtml}
          </div>
          ${item.description ? `<p class="item-desc">${item.description}</p>` : ''}
        </div>
        <div class="item-price">${item.price}</div>
      `;
      list.appendChild(row);
    });

    sectionEl.appendChild(list);
    main.appendChild(sectionEl);
  });

  // active nav highlight on scroll
  const sections = document.querySelectorAll('.menu-section');
  const pills = document.querySelectorAll('.nav-pill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        pills.forEach(p => p.classList.remove('active'));
        const activePill = document.querySelector(`.nav-pill[href="#${entry.target.id}"]`);
        if (activePill) activePill.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(s => observer.observe(s));
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

document.addEventListener('DOMContentLoaded', renderMenu);
