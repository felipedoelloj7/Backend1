const express = require('express');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const app = express();
const PORT = 8080;

app.use(express.json());

// Simulación de una base de datos de productos
let products = [];

// Leer datos iniciales de productos desde el archivo productos.json
const productsFile = './productos.json';
if (fs.existsSync(productsFile)) {
    const productsData = fs.readFileSync(productsFile);
    products = JSON.parse(productsData);
}

// Simulación de una base de datos de carritos
let carts = [];

// Leer datos iniciales de carritos desde el archivo carrito.json
const cartsFile = './carrito.json';
if (fs.existsSync(cartsFile)) {
    const cartsData = fs.readFileSync(cartsFile);
    carts = JSON.parse(cartsData);
}

// Funciones para guardar productos y carritos en archivos JSON
const saveProducts = () => {
    const productsData = JSON.stringify(products);
    fs.writeFileSync(productsFile, productsData);
};

const saveCarts = () => {
    const cartsData = JSON.stringify(carts);
    fs.writeFileSync(cartsFile, cartsData);
};

// Ruta para la ruta raíz '/'
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la página principal!');
});

// Ruta para mostrar todos los productos
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Rutas para el manejo de carritos
const cartsRouter = express.Router();
cartsRouter.get('/:cid', (req, res) => {
    // Lógica para obtener productos del carrito de manera filtrada
    // ...

    res.json(cartProducts);
});

cartsRouter.post('/:cid/product/:pid', (req, res) => {
    // Lógica para agregar productos al carrito
    // ...

    res.status(200).json({ message: 'Producto agregado al carrito correctamente' });
});

app.use('/api/carts', cartsRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
