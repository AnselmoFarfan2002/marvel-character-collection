import { Component, Input } from '@angular/core';
import { Character } from '../../models/Character';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'card-characters',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  @Input() character!: Character;
}
