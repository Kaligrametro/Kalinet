import { Component, Input } from '@angular/core';
import { getCommand } from './utils/Command.type'

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.css']
})
export class CliComponent {
  history:string[] = [];

  @Input()
  input:string = '';

  submit() 
  {
    
    console.log('Command: ', this.input);

    // push inputted command to history
    this.history.push(`> ${this.input}`);

    // get command
    const command = getCommand(this.input);
    
    // if doesnt exist
    if (!command) 
    {
      this.history.push(`Command '${this.input}' not found, to see avilable commands type 'help'`);
      return;
    }

    // execute command
    command.action(this.history);
  }

}

