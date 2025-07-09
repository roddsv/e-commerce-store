import Sequelize from 'sequelize';
import connectionDB from '../db.js';

import Product from './Product.js';
import UserCartItem from './UserCartItem.js';

const User = connectionDB.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isLowercaseOnly(value) {
                if (!/^[a-z]+$/.test(value)) {
                    throw new Error('O campo nome deve conter apenas letras minúsculas.');
                }
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {

                args: [6, 20],
                msg: 'The password must have at least 6 caracters'
            }
        }

    },
    role: {
        type: Sequelize.STRING,
        enum: ["customer", "admin"],
        default: "customer"
    }
},
    {
        //createdAt, updatedAt
        timestamps: true
    });

User.sync({ force: true})
    .then(
        () => {
            console.log(`users table successfully created!`)
        }
    )
    .catch(() => {
        console.log(`users table not created.`)
});


export default User;