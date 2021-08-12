import {
  Command,
  DecreaseRedLightCommand,
  IncreaseRedLightCommand,
  Light,
  RedLight,
  RemoteControl,
  TurnOffLightCommand,
  TurnOnLightCommand,
  TurnOnRedLightCommand,
} from "patterns/command/command-lightChange";

let light;
let turnOnRedLight: Command;
let turnOnLight: Command;
let turnOffLight: Command;
let remoteControl: RemoteControl;
let increaseRedLight: Command;
let decreaseRedLight: Command;
let redLight;

light = new Light();
redLight = new RedLight();
turnOnRedLight = new TurnOnRedLightCommand(redLight);
turnOnLight = new TurnOnLightCommand(light);
turnOffLight = new TurnOffLightCommand(light);
remoteControl = new RemoteControl();
increaseRedLight = new IncreaseRedLightCommand(redLight);
decreaseRedLight = new DecreaseRedLightCommand(redLight);

var isRedLightOn = false;

export function setLightCommands(command: string) {
  if (command == "on") {
    remoteControl.execute(turnOnLight);
  } else if (command == "off") {
    remoteControl.execute(turnOffLight);
  } else if (command == "redLight") {
    isRedLightOn = true;
    remoteControl.execute(turnOnRedLight);
    console.log("provider ", command);
  } else if (command == "increase" && isRedLightOn) {
    remoteControl.execute(increaseRedLight);
  } else if (command == "decrease" && isRedLightOn) {
    remoteControl.execute(decreaseRedLight);
  }

  return remoteControl.executeCommand();
}
