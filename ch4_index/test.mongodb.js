db.stores.getIndexes()

//인덱스
//특징 : 대소문자 엄격히 구분, 순서 중요, 너무 많은 인덱스 사용시 역효과

db.employees.getIndexes() 
// Single-key 인덱스
db.employees.createIndex({empno:1})
db.employees.createIndex({empno:1, deptno:-1}) 
// # Compound 인덱스
// 인덱스 설정 조회
db.employees.getIndexes()

db.employees.createIndex({deptno:1})
db.employees.find({deptno:10}).pretty()

// empno : 검색 explain 확인.
// 인덱스 설정
db.employees.find({deptno:10}).explain()

// 인덱스 설정 아직 안함.
db.employees.find({deptno:10}).sort({empno:-1})
db.employees.find({deptno:10}).sort({empno:-1}).explain()
db.employees.dropIndex({empno:1})


//샘플 코드
db.employees.insertMany([
    {
      empno: 101,
      deptno: 10,
      ename: "John Smith",
      salary: 60000,
      hiredate: "2022-03-15",
      comm: 2000,
    },
    {
      empno: 102,
      deptno: 20,
      ename: "Alice Johnson",
      salary: 55000,
      hiredate: "2021-11-28",
      comm: 1500,
    },
    {
      empno: 103,
      deptno: 10,
      ename: "Emily Davis",
      salary: 62000,
      hiredate: "2023-01-10",
      comm: 1800,
    },
    {
      empno: 104,
      deptno: 30,
      ename: "Michael Wilson",
      salary: 58000,
      hiredate: "2022-07-02",
      comm: 1600,
    },
    {
      empno: 105,
      deptno: 20,
      ename: "Sophia Martinez",
      salary: 59000,
      hiredate: "2021-09-05",
      comm: 1700,
    },
    {
      empno: 106,
      deptno: 30,
      ename: "James Brown",
      salary: 57000,
      hiredate: "2022-05-20",
      comm: 1400,
    },
    {
      empno: 107,
      deptno: 40,
      ename: "Olivia Lee",
      salary: 61000,
      hiredate: "2023-02-18",
      comm: 1900,
    },
    {
      empno: 108,
      deptno: 40,
      ename: "William Anderson",
      salary: 54000,
      hiredate: "2021-12-04",
      comm: 1300,
    },
    {
      empno: 109,
      deptno: 20,
      ename: "Liam Clark",
      salary: 63000,
      hiredate: "2022-08-12",
      comm: 2200,
    },
    {
      empno: 110,
      deptno: 10,
      ename: "Ava Rodriguez",
      salary: 57000,
      hiredate: "2023-04-07",
      comm: 1600,
    },
  ]);



