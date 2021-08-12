export class Light {
  public on(): string {
    return "on";
  }
  public off(): string {
    return "off";
  }
}

export class RedLight {
  increase: number = 0;
  on(): string {
    this.increase = 0;
    return "red0";
  }

  increaseRedLight(): string {
    this.increase++;
    return `red${this.increase}`;
  }
  decreaseRedLight(): string {
    this.increase--;
    if (this.increase < 0) {
      return "off";
    } else {
      return `red${this.increase}`;
    }
  }
}

//commands
export interface Command {
  setCommand(): string;
}

export class TurnOnLightCommand implements Command {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  setCommand(): string {
    return this.light.on();
  }
}

export class TurnOffLightCommand implements Command {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  setCommand(): string {
    return this.light.off();
  }
}

export class TurnOnRedLightCommand implements Command {
  light: RedLight;
  constructor(light: RedLight) {
    this.light = light;
  }
  setCommand(): string {
    return this.light.on();
  }
}

export class IncreaseRedLightCommand implements Command {
  light: RedLight;
  constructor(light: RedLight) {
    this.light = light;
  }
  setCommand(): string {
    return this.light.increaseRedLight();
  }
}

export class DecreaseRedLightCommand implements Command {
  light: RedLight;
  constructor(light: RedLight) {
    this.light = light;
  }
  setCommand(): string {
    return this.light.decreaseRedLight();
  }
}

export class RemoteControl {
  command: Command;

  execute(command: Command) {
    this.command = command;
  }

  public executeCommand() {
    return this.command.setCommand();
  }
}
