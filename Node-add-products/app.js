const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");
const app = express();
const sequelize = require("./util/database");
const Product=require('./Models/product');
const User =require('./Models/user');

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req,res,next)=>{
  User.findByPk(1)
  .then(user=>{
    req.user=user;
    next();
  })
  .catch(err=>console.log(err));
})

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'});
User.hasMany(Product);

sequelize.sync()
.then(result=>{
  return User.findByPk(1);
})
.then(user=>{
  if(!user){
   return User.create({name:'Max',email:'test@test.com'});
  }

  return user;
})
.then(user=>{
  console.log(user);
  app.listen(3000);
})
.catch(err=>{
  console.log(err)
});


