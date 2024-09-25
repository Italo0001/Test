document.addEventListener('DOMContentLoaded', () => {
  // Controle do menu hamburguer
  const openMenuBtn = document.getElementById('open-menu');
  const closeMenuBtn = document.getElementById('close-menu');
  const menuBurguer = document.getElementById('menu-burguer');
  const body = document.body;

  // Função para abrir o menu
  openMenuBtn.addEventListener('click', function() {
      menuBurguer.classList.add('show');
      body.classList.add('menu-open'); // Adiciona a classe ao body para reduzir a opacidade do conteúdo
  });

  // Função para fechar o menu
  closeMenuBtn.addEventListener('click', function() {
      menuBurguer.classList.remove('show');
      body.classList.remove('menu-open'); // Remove a classe do body para restaurar a opacidade do conteúdo
  });

  // Controle da rotação do botão
  let isAdditionalContentVisible = false;

  function toggleContent() {
      const slideContent = document.querySelector('.slide-content');
      const toggleBtn = document.querySelector('.toggle-btn');

      if (!isAdditionalContentVisible) {
          slideContent.style.transform = 'translateX(-50%)'; // Move para a esquerda para mostrar o conteúdo adicional
          toggleBtn.classList.add('rotate'); // Adiciona a rotação
      } else {
          slideContent.style.transform = 'translateX(0)'; // Move para a direita para mostrar o conteúdo original
          toggleBtn.classList.remove('rotate'); // Remove a rotação
      }

      isAdditionalContentVisible = !isAdditionalContentVisible; // Alterna o estado
  }

  // Controle de rolagem da galeria
  const gallery = document.querySelector('.image-gallery');
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');
  const scrollAmount = 200; // Ajuste a quantidade de rolagem

  leftBtn.addEventListener('click', () => {
      gallery.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
      });
  });

  rightBtn.addEventListener('click', () => {
      gallery.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });
});
const zoomedOverlay = document.getElementById('zoomedOverlay');
const zoomedImage = document.getElementById('zoomedImage');

// Adiciona um event listener para cada imagem na galeria
document.querySelectorAll('.Equipamentos img').forEach(img => {
  img.addEventListener('click', function() {
    zoomedImage.src = this.src; // Atualiza a imagem no overlay
    zoomedOverlay.style.display = 'flex'; // Mostra o overlay
  });
});

// Adiciona um event listener para o overlay para esconder quando clicado
zoomedOverlay.addEventListener('click', function() {
  zoomedOverlay.style.display = 'none'; // Esconde o overlay quando clicado
});






