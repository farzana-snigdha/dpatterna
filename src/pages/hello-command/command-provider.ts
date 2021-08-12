import { Command, DecreaseRedLightCommand, IncreaseRedLightCommand, Light, RedLight, RemoteControl, TurnOffLightCommand, TurnOnLightCommand, TurnOnRedLightCommand } from "patterns/command/command-lightChange"


let light
let redLight: Command
let turnOnLight: Command
let turnOffLight: Command
let remoteControl: RemoteControl
let increaseRedLight: Command
let decreaseRedLight: Command

light=new Light()
redLight=new TurnOnRedLightCommand()
turnOnLight=new TurnOnLightCommand()
turnOffLight=new TurnOffLightCommand()
remoteControl=new RemoteControl()
increaseRedLight=new IncreaseRedLightCommand()
decreaseRedLight=new DecreaseRedLightCommand()

var isRedLightOn=false

export function setLightCommands(command:string){
    if(command=='on'){
        remoteControl.execute(turnOnLight)
       
    }
    else if(command=='off'){
        remoteControl.execute(turnOffLight)
    }
    else if(command=='red0'){
        isRedLightOn=true
        remoteControl.execute(redLight)
        console.log('provider ',command)
    }
    else if(command=='increase'){
        remoteControl.execute(increaseRedLight)
    }
    else if(command=='decrease'){
        remoteControl.execute(decreaseRedLight)
    }

}


