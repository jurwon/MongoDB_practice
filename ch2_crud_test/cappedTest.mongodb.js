use("testDB");
//특정 크기의 컬렉션을 생성, 용량이 초과되면
//오래된 데이터부터 삭제함.
db.createCollection("cappedC",{capped:true, size:1000});
db.cappedC.insertOne({x:1});
db.cappedC.find();

//stats조회
use("testDB")
db.cappedC.stats()

use("testDB")
for(i=0;i<1000;i++){
    db.cappedC.insertOne({x:i});
}

use("testDB")
//앞에 숫자들은 다 삭제됨(오래된 데이터)
db.cappedC.find();

//서버 상태 조회
use("testDB");
//db.getCollectionInfos();
//db.serverStatus();
db.stats()

