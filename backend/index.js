const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const stripe = require("stripe")("sk_test_Z7AAKhDN4cuOCvclY69fSSWv007zM765P9");
const uuid = require("uuid/v4");

const { getUserData, addUser } = require('./modules/user');
const { checkUser, deleteSession } = require('./modules/login');
const { getAllProducts, getProductById, addProduct, deleteProductById } = require('./modules/product');
const { getCartItemsByUserId, addCartItemByUserId, deleteCartItemByUserId, updateHours } = require('./modules/cart');
const { addOrder, cancelUserOrder, getUserOrder, checkAvilability } = require('./modules/order');
const { generateBill } = require('./modules/bill');

app.use(cors());
app.options('*',cors());
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
    .put('/cart-item/:id', updateHours)
    .delete('/cart-item/:id', deleteCartItemByUserId);

app.get('/check/:id', checkAvilability);

app.get('/order/:id', getUserOrder)
    .post('/order', addOrder)
    .put('/order/:id', cancelUserOrder);

app.get('/bill/:id', generateBill);


// app.get("/", (req, res) => {
//     res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
//   });
  
//   app.post("/checkout", async (req, res) => {
//     console.log("Request:", req.body);
  
//     let error;
//     let status;
//     try {
//       const { product, token } = req.body;
  
//       const customer = await stripe.customers.create({
//         email: token.email,
//         source: token.id
//       });
  
//       const idempotency_key = uuid();
//       const charge = await stripe.charges.create(
//         {
//           amount: product.price,
//           currency: "inr",
//           customer: customer.id,
//           receipt_email: token.email,
//           description: `Purchased the ${product.name}`,
//           shipping: {
//             name: token.card.name,
//             address: {
//               line1: token.card.address_line1,
//               line2: token.card.address_line2,
//               city: token.card.address_city,
//               country: token.card.address_country,
//               postal_code: token.card.address_zip
//             }
//           }
//         },
//         {
//           idempotency_key
//         }
//       );
//       console.log("Charge:", { charge });
//       status = "success";
//     } catch (error) {
//       console.error("Error:", error);
//       status = "failure";
//     }
  
//     res.json({ error, status });
//   });