const connection = require('../connection/connection');
const bcrypt = require('bcryptjs');

const getUserData = (request, response) => {
    connection.query('select * from User', (error, data) => {
        if (error) throw error;
        response.send(JSON.stringify(data))
    })
}

const addUser = (request, response) => {
    const newObj = request.body
    connection.query(`select * from User where User_Name = "${newObj.User_Name}"`, (error, data) => {
        if (error) throw error;
        if (!data.length) {
            console.log(newObj);
            const password = bcrypt.hashSync(newObj.Password, 10);
            connection.query(`insert into User values ("${newObj.User_Id}", "${newObj.User_Name}", "${password}")`, (error, data) => {
                if (error) throw error;
                response.send(JSON.stringify(data));
            })
        } else {
            response.send("User name already exists").status(404);
        }
    })
}

module.exports = {
    getUserData,
    addUser
}