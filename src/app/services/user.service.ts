import { Injectable } from '@angular/core';
import characters from '../../assets/config/characters.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public characters = characters.characters;

  constructor() { }
}
