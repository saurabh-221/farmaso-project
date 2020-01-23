const connection = require('../connection/connection');

const getAllProducts = (request, response) => {
    connection.query('select * from Product', (error, result) => {
        if (error) throw error;
        response.send(JSON.stringify(result));
    })
}

const getProductById = (request, response) => {
    const id = request.params.p_Id;
    connection.query(`select Item_ID, User_Name, Item_Name, PerHourCharge, StartDate, HoursUsed, MoneyEarned, Available from Product join User on Product.User_Id = User.User_Id where Product.Item_Id = "${id}"`, (error, result) => {
        if (error) throw error;
        response.send(JSON.stringify(result));
    })
}

const addProduct = (request, response) => {
    const newProduct = request.body;
    connection.query(`insert into Product value ("${newProduct.Item_Id}", "${newProduct.User_Id}", "${newProduct.Item_Name}", ${newProduct.PerHourCharge}, "${newProduct.StartDate}", ${newProduct.HoursUsed}, ${newProduct.MoneyEarned}, "${newProduct.Available}")`, (error, result) => {
        if (error) throw error;
        response.send(JSON.stringify(result));
    });
}

const deleteProductById = (request, response) => {
    const newProductId = request.body.Item_Id;
    connection.query(`delete from Product where Item_Id = ${newProductId}`, (error, result) => {
        if (error) throw error;
        response.send(JSON.stringify(result));
    });
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProductById
}