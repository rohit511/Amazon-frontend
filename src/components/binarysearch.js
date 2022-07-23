//linear search code
// function linearSearch(arr, item) {
    
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] === item) { // Found it!
//         return i;
//       }
//     }
    
    
//     return null;
//   }
//  console.log(linearSearch([1,2,3,4],3))

//binary serach code
// function binarySearch(sortedArray, key){
//     let start = 0;
//     let end = sortedArray.length - 1;

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);

//         if (sortedArray[middle] === key) {
            
//             return middle;
//         } else if (sortedArray[middle] < key) {
            
//             start = middle + 1;
//         } else {
            
//             end = middle - 1;
//         }
//     }
	
//     return -1;
// }
// console.log(binarySearch([1,3,4,5,7,8,9,48],42))

// const handleLogin = (req, user) => {
//     return new Promise((resolve, reject) => {
//       req.login(user, (err) => {
//         if (err) {
//           return reject({
//             error: true,
//             message: err,
//           })
//         }
//         return resolve({
//           success: true,
//         })
//       })
//     })
//   }
//   console.log(handleLogin)
//   //...
// //   const resultLogin = await handleLogin(req, user)
  
//code 3 question 
// function sample(a,b){
//     let c=a*b;
//     return new Promise((resolve,reject)=>{//pending stage
//         if(c<5){
//             reject(5)//rejecting stage
//         }else{
//             resolve(c)//resolve stage
//         }
//     })
// }

// (async()=>{
//     let ans=await sample(2,4)
//     try{
//         console.log("answer",ans);
 
//     } catch (err){
//         console.log("error",err);
 
//     }
//  })()



// code four of mobile number 
function countString(arr, number) {
    
    let count = 0;

    // looping through the items
    for (let i = 0; i < arr.length; i++) {

        // check if the character is at that position
        if (arr[i] == number) {
            count += 1;
        }
    }
    return count;
}

console.log(countString([1,2,3,5,6,7,8,9,9,],9))


//passing parameters and calling the function
