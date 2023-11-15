        
var indice = 0;

function showImage(sprites) {
     const canvas = document.getElementById("canvas");

    //Eliminar la imagen anterior si hay alguna
    const imagenesAnteriores = canvas.getElementsByTagName('img');
    for (let i = 0; i < imagenesAnteriores.length; i++) {
        canvas.removeChild(imagenesAnteriores[i]);
    }

    const img = new Image();
    img.src = sprites[indice];
    img.classList.add("pokeimagen")
    indice++;

    if (indice >= 4) indice = 0; 

    canvas.appendChild(img);
}

        
//AP VUE
var app = new Vue({
    el: '#app',
    data: {
        name: '',
    },
    methods: {
        findPokemon: function () {
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
            .then(res => res.json())
            .then(data => {
                            // console.log(data);
                            // let arr = data.sprites;
                            // console.log(arr);
                sprites = [
                    data.sprites.back_default, 
                    data.sprites.back_shiny, 
                    data.sprites.front_default, 
                    data.sprites.front_shiny
                ];
                setInterval(() => {
                    showImage(sprites)
                }, 300);
            })
            .catch(e => {
                console.log(e, error);
            });
        }
    }
});