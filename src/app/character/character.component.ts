import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MarvelAuthService } from '../marvel-auth.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/Character';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [HttpClientModule, NgOptimizedImage, CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent {
  http = inject(HttpClient);
  marvelAuthService: MarvelAuthService = new MarvelAuthService();
  id!: string;
  character!: Character;
  attributionText!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    const authParams = this.marvelAuthService.getAuthParams();
    this.http
      .get(`https://gateway.marvel.com/v1/public/characters/${this.id}`, {
        params: authParams,
      })
      .subscribe((res: any) => {
        this.character = res.data.results[0];
        this.attributionText = res.attributionText;
      });
  }
}
