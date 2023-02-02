import React from "react";
// We import our Greeting component from the components folder so that we can eventually return it
import Greeting from "./components/Greeting";

// App is our main component at the top level of our App that references other components
function App() {
  return <Greeting />;
}

// Here we export the App component so that it can be made available in `index.js`
export default App;
