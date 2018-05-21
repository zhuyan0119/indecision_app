// // const square = function (x) {
// //     return x * x;
// // };
// function square(x){
//     return x * x;
// }

// // // const squareArrow = (x) => {
// // //     return x * x;
// // // };

// // const squareArrow = (x) => x * x;

// // console.log(squareArrow(9));

// const fullname = 'Jane Chu';

// const getFirstname = (name) =>{
//     return name.split(' ')[0];
// };

// const getLastname = (name) => name.split(' ')[1];
// // console.log(getFirstname(fullname));
// // console.log(getLastname(fullname));
// // console.log((name)=> name.split(' ')[0]);

// const add = function(a, b) {
//     return a + b;
// }

// const user ={
//     name:'Yan',
//     cities:['lansing','Santa clara', 'Chicago'],
//     printPlaceLived: function(){
//         this.name;
//         this.cities;
//         this.cities.forEach(function(city){
//         })
//     }
// };

const multiplier = {
    nums: [2,3,4],
    multiplyBy: 2,
    multiply: function(){
        const that = this;
        this.nums.map(function (number) {
            return number * that.multiplyBy;
        })
    }
};
console.log(multiplier.multiply());