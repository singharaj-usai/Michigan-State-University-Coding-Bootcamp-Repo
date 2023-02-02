// Helper function to output text in the terminal in a cyan color
const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);

// Top 10 Spotify songs in an array
const songs = [
  '1: MONTERO (Call Me By Your Name)',
  '2: Peaches (feat. Daniel Caesar & Giveon)',
  '3: Kiss Me More (feat. SZA)',
  '4: Astronaut In The Ocean',
  '5: Save Your Tears (with Ariana Grande) (Remix)',
  '6. RAPSTAR',
  '7. Levitating (feat. DaBaby)',
  '8. Leave The Door Open',
  '9. Botella Tras Botella',
  '10. Fiel',
];
console.log('Spotify top 10:\n');

// TODO: Write a for .. of loop that iterates over each song and uses the `outputCyanText()` method to output each song in a cyan color to the terminal.
for (const song of songs) {
  outputCyanText(song);
}