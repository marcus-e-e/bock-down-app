function calcWinner(players, targetDate, stillOpen) {

  if (!targetDate) targetDate = Date.now();
  else if (targetDate instanceof Date) targetDate = targetDate.getTime();
  else if (!(targetDate instanceof Date)) targetDate = new Date(targetDate).getTime();

console.log("Ist date " + targetDate);
  var nearest = Infinity;
  var winner = "a";
  const tableDate = [];
  var playerDate;

  players.forEach(function (player, index) {
    if (player.bet instanceof Date) playerDate = player.bet.getTime()
    else if (!(player.bet instanceof Date)) playerDate = new Date(player.bet).getTime()
    var distance = Math.abs(playerDate - targetDate)
    if (distance < nearest) {
      nearest = distance
      winner = player.name
    }
  })
  console.log("Ist it? " +winner);
}

export default calcWinner;
