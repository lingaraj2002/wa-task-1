/*---------------------------- filter the students from the class 6th 'A' Section ----------------------------*/
 myArr = [
     {
      studenName: "jack",
      studenClass: 6,
      studenSection: "a"
     },
     {
      studenName: "tom",
      studenClass: 6,
      studenSection: "a"
     },
 {
      studenName: "ricky",
      studenClass: 6,
      studenSection: "b"
     },{
      studenName: "john",
      studenClass: 6,
      studenSection: "b"
     },{
      studenName: "jerry",
      studenClass: 6,
      studenSection: "a"
     },{
      studenName: "henry",
      studenClass: 6,
      studenSection: "b"
     },{
      studenName: "stephen",
      studenClass: 6,
      studenSection: "a"
     }
 ]

 let array2 =[];
 myArr.forEach(function(a){
    if(a.studenSection == "a"){
     array2.push(a.studenName);
    }
 });
 console.log(array2);

   /*------------------- replace the value 6 in following object with 606 --------------------------*/ 

 let obj = {
     foo: { a: "hello", b: "world" },
     bar: ["example", "mem", null, { xyz: 6 }, 88],
     qux: [4, 8, 12]
   };
   let a = obj.bar;
    a[3].xyz = "606";
    console.log(a);

                            /*---------------------- sort of an arrao of objects -----------------------------------*/
    
         library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    },
    {
        title: 'Adventures of Tom Sawyer',
        author: 'Mark Twain',
        libraryID: 1345
    },
    {
        title: 'Adventures of Sherlock Holmes',
        author: 'Sir Arthur Conan Doyle',
        libraryID: 2245
    }
 ];

 let array = [];
 library.forEach(function(element){
   let a =  element.libraryID;
   array.push(a);
 });
 let b = array.sort();
 console.log(b);