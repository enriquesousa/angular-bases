import { Component, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component({
    templateUrl: './dragonball-super-page.html',
    selector: 'dragonball-super',
    imports: [CharacterList],
})
export class DragonballSuperPageComponent {

    name = signal('');
    power = signal(0);

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9001 },
        { id: 2, name: 'Vegueta', power: 8000 },
    ]);

    addCharacter = () => {
        console.log(this.name(), this.power());
        if( !this.name() || !this.power() || this.power() <= 0) return;

        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power(),
        }

        // Usar retorno implicito
        this.characters.update((lista) => [...lista, newCharacter])

        this.resetFields();
    }

    resetFields(){
        this.name.set('');
        this.power.set(0);
    }

}
