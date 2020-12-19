const { EventEmitter } = require("events");
const { SAVE } = require("./events-name");

const emisor = new EventEmitter();

emisor.on(SAVE, () => {
  console.log("On save activated 1");
});

emisor.on(SAVE, () => {
  console.log("On save activated 2");
});

emisor.emit("save");
