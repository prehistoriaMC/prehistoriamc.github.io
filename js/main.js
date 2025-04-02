// Funciones principales para toda la web estática
document.addEventListener('DOMContentLoaded', function() {
  // Año actual en el footer
  const yearElements = document.querySelectorAll('.current-year');
  yearElements.forEach(el => {
    el.textContent = new Date().getFullYear();
  });
  
  // Animación de elementos flotantes
  const floatingElements = document.querySelectorAll('.bone-float');
  floatingElements.forEach(el => {
    // Agregamos retrasos aleatorios para que no floten todos al mismo tiempo
    el.style.animationDelay = Math.random() * 2 + 's';
  });
  
  // Resaltar la página actual en la navegación
  highlightCurrentPage();
});

// Agregar clase active al enlace de navegación actual
function highlightCurrentPage() {
  const currentPath = window.location.pathname;
  const filename = currentPath.split('/').pop();
  
  const navLinks = document.querySelectorAll('.navbar a, .footer-links a, .social-links a, nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (
      (href === filename) || 
      (href === 'index.html' && (filename === '' || filename === 'index.html')) ||
      (href === '/' && (filename === '' || filename === 'index.html')) ||
      (href === '/index.html' && (filename === '' || filename === 'index.html'))
    ) {
      link.classList.add('active');
    }
  });
  
  // Actualizar el título de la página si existe
  const pageTitle = document.getElementById('page-title');
  if (pageTitle) {
    if (filename === '' || filename === 'index.html') {
      pageTitle.textContent = 'inicio';
    } else {
      pageTitle.textContent = filename.replace('.html', '');
    }
  }
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info', duration = 3000) {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animación de entrada
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Eliminar después del tiempo especificado
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, duration);
}
