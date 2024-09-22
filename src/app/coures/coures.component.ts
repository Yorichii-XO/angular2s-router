import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { ICourse } from '../../app.componenet.models';

@Component({
  selector: 'app-coures',
  standalone: true,
  imports: [],
  templateUrl: './coures.component.html',
  styleUrl: './coures.component.css'
})
export class CouresComponent {
  //  @Input() title:string='' ;//@Input()=is decorator lihoma if you want to pass data to parent component that is (app)
  @Input() course!: ICourse; // Ensure course is defined
 
  // hadi data lighadi tkhroj mn chile l parent kansta3mlo emitter event 
  // with type ICourse ya3ni chnahiya data lighadi ista9blha had l EventEmitter
  //alert it should import from core angular
  @Output() viewCourseevent=new EventEmitter<ICourse>;
  viewCourse():void{
    this.viewCourseevent.emit(this.course);
  }
}
