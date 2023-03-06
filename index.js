//(Q1) What are the differences between mutating array methods and non-mutation array methods in JavaScript
    //List 5 array methods that fall under each of them.
// ANS
// MUTATING ARRAY METHODS are those array methods that changes or modufies the original array, the changes made thus becomes permanent.
// EXAMPLES of mutating array methods includes
// (i) push()
// (ii) pop()
// (iii) splice()
// (iv) shift()
// (v) unshift()

// NON MUTATING ARRAY METHODS on the other hand do not change the original array but instead performs its operation by creating a shallow copy of the original original array and returning new arrays that contain the result of the opertion
// EXAMPLES of non mutating array methods includes
//(i) map()
// (ii) filter()
// (iii) slice()
// (iv)concat()

// (Q2)    Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
const languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"]; 

// answer
// (i) Add ‘Kotlin’ to the end of the array
const addKlotin = languages.push("Klotin");
console.log(languages);

// (ii) Add ‘Java’ after ‘Ruby’
const javaAfterRuby = languages.splice(3, 0, "Java");
console.log(languages);

// (iii) Remove the first item in the array
const removeFirstItem = languages.shift("C#");
console.log(languages);

// (iv) Add ’Scala’ and ‘Swift’ to the beginning of the array
const addScalaSwift = languages.unshift('Scala', 'Swift');
console.log(languages);

// (v) Replace ‘PHP’ with ‘Go’ and ‘Rust’
const replacePHP = languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);

//(Q3) What will be the value of fruit after calling the function changeFruit?

let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
console.log(changeFruit(fruit))
// answer
//fruit = ['apple', 'mango', 'orange']


//(Q4) Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
//e.g., max([4, 5, 10, -2]) // maximum value is 10

// answer
const list = [4, 12, 10, -2]
function maxValue () {
    let largestNumber = Math.max(...list);
    return largestNumber;

}
console.log(maxValue());

//(Q5) Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
// e.g.,
// valTimesIndex([1,2,3]) // [0,2,6]
//        valTimesIndex([5,10,15]) // [0,10,30]

// answer
const list2 = [5,10,15]
let list3 = []
function valTimesIndex (){
    for (let index = 0; index < list2.length; index++) {
        const element = list2[index] * index;
        list3.push(element);
        
    }
    return list3
}

console.log(valTimesIndex());
