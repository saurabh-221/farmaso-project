class Item {
    static getAllProducts() {
        return "select * from Product";
    }

    static getSingleProduct(id) {
        return `select * from Product where Item_Id =${id}`;
    }

    static addProduct() {
        return `insert into Product set ?`
    }
}
module.exports=Item