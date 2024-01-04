export interface ICommand {
  command: string;
  description: string;
  action: Function;
}

export const commands: ICommand[] = [
  {
    command: 'help',
    description: 'Display this list of commands',
    action: (history:string[]) => {
      commands.forEach(command => history.push(`${command.command} - ${command.description}`));
    }
  },
  {
    command: 'clear',
    description: 'Clear the terminal screen',
    action: (history:string[]) => {
      history.splice(0, history.length);
    }
  },
  {
    command: 'owo',
    description: 'jeje',
    action: (history:string[]) => {
      history.push('uwu');
    }
  }
];

export function getCommand(input:string):ICommand | null
{
  var out:ICommand | null = null;

  commands.forEach(command => {
    if (command.command == input) 
      out = command;
  })

  return out;
}