// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
// // The return statement is fixed by wrapping "Hello" in an h1 heading tag and adding the introduction of the creator.
function HelloDiv() {
  return "Hello";
}
// Fixed v
//function HelloDiv() {
//  return <h1>Hello, My name is Creator</h1>;
//}

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
// The export statement is fixed by using export default HelloDiv, default keyword is used to indicate that HelloDiv is the default export from the module, so that it can be imported without any braces {} when importing it.
export HelloDiv;
// Fixed v
// export default HelloDiv;