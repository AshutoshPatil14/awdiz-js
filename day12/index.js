// this

// function student(s1, s2) {
//     console.log(s1,s2)
// }

// student("Ted", "Barney")

// let student = {
//     name:"Marshell",
//     surname:"Erikson",
//     sayHello: function(){
//         console.log("Hello", this.name, this.surname)
//     }
// }

// console.log(student.sayHello())

// Constructor function

// function admission(name, surname, number, email) {
// //   console.log(name, surname, number, email);
//   this.name = name;
//   this.surname = surname;
//   this.number = number;
//   this.email = email;
// }

// const user1 = new admission("Virat", "Kohli", 12345, "virat@gmail.com");
// console.log(user1.name);
// console.log(user1.surname);
// console.log(user1.number);
// console.log(user1.email);

// const user2 = new admission("Rohit", "sHARMA", 87623, "rohit@gmail.com");
// console.log(user2.name);
// console.log(user2.surname);
// console.log(user2.number);
// console.log(user2.email);

// function brand(name, category, noOfProducts){
//     this.name = name
//     this.category = category
//     this.noOfProducts = noOfProducts
//     console.log(this)
// }

// let brand1 = new brand("Samsung", "Electronics", 3)
// let brand2 = new brand("Apple", "Electronics", 8)

// console.log(brand1)
// console.log(brand1.name)
// console.log(brand1.category)
// console.log(brand1.noOfProducts)

// console.log(brand2)
// console.log(brand2.name)
// console.log(brand2.category)
// console.log(brand2.noOfProducts)

// Class & Constructor

// class smartPhone{
//     constructor(company, os, ram, rom){
//         this.company = company
//         this.os = os
//         this.ram = ram
//         this.rom= rom
//     }
// }

// let mobile1 = new smartPhone("Samsung", "Android", "12GB", "512GB")
// let mobile2 = new smartPhone("Apple", "iOS", "12GB", "512GB")

// console.log(mobile1.os)
// console.log(mobile2.os)

// console.log(mobile1.company)
// console.log(mobile2.company)

// console.log(mobile1)
// console.log(mobile2)

// try{

// }catch(error){

// }finally{

// }

// async await
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("Products");
      reject("Products");
    }, 5000);
  });
}

// function data() {
//   try {
//     const result = fetchData(); //waiting for 5 sec
//     console.log(result, "result");
//   } catch (error) {
//     console.log(error, "error");
//   }
// }

async function data() {
  try {
    const result = await fetchData(); //waiting for 5 sec
    console.log(result, "result");
  } catch (error) {
    console.log(error, "error");
  }
}
data();
