import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  cardName: string = '';
  selectedBlock: string = '';

  @Output() searchEvent = new EventEmitter<{ name: string, block: string }>();

  search() {
    this.searchEvent.emit({ name: this.cardName, block: this.selectedBlock });
  }
}
