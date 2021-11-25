const elementos =[
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'}
]

const container = document.querySelector('.container');
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++){ // criar as tags
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto; // utilizar no lugar do 'innerHTML' pois só tem texto.
    div.appendChild(tagCriada);
}

container.appendChild(div);