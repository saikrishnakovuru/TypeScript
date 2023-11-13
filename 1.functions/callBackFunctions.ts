// function delayMessage(
//   message: string,
//   delay: number,
//   callback: (msg: string) => string
// ) {
//   console.log(message);
//   setTimeout(() => {
//     console.log(callback(message));
//   }, delay);
// }

// function finalCallback(message: string) {
//   return "Callback completed for message: " + message;
// }

// const message: string = "Hello, World!";
// delayMessage(message, 400, finalCallback);

//================================================================================================

const callingCallBackFunction = function (
  callBack: (message: string) => string
) {
  console.log(callBack("ra rei"));
  console.log("I'm in higher order function");
};

const callBackFunction = function (message: string): string {
  return "I'm in callBack function"+ message;
};

// Both the below statements are same
callingCallBackFunction(callBackFunction);
callingCallBackFunction((message)=>"I'm in callBack function"+ message);
