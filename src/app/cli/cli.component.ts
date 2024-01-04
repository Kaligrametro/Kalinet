import { Component, HostListener, Input} from '@angular/core';
import { getCommand } from './utils/Command.type'

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.css']
})
export class CliComponent {

  @Input()
  input!:string;

  history:string[] = [];

  prompt:string = '>';

  submit() 
  {
    
    if (this.input === '') return;

    // push inputted command to history
    this.history.push(`${this.prompt} ${this.input}`);

    // get command
    const command = getCommand(this.input);

    // if doesnt exist
    if (!command) 
    {
      this.history.push(`Command '${this.input}' not found, to see avilable commands type 'help'`);
      this.input = '';
      const lastMsg = document.querySelector('.content:last-child');
      console.log(lastMsg);
      return;
    }
    this.input = '';


    // execute command
    command.action(this.history);

    //scroll to bottom
    const content = document.querySelector('.content');
    const lastMsg = document.querySelector('.content:last-child');
    console.log(lastMsg);
  }

  // event listener
  @HostListener('document:keypress', ['$event'])
  onKeyPress(event:KeyboardEvent)
  {
    switch(event.key)
    {
      case 'Enter':
        this.submit();
        break;
    }
  }

  scrollToElement(element:HTMLElement) 
  {
    element.scrollIntoView(
      {
        behavior: "smooth",
        block: "end", 
        inline: "nearest"
      }
    );
  }

}

