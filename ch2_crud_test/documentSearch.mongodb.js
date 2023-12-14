use("testDB")
db.containerBox.insertMany([
    {name:"bear",weight:60,category:"animal"},
    {name:"bear",weight:30,category:"animal"},
    {name:"bear",weight:10,category:"animal"},
    {name:"cat",weight:20,category:"animal"},
    {name:"cat",weight:2,category:"animal"},
    {name:"phone",weight:1,category:"electronic"},
])

use("testDB")
db.containerBox.find()

//1. Wieght가 10이상
use("testDB")
db.containerBox.find({weight : {$gte:10}})

//2. category가 animal
use("testDB")
db.containerBox.find({category : "animal"})

//3. category가 animal이고 name bear인 것 검색
use("testDB")
db.containerBox.find({$and : [{category : "animal"},{name:"bear"}]})

//4. weight가 20~30인 것 검색
use("testDB")
db.containerBox.find({$and : [{weight : {$gte:20}},{weight:{$lte:30}}]})
