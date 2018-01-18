// The second argument/parameter is expected to be a function


function findWaldo (arr,found){
  arr.forEach(function(item,i) {
    if(arr[i] === "Waldo"){
    found(i);
    }
  });
}

function actionWhenFound(found) {
  console.log( "Found Waldo at index " + found );
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);





// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// function actionWhenFound(found) {
//   console.log( "Found Waldo at index " + found );
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
