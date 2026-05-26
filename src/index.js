const productos = [

    {
        nombre: "Teclado Mecánico RGB",
        imagen: "https://www.laptopcentercr.com/cdn/shop/files/1201251_3_large.png?v=1686152064"
    },

    {
        nombre: "Mouse Gamer RGB",
        imagen: "https://c1.neweggimages.com/productimage/nb640/B7VES2404090FA92J97.jpg"
    },

    {
        nombre: "Monitor RGB",
        imagen: "https://acf.geeknetic.es/imgw/imagenes/noticias/15102-viewsonic-2.jpg?f=webp"
    },

    {
        nombre: "Laptop Gamer RGB",
        imagen: "https://img.magnific.com/premium-photo/gaming-laptop-with-rgb-lighting-advanced-cooling-system_1314467-153477.jpg"
    },

    {
        nombre: "Headset RGB",
        imagen: "https://m.media-amazon.com/images/I/71jzyBgtePL.jpg"
    }

];

const lista = document.getElementById("listaProductos");

productos.forEach(producto => {

    lista.innerHTML += `

        <li class="card">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <h2>${producto.nombre}</h2>

        </li>

    `;

});