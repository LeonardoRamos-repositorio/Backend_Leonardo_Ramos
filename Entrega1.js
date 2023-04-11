class ProductManager {

    constructor() {
        this.productos = [];
    }

    getProducts = () => {
        return this.productos;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        if (this.productos.length === 0) {
            producto.id = 1;
        } else {
            producto.id = this.productos[this.productos.length - 1].id + 1;
        }

        this.productos.push(producto);


    }

    getProductById = (array) => {
        if (array.length === 0) return `el arreglo esta vacio`;

        let types = [];
        let uniqueTypes = [];

        array.forEach((obj) => {
            types = [...types, ...Object.keys(obj)];
        })

        console.log(array);

        types.forEach((type) => {
            if (!uniqueTypes.includes(type)) uniqueTypes.push(type);
        });

        console.log(total);

        return uniqueTypes;
    }
}


const manejadorProductos = new ProductManager();
manejadorProductos.addProduct('Manzana', 'fruta', '39', 'local', 123, 100)
manejadorProductos.addProduct('Atun', 'pescado', '40', 'local', 143, 200)
manejadorProductos.addProduct('Atun', 'pescado', '40', 'local', 143, 200)



console.log(manejadorProductos.getProducts());