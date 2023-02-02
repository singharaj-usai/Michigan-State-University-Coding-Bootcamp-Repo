// Instead of using inheritance with classes, we will be taking a composition based approach.
// When designing a composition based approach we focus on what objects do instead of what they are.
// Below we define the actions we want our factory functions to use.
const phoneCall = (state) => ({
  call: () => console.log(`${state.name}'s Phone: ${state.ringTone}`),
});

const makeNoise = (state) => ({
  noise: () => console.log(state.noise),
});

const drying = (state) => ({
  dry: () =>
    console.log(`Finish drying in ${state.timer} minutes. ${state.noise}`),
});

// Create the `Phone` factory function which accepts two arguments `name` and `ringTone`.
const Phone = (name, ringTone) => {
  // Store the arguments in an object so that we can pass them to the correct functions we return.
  const state = {
    name,
    ringTone,
  };

  // Return the action functions we want our `Phone` to use.
  return { ...phoneCall(state) };
};

// No need to add the `new` keyword because we are using a factory function.
const nokia = Phone('Nokia', 'ring');

// Test if our action functions work correctly with our newly created phone.
nokia.call();

const Dryer = (noise, timer) => {
  const state = {
    noise,
    timer,
  };

  return { ...makeNoise(state), ...drying(state) };
};

const decker = Dryer('brshhuhsh', 35);
decker.noise();
decker.dry();

// Now that we have taken a composition based approach we can now create a `Washer` function which utilizes making a phone call.
const Washer = (name, noise, ringTone) => {
  const state = {
    name,
    noise,
    ringTone,
  };

  // We now have access to the `phoneCall` method because it is no longer tightly coupled to the `Device` class.
  // If we were to use inheritance we would have to rewrite the `call` function inside the `Appliance` class tree.
  // Good coding practice is DRY. Don't Repeat Yourself.
  return { ...makeNoise(state), ...phoneCall(state) };
};

const wPool = Washer('Whirlpool', 'brshhh', 'ring ring from the washer');
wPool.call();
wPool.noise();
