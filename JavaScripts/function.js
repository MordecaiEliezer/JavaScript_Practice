function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  // Example usage:
  let add = addNumbers(5, 7);
  console.log(add); // Output: 12

//----------------------------------
console.log("\n");

  function animalSound(isDog, isCat) {
    if (isDog) {
      return "bark";
    } else if (isCat) {
      return "meow";
    } else {
      return "Unknown animal";
    }
  }
  
  // Example usage:
  let dogResult = animalSound(true, false);
  let catResult = animalSound(false, true);
  
  console.log(dogResult); // Output: bark
  console.log(catResult); // Output: meow
  
//----------------------------------------
console.log("\n");

function vehicle(isMotor, isCar){
    if(isMotor){
        console.log("It has two wheels");
    }else if(isCar){
        console.log("It has four wheels");
    }else{
        console.log("Not a Motor or a Car")
    }
}
vehicle(true, false); // Output: It has two wheels
vehicle(false, true); // Output: It has four wheels
//------------------------------------------------
console.log("\n");

let foodA = "orange";
let foodB = "Fried Chicken";
let foodC = "Salad";


function food(selected){
    if(selected == foodA){
        console.log("You have selected: "+foodA);
    }else if(selected == foodB){
        console.log("You have selected: "+foodB);
    }else if(selected == foodC){
        console.log("You have selected: "+foodC);
    }
    else{
        console.log("Not on the list");
    }
}

food(foodA) //Output: You have selected: orage
food(foodB) //Output: You have selected: Fried Chicken
food(foodC)//Output: You have selected: Salad