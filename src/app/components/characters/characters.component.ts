import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { Character } from '../../models/Character';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  @Input() character!: Character;
}
