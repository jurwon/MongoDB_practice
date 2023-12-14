//ch2 14p document생성 실습

//자유게시판에 아무 글 3개 작성
use("board");
freeboard_result= db.board.insertOne({name:'자유게시판'});
freeboard_id = freeboard_result.insertedId

db.article.insertMany([
    {board_id : freeboard_id, title:'hello',content:'Hi,hello', author:'Karoid'},
    {board_id : freeboard_id, title:'hello',content:'Hi,hello', author:'Karoid'},
    {board_id : freeboard_id, title:'hello',content:'Hi,hello', author:'Karoid'},
    {board_id : freeboard_id, title:'hello',content:'Hi,hello', author:'Karoid',comments:[
        {author:'Kim',content:'hello Hong'}]},
])

//비밀게시판에 작성자가 noname값을 가지는 글 하나 작성
secretboard_result = db.board.insertOne({name:'비밀게시판'})
secretboard_id = freeboard_result.insertedId

db.article.insertOne({board_id:secretboard_id,title:'my Secret title',content:'Hi,hello',author:'noname'})

use("board");
db.article.find()

