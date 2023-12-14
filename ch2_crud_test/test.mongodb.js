use("testBlod");
db.users.insertOne({x:1})

use("testBlod");
db.users2.insertOne({ name:"SangYong Lee", email:"lsy@gmail.com"})

use("testBlod");
db.users2.find()

use("testBlod");
db.users2.insertOne({ name: {first:"SangYong2", last:"Lee"}, email:"lsy2@gmail.com"})

use("testBlod");
db.users2.updateOne({name:"SangYong Lee"}, {$set:{ age:30}})

use("testBlod");
db.users2.findOne({name:"SangYong Lee"})


use("testBlod");
db.users2.updateOne({"name.first":"SangYong2"}, {$set:{ "name.last":"Lee2"}})

use("testBlod");
db.users2.findOne({_id: ObjectId("6578362fec921a9b31f298b9")})

use("testBlod");
db.users2.updateOne({_id: ObjectId("657836183f0c2d27980db5e7")},{$inc:{age:1}})


use("testBlod");
db.users2.deleteOne({_id: ObjectId("657836183f0c2d27980db5e7")})