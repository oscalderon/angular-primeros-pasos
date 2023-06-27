import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/ICharacter';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  public character: Character;

  constructor() {
    this.character = {
      id: '',
      name: '',
      power: 0,
    };
  }

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter = (): void => {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);

    this.character = {
      id: '',
      name: '',
      power: 0,
    };
  };
}
