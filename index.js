let listaProductos = document.querySelector("#listaProductos");
 
    function obtieneProductos() {
        //Promise o Promesa
        fetch('https://freetestapi.com/api/v1/books?limit=5')
            .then(res=>res.json())
            .then( productosObtenidos => {
                console.log("Productos obtenidos", productosObtenidos);
 
                productosObtenidos.forEach((producto,indice) => {
                    console.log("Producto" + producto);
 
                    listaProductos.innerHTML += `
                        <div class="col-12 col-md-3">
                            <div class="card">
                                <img src="${ producto.cover_image }" class="imagenProducto card-img-top py-2" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">"${ producto.title }"</h5>
                                    <p class="text-info"> ${ producto.author }</p>
                                    <p class="text-danger"> ${ producto.publication_year}</p>
                                    <p class="card-text">${ producto.description.slice(0,100) }</p>
                                    <a href="#" class="btn btn-success">Comprar</a>
                                </div>
                            </div>
                        </div>
                    `;
                });
            });
    };
 
    obtieneProductos();
 
 