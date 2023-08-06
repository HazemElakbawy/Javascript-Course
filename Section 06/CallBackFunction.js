const callBackFunction = () => {
  console.log("I am a callback function");
};

const higherOrderFunction = (callBack) => {
  // callBack is a function
  console.log("I am a higher order function");
  callBack();
};

higherOrderFunction(callBackFunction);
