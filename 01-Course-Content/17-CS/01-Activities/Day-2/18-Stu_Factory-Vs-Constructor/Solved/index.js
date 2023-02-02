// Pass the state into our action function.
const getInformation = (state) => ({
  // Log the title an description
  information: () => console.log(state.title, state.description),
});

// Create a function.
const lesson = function () {
  // Store the locally scoped variables.
  const state = {
    title: 'Module 17 - Computer Science',
    description: 'CS for JS',
  };

  // Return an inner function named 'getInformation' passing the state as an argument.
  return { ...getInformation(state) };
};

const csForJS = lesson();
csForJS.information();
