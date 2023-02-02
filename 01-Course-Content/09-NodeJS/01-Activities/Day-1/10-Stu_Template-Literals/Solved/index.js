// music should be an object with title, artist, and album properties
const music = {
  title: "Yeke Yeke",
  artist: "Mory Kanté",
  album: "Akwaba Beach"
};

// Inside of the backticks we use ${} to get access to the data inside of our object.
const songSnippet = `${music.title} by ${music.artist} from the album ${music.album} is currently playing`;

console.log(songSnippet)

