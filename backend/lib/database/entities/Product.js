import { Sequelize } from "sequelize";
import connectionDB from "../db.js";

import User from "./User.js";
import UserCartItem from "./UserCartItem.js";

const Product = connectionDB.define('products', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

Product.sync({ force: true})
    .then(
        () => {
            console.log(`products table successfully created!`)
        }
    )
    .catch(() => {
        console.log(`products table not created.`)
});


export default Product;