import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component({
    //   imports: [ NgClass ],
    templateUrl: './dragonball-page.html',
    styleUrl: './dragonball-page.css',
})
export class DragonballPageComponent {

    name = signal('Gohan');
    power = signal(1000);

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9001 },
        { id: 2, name: 'Vegueta', power: 8000 },
        { id: 3, name: 'Piccolo', power: 3000 },
        { id: 4, name: 'Trunks', power: 9000 },
        { id: 5, name: 'Yamcha', power: 500 },
    ]);

    powerClasess = computed(() => {
        return {
            'text-danger': true,
        }
    });

    addCharacter = () => {
        console.log(this.name(), this.power());
        // this.characters.set([
        //     ...this.characters(),
        //     { id: this.characters().length + 1, name: this.name(), power: this.power() }
        // ]);
    }

}
