const choices = ["A", "K", "Q", "J"];
let scoreA = 0;
let scoreB = 0;

const pickCard = () => {
  const PlayerA = choices[Math.floor(Math.random() * choices.length)];
  const PlayerB = choices[Math.floor(Math.random() * choices.length)];

  if (PlayerA === "A" && PlayerB !== "A") {
    scoreA++; // Increase Player A's score
    document.getElementById("result").innerHTML = "🎉 Player A Wins!";
  } else if (PlayerB === "A" && PlayerA !== "A") {
    scoreB++; // Increase Player B's score
    document.getElementById("result").innerHTML = "🎉 Player B Wins!";
  } else if (PlayerA === "A" && PlayerB === "A") {
    document.getElementById("result").innerHTML = "🤝 It's a Tie!";
  } else {
    document.getElementById("result").innerHTML = "😢 No Winner";
  }

  // Update scores after result
  document.getElementById(
    "playerA"
  ).textContent = `Player A:-  ${PlayerA} (Score: ${scoreA})`;
  document.getElementById(
    "playerB"
  ).textContent = `Player B:-  ${PlayerB} (Score: ${scoreB})`;
};
