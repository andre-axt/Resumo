document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('dark-mode-toggle');
    const body = document.body;
  
    button.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
    });
});
prompt("O modo escuro acabou ficando um pouco inútil.")
alert("Obrigado pela compreensão.")