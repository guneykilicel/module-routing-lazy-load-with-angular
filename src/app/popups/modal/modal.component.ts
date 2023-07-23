import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor (private el:ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
}
