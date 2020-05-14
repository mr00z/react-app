export function convertSecondsToMinutes(seconds) {
  if (!seconds) return;
  const minutes = Math.fround(seconds / 60000);

  return minutes.toFixed(2).replace('.', ':');
}
