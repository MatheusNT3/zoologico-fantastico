// Classlist

const menu = document.querySelector('.menu');

menu.classList.add('ativo');
// menu.classList.toogle('azul');

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}


// Atributes

// Retorna uma array-like com os atributos do elemento.

const animais = document.querySelector('.animais');

animais.attributes; //  retorna todos os atributos

animais.attributes[0]; // retorna o primeiro atributo

console.log(animais.attributes['data-texto']); // retorna o valor do atributo

// getAttribute e setAttribute

// Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img');
console.log(img);
const srcImg = img.getAttribute('alt'); // retorna o valor do alt
img.setAttribute('alt', 'é um tigre'); // muda o valor do alt
console.log(srcImg);

const possuiAlt = img.hasAttribute('alt'); // retorna true ou false
console.log(possuiAlt);

img.removeAttribute('alt'); // remove o atributo
console.log(img);

