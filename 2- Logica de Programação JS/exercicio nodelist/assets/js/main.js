/**
 * Se comporta de maneira bem similar ao array
 */
const paragrafo = document.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const corDoBackground = estilosBody.backgroundColor;

for (let p of paragrafo){
    p.style.backgroundColor = corDoBackground;
    p.style.color = 'white';
}