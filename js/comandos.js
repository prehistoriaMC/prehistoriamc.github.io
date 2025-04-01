// Datos de los comandos
const COMMANDS = [
  // Teleport Commands
  {
    id: 1,
    name: "spawn",
    syntax: "/spawn",
    description: "Te teletransporta al punto de aparición del servidor.",
    category: "teleport",
    rank: "usuario"
  },
  {
    id: 2,
    name: "rtp",
    syntax: "/rtp",
    description: "Te teletransporta a una ubicación aleatoria en el mapa.",
    category: "teleport",
    rank: "usuario"
  },
  {
    id: 3,
    name: "home",
    syntax: "/home [nombre]",
    description: "Te teletransporta a tu hogar establecido.",
    category: "teleport",
    rank: "usuario"
  },
  {
    id: 4,
    name: "sethome",
    syntax: "/sethome [nombre]",
    description: "Establece un punto de home en tu ubicación actual.",
    category: "teleport",
    rank: "usuario"
  },
  {
    id: 5,
    name: "delhome",
    syntax: "/delhome [nombre]",
    description: "Elimina uno de tus puntos de home establecidos.",
    category: "teleport",
    rank: "usuario"
  },
  {
    id: 6,
    name: "tpo",
    syntax: "/tpo [jugador]",
    description: "Teletransportarse a otro jugador (disponible solo para helpers).",
    category: "teleport",
    rank: "helper"
  },
  {
    id: 7,
    name: "tp",
    syntax: "/tp [jugador]",
    description: "Teletransportarse directamente a otro jugador (reemplaza tpo para moderadores).",
    category: "teleport",
    rank: "moderador"
  },
  {
    id: 8,
    name: "warp",
    syntax: "/warp [nombre]",
    description: "Te teletransporta a un punto warp del servidor, como 'meteorito' o 'misiones'.",
    category: "teleport",
    rank: "usuario"
  },
  
  // Economy Commands
  {
    id: 9,
    name: "balance",
    syntax: "/balance",
    description: "Muestra la cantidad de dinero que tienes en el servidor.",
    category: "economy",
    rank: "usuario"
  },
  {
    id: 10,
    name: "withdraw",
    syntax: "/withdraw [cantidad]",
    description: "Retira dinero de tu cuenta en forma de efectivo físico.",
    category: "economy",
    rank: "usuario"
  },
  {
    id: 11,
    name: "shop",
    syntax: "/shop",
    description: "Abre el menú de la tienda del servidor para comprar y vender ítems.",
    category: "economy",
    rank: "usuario"
  },
  {
    id: 12,
    name: "pay",
    syntax: "/pay [jugador] [cantidad]",
    description: "Envía dinero a otro jugador.",
    category: "economy",
    rank: "usuario"
  },
  {
    id: 13,
    name: "jobs",
    syntax: "/jobs",
    description: "Muestra el menú del plugin PicoJobs para elegir y gestionar tus trabajos.",
    category: "economy",
    rank: "usuario"
  },
  {
    id: 14,
    name: "eco",
    syntax: "/eco give/take/set [jugador] [cantidad]",
    description: "Administra la economía del servidor. Solo disponible para administradores.",
    category: "economy",
    rank: "admin"
  },
  {
    id: 15,
    name: "kit",
    syntax: "/kit [nombre]",
    description: "Obtiene un kit de ítems. Por ahora solo está disponible el kit inicial.",
    category: "economy",
    rank: "usuario"
  },
  
  // Admin/Moderación Commands
  {
    id: 16,
    name: "gamemode-limited",
    syntax: "/gamemode spectator/survival",
    description: "Cambia tu modo de juego. Helper solo puede usar supervivencia y espectador.",
    category: "protection",
    rank: "helper"
  },
  {
    id: 17,
    name: "gamemode",
    syntax: "/gamemode <modo>",
    description: "Cambia tu modo de juego a cualquier modo (creative, survival, spectator, adventure).",
    category: "protection",
    rank: "moderador"
  },
  {
    id: 18,
    name: "staffchat",
    syntax: "/staffchat <mensaje>",
    description: "Envía un mensaje al chat exclusivo del staff.",
    category: "chat",
    rank: "helper"
  },
  {
    id: 19,
    name: "kick",
    syntax: "/kick [jugador] [razón]",
    description: "Expulsa a un jugador del servidor.",
    category: "protection",
    rank: "helper"
  },
  {
    id: 20,
    name: "mute",
    syntax: "/mute [jugador] [tiempo] [razón]",
    description: "Silencia a un jugador por un tiempo determinado.",
    category: "chat",
    rank: "helper"
  },
  {
    id: 21,
    name: "vanish",
    syntax: "/vanish",
    description: "Te hace invisible para otros jugadores. Solo moderadores y administradores.",
    category: "protection",
    rank: "moderador"
  },
  {
    id: 22,
    name: "ban",
    syntax: "/ban [jugador] [tiempo] [razón]",
    description: "Bloquea a un jugador del servidor.",
    category: "protection",
    rank: "moderador"
  },
  {
    id: 23,
    name: "tempban",
    syntax: "/tempban [jugador] [tiempo] [razón]",
    description: "Bloquea temporalmente a un jugador del servidor.",
    category: "protection",
    rank: "moderador"
  },
  {
    id: 24,
    name: "unban",
    syntax: "/unban [jugador]",
    description: "Desbloquea a un jugador previamente baneado.",
    category: "protection",
    rank: "moderador"
  },
  
  // Chat Commands
  {
    id: 25,
    name: "msg",
    syntax: "/msg [jugador] [mensaje]",
    description: "Envía un mensaje privado a otro jugador.",
    category: "chat",
    rank: "usuario"
  },
  {
    id: 26,
    name: "r",
    syntax: "/r [mensaje]",
    description: "Responde rápidamente al último mensaje privado recibido.",
    category: "chat",
    rank: "usuario"
  },
  {
    id: 27,
    name: "ignore",
    syntax: "/ignore [jugador]",
    description: "Ignora los mensajes de un jugador específico.",
    category: "chat",
    rank: "usuario"
  },
  {
    id: 28,
    name: "broadcast",
    syntax: "/broadcast [mensaje]",
    description: "Envía un mensaje a todo el servidor con formato especial.",
    category: "chat",
    rank: "admin"
  }
];

