import { Sequelize } from "sequelize";
import connectionDB from "../db.js";

const UserCartItem = connectionDB.define('userCartItems', {
    quantity: {
        type: Sequelize.INTEGER,
        default: 1,
        allowNull: false
    }  
});

UserCartItem.sync()
    .then(
        () => {
            console.log(`userCartItems table successfully created!`)
        }
    )
    .catch(() => {
        console.log(`userCartItems table not created.`)
});

export default UserCartItem;