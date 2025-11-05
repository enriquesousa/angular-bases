import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component({
  imports: [ NgClass ],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css',
})
export class DragonballPageComponent {

    characters =signal<Character[]>([
        { id: 1, name: 'Goku', power: 9001 },
        { id: 1, name: 'Vegueta', power: 8000 },
        { id: 1, name: 'Piccolo', power: 3000 },
        { id: 1, name: 'Trunks', power: 9000 },
    ]);

    powerClasess = computed( () => {
        return {
            'text-danger': true,
        }
    });

}
