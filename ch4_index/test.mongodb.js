db.stores.getIndexes()

//인덱스
//특징 : 대소문자 엄격히 구분, 순서 중요, 너무 많은 인덱스 사용시 역효과

db.employees.getIndexes() // Single-key 인덱스
db.employees.createIndex({empno:1})
db.employees.createIndex({empno:1, deptno:-1}) // Compound 인덱스
db.employees.getIndexes()
db.employees.createIndex({deptno:1})
db.employees.find({deptno:10}).pretty()
db.employees.find({deptno:10}).explain()
db.employees.find({deptno:10}).sort({empno:-1})
db.employees.find({deptno:10}).sort({empno:-1}).explain()
db.employees.dropIndex({empno:1})




