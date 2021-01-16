// /* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

// /* End Given Code, don't edit above here...*/
const greetingHead = document.querySelector('#greeting')

function greet(time) {
  let timeToArray = time.split(":")
  let parsedTime = Number(timeToArray[0])
  if (parsedTime < 12) {
    return "Good Morning"
  } else if (parsedTime >= 12 && parsedTime <= 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}


function displayMessage(message) {
  //const newHead = document.createElement("h1")
  const greetingHead = document.querySelector('#greeting')
  greetingHead.innerText = message
  // greetingHead.append(newHead)
}





































// function displayMessage(str) {
//   document.getElementById("greeting").innerText = str;
// }



// /* Write your implementation of greet() */
// function greet(time) {
//   let fullNum = time.split(":").join("");
//   let parsed = parseInt(fullNum, 10);

//   if (parsed < 1200) {
//     return "Good Morning";
//   } else if (parsed > 1200 && parsed < 1500) {
//     return "Good Afternoon";
//   } else {
//     return "Good Evening";
//   }
// }
// /* Write your implementation of displayMessage() */
