import connectionDB from '../lib/database/db.js';
import UserModel from './User.js';
import ProductModel from './Product.js';
import UserCartItemModel from '../database/entities/UserCartItem.js';

const User = UserModel(connectionDB);
const Product = ProductModel(connectionDB);
const UserCartItem = UserCartItemModel(connectionDB);

User.belongsToMany(Product, {
  through: UserCartItem,
  as: 'cartItems',
  foreignKey: 'userId'
});

Product.belongsToMany(User, {
  through: UserCartItem,
  foreignKey: 'productId'
});

export default {
  connectionDB,
  User,
  Product,
  UserCartItem
};
