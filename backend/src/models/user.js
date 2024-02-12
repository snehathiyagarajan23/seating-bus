// const db = require('../config/db.config');
// const { createNewUser: createNewUserQuery, findUserByEmail: findUserByEmailQuery } = require('../database/queries');
// const { logger } = require('../utils/logger');

// class User {
//     constructor(firstname, lastname, email, password) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.email = email;
//         this.password = password;
//     }

//     static create(newUser, cb) {
//         db.query(createNewUserQuery, 
//             [
//                 newUser.firstname, 
//                 newUser.lastname, 
//                 newUser.email, 
//                 newUser.password
//             ], (err, res) => {
//                 if (err) {
//                     logger.error(err.message);
//                     cb(err, null);
//                     return;
//                 }
//                 cb(null, {
//                     id: res.insertId,
//                     firstname: newUser.firstname,
//                     lastname: newUser.lastname,
//                     email: newUser.email
//                 });
//         });
//     }

//     static findByEmail(email, cb) {
//         db.query(findUserByEmailQuery, email, (err, res) => {
//             if (err) {
//                 logger.error(err.message);
//                 cb(err, null);
//                 return;
//             }
//             if (res.length) {
//                 cb(null, res[0]);
//                 return;
//             }
//             cb({ kind: "not_found" }, null);
//         })
//     }
// }

// module.exports = User;

const Sequelize = require('sequelize')
const sequelize = require ('../utils/database')
const User = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    password:Sequelize.STRING,
    created_one:Sequelize.STRING
});

module.exports = User