// Categorías con sus datos
const CATEGORIES = {
  teleport: { title: "Teletransporte", icon: "fa-location-arrow" },
  economy: { title: "Economía", icon: "fa-coins" },
  protection: { title: "Protección", icon: "fa-shield-alt" },
  chat: { title: "Chat", icon: "fa-comments" }
};

// Jerarquía de rangos
const RANK_ACCESS = {
  usuario: ["usuario"],
  helper: ["usuario", "helper"],
  moderador: ["usuario", "helper", "moderador"],
  admin: ["usuario", "helper", "moderador", "admin"]
};

// Mapeo de nombres para mostrar
const RANK_DISPLAY_NAMES = {
  usuario: "Miembro",
  helper: "Ayudante",
  moderador: "Moderador",
  admin: "Administrador"
};

// Inicialización cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', function() {
  // Referencias a elementos
  const rankButtons = document.querySelectorAll('.rank-button');
  const searchInput = document.getElementById('search-input');
  const clearSearch = document.getElementById('clear-search');
  const categorySelect = document.getElementById('category-jump');
  const commandsList = document.getElementById('commands-list');
  const commandCount = document.getElementById('command-count');
  const currentRank = document.getElementById('current-rank');
  const noResults = document.getElementById('no-results');
  
  let selectedRank = 'usuario'; // Rango predeterminado
  let searchTerm = ''; // Término de búsqueda
  
  // Función para cambiar el rango seleccionado
  function setSelectedRank(rank) {
    selectedRank = rank;
    
    // Actualizar botones
    rankButtons.forEach(button => {
      if (button.getAttribute('data-rank') === rank) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
    
    // Actualizar texto del rango actual
    if (currentRank) {
      currentRank.textContent = RANK_DISPLAY_NAMES[rank] || rank.charAt(0).toUpperCase() + rank.slice(1);
    }
    
    // Aplicar filtros
    applyFilters();
  }
  
  // Event listeners para los botones de rango
  rankButtons.forEach(button => {
    button.addEventListener('click', function() {
      const rank = this.getAttribute('data-rank');
      setSelectedRank(rank);
    });
  });
  
  // Event listeners para la búsqueda
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      searchTerm = this.value.toLowerCase().trim();
      
      // Mostrar/ocultar botón de limpiar
      if (searchTerm.length > 0) {
        clearSearch.classList.add('visible');
      } else {
        clearSearch.classList.remove('visible');
      }
      
      applyFilters();
    });
    
    // Focus y blur para efectos de estilo
    searchInput.addEventListener('focus', function() {
      this.parentNode.parentNode.classList.add('focused');
    });
    
    searchInput.addEventListener('blur', function() {
      this.parentNode.parentNode.classList.remove('focused');
    });
  }
  
  // Event listener para limpiar búsqueda
  if (clearSearch) {
    clearSearch.addEventListener('click', function() {
      searchInput.value = '';
      searchTerm = '';
      this.classList.remove('visible');
      applyFilters();
    });
  }
  
  // Event listener para saltar a categoría
  if (categorySelect) {
    categorySelect.addEventListener('change', function() {
      const category = this.value;
      if (category) {
        const element = document.getElementById(category);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        this.value = ''; // Resetear después de saltar
      }
    });
  }
  
  // Función para agrupar comandos por categoría
  function groupCommandsByCategory(commands) {
    const grouped = {};
    
    // Inicializar todas las categorías
    Object.keys(CATEGORIES).forEach(category => {
      grouped[category] = [];
    });
    
    // Agrupar comandos
    commands.forEach(command => {
      if (grouped[command.category]) {
        grouped[command.category].push(command);
      }
    });
    
    return grouped;
  }
  
  // Función para filtrar comandos
  function filterCommands(rank, search) {
    const accessibleRanks = RANK_ACCESS[rank];
    
    return COMMANDS.filter(command => {
      // Verificar si el comando es accesible para el rango
      const isRankAccessible = accessibleRanks.includes(command.rank);
      
      // Verificar si coincide con el término de búsqueda
      const matchesSearch = search === '' || 
        command.name.toLowerCase().includes(search) ||
        command.description.toLowerCase().includes(search) ||
        command.syntax.toLowerCase().includes(search);
      
      // Casos especiales
      
      // 1. Si el rango es moderador o admin, ocultar comandos de helper "reemplazados"
      if (rank === "moderador" || rank === "admin") {
        // No mostrar el tpo de helper cuando estamos en moderador o admin, solo tp
        if (command.name === "tpo" && command.rank === "helper") {
          return false;
        }
        
        // No mostrar el gamemode limitado de helper cuando estamos en moderador o admin 
        if (command.name === "gamemode-limited" && command.rank === "helper") {
          return false;
        }
      }
      
      // 2. Si el rango es helper, mostrar solo los comandos limitados, no los completos
      if (rank === "helper") {
        // Para helper, mostramos gamemode-limited, no gamemode
        if (command.name === "gamemode" && command.rank === "moderador") {
          return false;
        }
        
        // Para helper, mostramos tpo, no tp
        if (command.name === "tp" && command.rank === "moderador") {
          return false;
        }
      }
      
      return isRankAccessible && matchesSearch;
    });
  }
  
  // Función para generar HTML de las tarjetas de comandos
  function generateCommandHTML(command) {
    return `
      <div class="command-card" data-id="${command.id}" data-rank="${command.rank}">
        <h4 class="command-name">
          <span>⚒️</span>/${command.name}
        </h4>
        <div class="command-syntax">
          ${command.syntax}
        </div>
        <p class="command-description">
          ${command.description}
        </p>
      </div>
    `;
  }
  
  // Función para generar el HTML de los encabezados de categoría
  function generateCategoryHTML(category, commands) {
    const categoryInfo = CATEGORIES[category];
    
    if (!commands || commands.length === 0) {
      return '';
    }
    
    return `
      <div class="command-category" id="${category}">
        <div class="category-header">
          <i class="fas ${categoryInfo.icon}"></i>
          <h3>${categoryInfo.title}</h3>
        </div>
        <div class="commands-grid">
          ${commands.map(command => generateCommandHTML(command)).join('')}
        </div>
      </div>
    `;
  }
  
  // Aplicar filtros y actualizar la UI
  function applyFilters() {
    // Filtrar comandos
    const filteredCommands = filterCommands(selectedRank, searchTerm);
    
    // Actualizar contador
    if (commandCount) {
      commandCount.textContent = filteredCommands.length;
    }
    
    // Mostrar/ocultar mensaje de no resultados
    if (noResults) {
      if (filteredCommands.length === 0) {
        noResults.classList.remove('hidden');
      } else {
        noResults.classList.add('hidden');
      }
    }
    
    // Agrupar por categoría
    const commandsByCategory = groupCommandsByCategory(filteredCommands);
    
    // Generar HTML por categoría
    let commandsHTML = '';
    Object.entries(commandsByCategory).forEach(([category, commands]) => {
      commandsHTML += generateCategoryHTML(category, commands);
    });
    
    // Actualizar en el DOM
    if (commandsList) {
      commandsList.innerHTML = commandsHTML;
    }
  }
  
  // Inicializar la vista
  setSelectedRank('usuario');
});
