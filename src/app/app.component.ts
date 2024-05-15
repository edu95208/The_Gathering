import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './homePage/header/header.component';
import { MainComponent } from './homePage/main/main.component';
import { MagicApiService } from './services/magic-api.service';
import { CartasComponent } from './homePage/cartas/cartas.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, CartasComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'THE_GATHERING';

  cards: any[] = [];
  boosterCards: any[] = [];

  constructor(private magicApiService: MagicApiService) {}

  searchSets(filters: { name: string, block: string }) {
    this.magicApiService.searchSets(filters.name, filters.block).subscribe((response: any) => {
      this.cards = response.sets;
    });
  }

  openBooster(setId: string) {
    this.magicApiService.getBoosterCards(setId).subscribe((response: any) => {
      this.boosterCards = response.cards.filter((card: any) => card.types.includes('creature'));
    });
  }
}
