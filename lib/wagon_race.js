// TODO: write your code here
const positionupdater = (player) => {
  const currentposition = document.querySelector(`#${player}-race .active`);
  const newposition = currentposition.nextElementSibling;
  currentposition.classList.remove('active');
  newposition.classList.add('active');
  if (newposition.classList.contains('finish-line')) {
    alert(`${player} wins the race!`);
    location.reload();
  }
}

document.addEventListener("keyup", (event) => {
  const currentPlayer = document.querySelector(".active");
  console.log(event);

  if (event.key === "q") {
    positionupdater('player1');
  } else if (event.key === "p") {
    positionupdater('player2');
  }
})
