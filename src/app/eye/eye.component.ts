import { Component, NgModule, HostListener, Input } from '@angular/core'

@Component({
  selector: 'app-eye',
  templateUrl: './eye.component.html',
  styleUrls: ['./eye.component.css']
})
export class EyeComponent {

  eye_width:number = 85;
  eye_height:number = 70;
  pupil_width:number = 40;
  pupil_height:number = 40;

  @Input()
  eyeSize!:any;
  @Input()
  pupilSize!:any;


  constructor() { 
    console.log("First iteration",this.eyeSize);
    if (!this.eyeSize) this.eyeSize = { width:85, height:70 };
    if (!this.pupilSize) this.pupilSize = { width:40, height:40 };
    console.log("Second iteration",this.eyeSize)
    
    this.eye_width = this.eyeSize.width;
    this.eye_height = this.eyeSize.height;
    this.pupil_width = this.pupilSize.width;
    this.pupil_height = this.pupilSize.height;
  }

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(mouse:MouseEvent) {

    document.querySelectorAll('.eye')
    .forEach(eye => eye.setAttribute('style', `width:${this.eye_width}px; height:${this.eye_height}px;`));
    
    document.querySelectorAll('.pupil')
    .forEach(pupil => 
    {
      const rect =  pupil.getBoundingClientRect();
      const offset = 65;
      
      const x:string = (mouse.pageX - rect.left) / offset + 'px';
      const y:string = (mouse.pageY - rect.top)  / offset + 'px';
      
      pupil.setAttribute('style', 
      ` transform:translate3d(${x}, ${y}, 0); 
        width:${this.pupil_width}px; 
        height:${this.pupil_height}px;
      `);

    });
  }

  @HostListener('document:mouseleave', ['$event'])
  onMouseLeave(e:MouseEvent) {
    console.log('onMouseLeave');
    // close eye
  }

  @HostListener('document:onmouseover', ['$event'])
  onMouseOver(e:MouseEvent) {
    console.log('onMouseOver');
  }
}