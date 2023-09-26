  export interface ICommand {
    command: string;
    description: string;
    action:  Function;
}

export const commands: ICommand[] = [
    {
      command: 'help',
      description: 'Display this list of commands',
      action: () => {
        return 'commands => ';
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