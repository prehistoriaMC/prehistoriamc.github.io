// Cargar componentes reutilizables (header y footer)
document.addEventListener('DOMContentLoaded', async function() {
  // Cargar el header
  const headerPlaceholder = document.querySelector('#header-placeholder');
  if (headerPlaceholder) {
    try {
      const response = await fetch('components/header.html');
      const headerHtml = await response.text();
      headerPlaceholder.innerHTML = headerHtml;
      
      // Añadir clase específica para la página actual
      const pageName = window.location.pathname.split('/').pop().split('.')[0] || 'index';
      const pageTitle = document.querySelector('#page-title');
      if (pageTitle) {
        pageTitle.textContent = pageName;
      }
    } catch (error) {
      console.error('Error al cargar el header:', error);
    }
  }
  
  // Cargar el footer
  const footerPlaceholder = document.querySelector('#footer-placeholder');
  if (footerPlaceholder) {
    try {
      const response = await fetch('components/footer.html');
      const footerHtml = await response.text();
      footerPlaceholder.innerHTML = footerHtml;
    } catch (error) {
      console.error('Error al cargar el footer:', error);
    }
  }
  
  // Llamar a la función para resaltar la página actual después de cargar los componentes
  // Pequeño retraso para asegurar que los elementos estén en el DOM
  setTimeout(() => {
    if (typeof highlightCurrentPage === 'function') {
      highlightCurrentPage();
    }
  }, 100);
});