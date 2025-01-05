document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('#tabs-list li');
  const contentSections = document.querySelectorAll('#content .section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');

      // Remove 'is-active' class from all tabs
      tabs.forEach(t => t.classList.remove('is-active'));

      // Add 'is-active' class to the clicked tab
      tab.classList.add('is-active');

      // Hide all content sections
      contentSections.forEach(section => section.style.display = 'none');

      // Show the content section corresponding to the clicked tab
      const targetContent = document.querySelector(`#${targetTab}-content`);
      if (targetContent) {
        targetContent.style.display = 'block';
      }
    });
  });
});