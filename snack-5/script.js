const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// const newArrey = nums.map( (number, i ) => {

//     console.log(nums[i])
//     if (nums[i] % 2 === 0){
//     return nums[i]
//     }
    
// }

// )

// console.log(newArrey)

const newArray = nums.filter((element) =>  (element % 2 === 0) )

console.log(newArray)

