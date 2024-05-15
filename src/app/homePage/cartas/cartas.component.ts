import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartas',
  standalone: true,
  imports: [],
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.scss',
})
export class CartasComponent {
  @Input() card: any;
}
