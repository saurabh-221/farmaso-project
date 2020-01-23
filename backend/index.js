const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { getUserData, addUser } = require('./modules/user');
const { checkUser, deleteSession } = require('./modules/login');
const { getAllProducts, getProductById, addProduct, deleteProductById } = require('./modules/product');
const { getCartItemsByUserId, addCartItemByUserId, deleteCartItemByUserId } = require('./modules/cart')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.listen(8080);

app.get('/', (request, response) => {
    response.send("hello world");
})

app.get('/user', getUserData)
    .post('/user', addUser);

app.post('/login', checkUser);
app.post('/logout', deleteSession);

app.get('/product', getAllProducts)
    .get('/product/:p_Id', getProductById)
    .post('/product', addProduct)
    .delete('/product/:p_Id', deleteProductById);

app.get('/cart-item/:id', getCartItemsByUserId)
    .post('/cart-item', addCartItemByUserId)
    .delete('/cart-item', deleteCartItemByUserId);