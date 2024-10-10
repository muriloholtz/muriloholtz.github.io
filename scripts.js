// Seleciona os elementos necessários
var modal = document.getElementById('aboutMeModal');
var aboutMeBtn = document.getElementById('aboutMeBtn');
var closeModal = document.getElementById('closeModal');
var closePopup = document.getElementById('closePopup');
var modalContent = document.querySelector('.modal-content');

aboutMeBtn.addEventListener('click', function() {
    modal.classList.add('show');
});
closeModal.addEventListener('click', function() {
    modal.classList.remove('show');
});

closePopup.addEventListener('click', function() {
    modal.classList.remove('show');
});

modal.addEventListener('click', function() {
    modal.classList.remove('show'); 
});
