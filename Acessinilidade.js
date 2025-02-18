document.addEventListener("DOMContentLoaded", function () {
    // Seletor para todos os elementos de lista (li) dentro de <ul> ou <ol>
    const allListItems = document.querySelectorAll('ul li, ol li, div ul, div ul h1, div ul h4, div ul a, div h1, div h2, div h3, div h4, div div div div div h4, div div div div div a, h1, h2, h3, h4');
    
    // Referências para os botões de aumento e diminuição de fonte
    const accessibilityBtn = document.getElementById('accessibility-btn');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const textSizeControls = document.getElementById('text-size-controls');
    
    // Armazenar o tamanho de fonte original de cada item de lista
    const originalFontSizes = [];
    
    // Captura o tamanho de fonte original de cada <li> e armazena na lista originalFontSizes
    allListItems.forEach(item => {
        const fontSize = window.getComputedStyle(item).fontSize;
        originalFontSizes.push({
            element: item,
            originalSize: parseFloat(fontSize)
        });
    });

    // Função para aumentar o tamanho da fonte de cada item de lista
    function increaseFontSize() {
        let canIncrease = false; // Variável para verificar se o aumento é possível

        // Itera sobre cada item da lista e aumenta seu tamanho de fonte
        originalFontSizes.forEach(item => {
            let currentSize = window.getComputedStyle(item.element).fontSize;
            currentSize = parseFloat(currentSize); // Converte o tamanho da fonte para número

            // Aumenta o tamanho da fonte em 10%, mas não ultrapassa 120% do original
            if (currentSize < item.originalSize * 1.2) {
                item.element.style.fontSize = (currentSize * 1.2) + "px"; // Aumenta o tamanho da fonte
                canIncrease = true;
            }
        });

        // Se o aumento não for mais possível, desabilita o botão e altera a cor de fundo
        if (!canIncrease) {
            increaseFontBtn.disabled = true;
            increaseFontBtn.style.backgroundColor = 'gray'; // Indica que o botão está desabilitado
            alert("O aumento foi desabilitado porque já atingiu o tamanho máximo.");
        }

        // Se o aumento foi possível, e o botão de diminuir estava desabilitado, habilite-o
        if (canIncrease && decreaseFontBtn.disabled) {
            decreaseFontBtn.disabled = false;
            decreaseFontBtn.style.backgroundColor = ''; // Restaura a cor de fundo do botão de diminuir
        }
    }

    // Função para diminuir o tamanho da fonte de cada item de lista
    function decreaseFontSize() {
        let canDecrease = false; // Variável para verificar se a diminuição é possível

        // Itera sobre cada item da lista e diminui seu tamanho de fonte
        originalFontSizes.forEach(item => {
            let currentSize = window.getComputedStyle(item.element).fontSize;
            currentSize = parseFloat(currentSize); // Converte o tamanho da fonte para número

            // Diminui o tamanho da fonte em 10%, mas não cai abaixo de 90% do original
            if (currentSize > item.originalSize * 0.9) {
                item.element.style.fontSize = (currentSize * 0.9) + "px"; // Diminui o tamanho da fonte
                canDecrease = true;
            }
        });

        // Se a diminuição não for mais possível, desabilita o botão e altera a cor de fundo
        if (!canDecrease) {
            decreaseFontBtn.disabled = true;
            decreaseFontBtn.style.backgroundColor = 'gray'; // Indica que o botão está desabilitado
            alert("O botão de diminuir foi desabilitado, porque atingiu o limite mínimo.");
        }

        // Se a diminuição foi possível, e o botão de aumentar estava desabilitado, habilite-o
        if (canDecrease && increaseFontBtn.disabled) {
            increaseFontBtn.disabled = false;
            increaseFontBtn.style.backgroundColor = ''; // Restaura a cor de fundo do botão de aumentar
        }
    }

    // Alterna a visibilidade dos controles de tamanho de texto ao clicar no botão de acessibilidade
    accessibilityBtn.addEventListener('click', function () {
        // Alterna a classe 'active' para mostrar/ocultar os controles de tamanho de texto
        accessibilityBtn.classList.toggle('active');
    });

    // Adicionar eventos para os links de aumentar e diminuir a fonte
    increaseFontBtn.addEventListener('click', increaseFontSize);
    decreaseFontBtn.addEventListener('click', decreaseFontSize);
});
