import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarvelAuthService } from './marvel-auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CharactersComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'marvel-app';
  http = inject(HttpClient);
  characters: Array<any> = [];
  marvelAuthService: MarvelAuthService = new MarvelAuthService();

  ngOnInit() {
    const authParams = this.marvelAuthService.getAuthParams();
    this.http
      .get('https://gateway.marvel.com/v1/public/characters', {
        params: authParams,
      })
      .subscribe((res: any) => {
        this.characters = res.data.results;
      });
  }
}
