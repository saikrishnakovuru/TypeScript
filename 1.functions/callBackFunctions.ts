function delayMessage(
  message: string,
  delay: number,
  callback: (msg: string) => void
) {
  setTimeout(() => {
    console.log(message);
    callback(message);
  }, delay);
}
function finalCallback(message: string) {
  console.log("Callback completed for message: " + message);
}
const message: string = "Hello, World!";
delayMessage(message, 400, finalCallback);
