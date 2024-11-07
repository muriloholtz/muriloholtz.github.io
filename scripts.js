// Seleciona os elementos necessários
var modal = document.getElementById('aboutMeModal');
var aboutMeBtn = document.getElementById('aboutMeBtn');
var closeModal = document.getElementById('closeModal');
var closePopup = document.getElementById('closePopup');

// Prevenir o comportamento padrão do link e exibir o modal
aboutMeBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o recarregamento da página
    modal.classList.add('show'); // Exibe o modal
    document.body.classList.remove('fade-out'); // Garante que o fade-out do body não interfira
});

// Fechar o modal quando clicar no botão de fechar ou fora do modal
closeModal.addEventListener('click', function() {
    modal.classList.remove('show');
});

closePopup.addEventListener('click', function() {
    modal.classList.remove('show');
});

// Fechar o modal ao clicar fora do conteúdo
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a'); // Seleciona todos os links

    // Adiciona um evento de clique a todos os links
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Verifica se o link tem target="_blank"
            if (link.target === '_blank') {
                return; // Permite que o link abra em uma nova aba sem a transição
            }

            event.preventDefault(); // Previne o redirecionamento imediato

            // Aplica a transição de fade out
            document.body.classList.add('fade-out');

            // Redireciona após a transição (500ms para coincidir com o CSS)
            setTimeout(function() {
                window.location.href = link.href;
            }, 500);
        });
    });
});
