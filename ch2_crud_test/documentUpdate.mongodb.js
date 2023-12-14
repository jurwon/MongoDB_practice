use("testDB");
db.character.insertMany([
    {name : 'x',inventory:['pen','cloth','pen']},
    {name : 'y',inventory:['book','cloth'],position:{x:1,y:5}},
    {name : 'z',inventory:['wood','pen'],position:{x:0,y:9}},
])


use("testDB");
db.character.find()

//조건이 없기 때문에 한개만 update됨
//update는 이제 안씀 ->updateOne, UpdateMany사용
use("testDB");
db.character.update({},
    {$set:{"inventory.$[penElm]":"pencil"}},
    {arrayFilters:[{penElm:'pen'}]}
)

use("testDB");
db.character.update({inventory:'pen'},
{
    $set:{"inventory.$":"pencil"}
})

