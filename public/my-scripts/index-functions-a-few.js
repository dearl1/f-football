export function sumPointsOfPlayers(playersDataPerManager) {
  let curPoints = 0;
  for (const playerData of playersDataPerManager) {
    curPoints += playerData.stats.total_points; // Accumulate points
  }
  return curPoints;
}
