import { Component, NgModule, HostListener } from '@angular/core'

@Component({
  selector: 'app-eye',
  templateUrl: './eye.component.html',
  styleUrls: ['./eye.component.css']
})
export class EyeComponent {

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e:MouseEvent) {
    
    const pupils =  document.querySelectorAll('.eye .pupil');

    pupils.forEach(pupil => {
      
      var rect =  pupil.getBoundingClientRect();
      var offset = 65;
      
      var x:string = (e.pageX - rect.left) / offset + 'px';
      var y:string = (e.pageY - rect.top)  / offset + 'px';
      const query:string = `transform:translate3d(${x}, ${y}, 0)`;
      
      pupil.setAttribute('style', query);
    })
  }

  @HostListener('document:mouseleave', ['$event'])
  onMouseLeave(e:MouseEvent) {}

  @HostListener('document:onmouseover', ['$event'])
  onMouseOver(e:MouseEvent) {
    console.log('onMouseOver');
  }
}