// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category 
Product.belongsTo(Category, {
  foreignKey: 'id'
})

// Categories have many Products (but product can only belong to one category)
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: ('voted_posts')
  foreignKey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: Product_Tag, 
  //as: 
  foreignKey: 'product_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
