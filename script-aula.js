const animaisSection = document.getElementById('animais');
console.log(animaisSection)

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);

// Retorna a primeira li que encontrar
const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

// Retorna a primeira UL que encontrar
const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

// Retorna o link da img
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

// Retorna o segundo elemento
const imagemAnimais = document.querySelectorAll('.animais img');
console.log(imagemAnimais [1]);


const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index){
  console.log(item)
})

const arrayGrid = Array.from(gridSectionHTML)