//use("test") //default라서 안써도됨

//find(<query>,<projection>)
//query : 조건부, projection : 보고 싶은 열

//교차로내.accident_count 이것만 보여주고 나머지 열 안보여줘도됨. -> 단 object_id는 제외
db.by_road_type.find({county:"강릉시"},{"교차로내.accident_count":1});

//만약 _id도 제외하고 싶다면
db.by_road_type.find({county:"강릉시"},{"교차로내.accident_count":1,_id:0});

//더 넓은 범위 보고싶다면?
db.by_road_type.find({county:"강릉시"});