const FientshipStatus = document.querySelector("h3");
const addFriendButton = document.querySelector("#add-friend-button");
const removeFriendButton = document.querySelector("#remove-friend-button");


addFriendButton.addEventListener("click", () => {
  FientshipStatus.innerHTML = "We are frined now";
  FientshipStatus.style.color = "green";
});
removeFriendButton.addEventListener("click", () => {
  FientshipStatus.innerHTML = "She is Stranger";
  FientshipStatus.style.color = "red";
});




flag = 0;
// if you want a single button in the card use this 

// addFriendButton.addEventListener("click", () => {
//   console.log(flag);
//   if (flag == 0) {
//     FientshipStatus.innerHTML = "We are frined now";
//     FientshipStatus.style.color = "green";
//     flag = 1;

//     addFriendButton.innerHTML = "Remove";
//     addFriendButton.style.backgroundColor = "red";
//   } else {
//     FientshipStatus.innerHTML = "She is Stranger";
//     FientshipStatus.style.color = "red";
//     flag = 0;

//     addFriendButton.innerHTML = "Send Request";
//     addFriendButton.style.backgroundColor = "rgb(123, 232, 123)";
//   }
// });
