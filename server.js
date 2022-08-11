const mongoose = require("mongoose");
const express = require('express');
require("dotenv").config({path:"./.env"})
const PersonDB = require('./model/model')
const connectDB = require('./config/connectDB');
const { findOne } = require("./model/model");


// const person = new PersonDB ({name:'mustapha',age:50,favoriteFoods:["lablabi","m7amas","pizza"]})
// person.save((err)=>{
//     if(err) return console.log(err)
// })

// Add new people
// const person = new PersonDB ({name:'sami',age:50,favoriteFoods:'Lablabi'})
// person.save((err)=>{
//     if(err) return console.log(err)
// })
// already saved !!

// Find people
// const Find = async () => {
//     try {
//         const data = await PersonDB.find({})
//         console.log(data)
//     } catch (error) {
//         console.log(error)
        
//     }
// }
// Find()

// Find one person
// const FindOne = async()=> {
//     const food = "pizza"
//     try {
//         const data = await PersonDB.findOne({favoriteFoods:food})
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// FindOne()

// Find one person by ID

// const FindId = async() => {
//   try {
//     const data = await PersonDB.findById(("62ee7677a6e516f9732f8eb6"))
//     console.log(data)
//   } catch (error) {
//     console.log(error)
    
//   }
// }
// FindId()


// find edit and save

// var findEditThenSave = function(personId, done) {
//     var foodToAdd = 'hamburger';
//     Person.findById(personId, function(err, data) {
//       data.favoriteFoods.push(foodToAdd);
//       data.save();
//       if (err) {
//         return done(err);
//       }
//       else {
//         done(null, data);
//       }
//     });
//   };
//   findEditThenSave()

//find one and update


// const query = {name:"kaftaji"};

// const Update = async()=>{
//     const data = await PersonDB.findOneAndUpdate(query,{$set:{favoriteFoods:'hamburger'}},(err,data)=>{
//         try {
        
//             console.log(data)
//         } catch (error) {
//             console.log(error)
//         }
//     }).clone()
// }
// Update()


// find by id and remove

// const deleteID = {_id:"62ee7639a47b69018c6c49fb"}
// const Delete = async()=>{
//     const DelPlat = await PersonDB.findOneAndDelete(deleteID,(data,err)=>{
//         try {
//             console.log("deleting data from your collection",data)
//         } catch (error) {
//             console.log(error)
//         }
//     }).clone()
// }

// Delete();

var queryChain = function(done) {
    var foodToSearch = "9laya";
    var jsonObject = {favoriteFoods : foodToSearch};
    person.find(jsonObject).sort({name: 1}).limit(2).select({age: 0}).exec((err, data) => {
      (err) ? done(err) : done(null, data); 
    })
  };

connectDB();

const app = express();

const PORT = process.env.PORT || 4000 

app.listen(PORT,(err)=>{
    err ? console.log(err)
    :console.log(`server is running on port ${PORT}`)
})