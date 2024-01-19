import { Component, inject } from '@angular/core';
import { CharactersComponent } from '../components/characters/characters.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarvelAuthService } from '../marvel-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharactersComponent, HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Home';
  http = inject(HttpClient);
  marvelAuthService: MarvelAuthService = new MarvelAuthService();
  characters: Array<any> = [];
  attributionText!: string;

  ngOnInit() {
    const authParams = this.marvelAuthService.getAuthParams();
    this.http
      .get('https://gateway.marvel.com/v1/public/characters', {
        params: authParams,
      })
      .subscribe((res: any) => {
        this.characters = res.data.results;
        this.attributionText = res.attributionText;
      });
  }
}
