import bcrypt from 'bcryptjs';

import Sequelize from 'sequelize';
import connectionDB from '../db.js';
const User = connectionDB.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isLowercaseOnly(value) {
                if (!/^[a-z]+$/.test(value)) {
                    throw new Error(`The name field must have only lowercase letters and can't have blank spaces.`);
                }
            },
            notEmpty: {
                msg: 'The name field is required'
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: 'The email field is required'
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
            },
            notEmpty: {
                msg: 'The field is required'
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

User.beforeSave(async (user, options) => {
    if (!user.changed('password')) return;

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

User.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

User.sync()
    .then(
        () => {
            console.log(`users table successfully created!`)
        }
    )
    .catch(() => {
        console.log(`users table not created.`)
});

export default User;