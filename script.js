// Retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img')
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const apenasImagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(apenasImagens);

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const tituloSecundario = document.querySelectorAll('.animais-descricao h2');
console.log(tituloSecundario[0]);

// Selecione o último p do site

const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);

