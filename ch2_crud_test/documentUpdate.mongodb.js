use("testDB");
db.character.insertMany([
    {name : 'x',inventory:['pen','cloth','pen']},
    {name : 'y',inventory:['book','cloth'],position:{x:1,y:5}},
    {name : 'z',inventory:['wood','pen','pen'],position:{x:0,y:9}},
])


use("testDB");
db.character.find()

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

