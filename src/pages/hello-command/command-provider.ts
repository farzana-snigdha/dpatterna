import { Command, Light, RedLight, RemoteControl, TurnOffLightCommand, TurnOnLightCommand } from "patterns/command/command-lightChange"


let light
let redLight
let turnOnLight: Command
let turnOffLight: Command
let remoteControl: RemoteControl

light=new Light()
redLight=new RedLight()
turnOnLight=new TurnOnLightCommand()
turnOffLight=new TurnOffLightCommand()
remoteControl=new RemoteControl()

export function setLightCommands(command:string){
    if(command=='on'){
        remoteControl.execute(turnOnLight)
        console.log('provider ',command)
    }
    else if(command=='off'){
        remoteControl.execute(turnOffLight)
    }
}


