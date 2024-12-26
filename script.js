// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove('ativo');
});
menu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imagem = document.querySelectorAll('img');
imagem.forEach((item) => {
  const possuiAlt = item.hasAttribute('alt');
  console.log(item, possuiAlt);
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('.menu a[href^="http"]');
linkExterno.setAttribute('href', 'https://www.novo-link.com');
console.log(linkExterno);

