
/* SWIPER*/ 
new Swiper('.swiper',{/*Se instancia y se pone los parametros*/ 
    autoplay:{/*objeto autoplay Darle inicio y el tiempo*/ 
        delay:2000
    },

    direction: "horizontal",/*Direccion de movimiento*/
    loop: true, /*Seguira como bucle no girara de manera fea*/

    navigation: {/*Objeto para activar las clases de navegacion*/
        nextEl:".swiper-button-next",/*Activa la clase next del boton */
        prevEl:".swiper-button-prev"/*Activa la clase prev del boton */
    },

    pagination:{
        el:".swiper-pagination",/*Activa el elemento paginacion se muestra */
        type: "bullets",/*Tipo de paginacion puntos */
        clickable:true/*Activa la paginacion el clic */
    }
})