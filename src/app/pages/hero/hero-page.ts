import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
    templateUrl: './hero-page.html',
    styleUrl: './hero-page.css',
    // Para quitar el zoneJs y solo trabajar con señales
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {

    name = signal('Ironman');
    age = signal(45);

    constructor() {}

    getHeroDescription() {
        return `${this.name()} - ${this.age()} años`;
    }

    changeHeroName(newName: string) {
        this.name.set(newName);
        // if ( newName === 'Spiderman' ) {
        //     this.age.set(22);
        // }
    }

    getHeroNameUppercase() {
        return this.name().toUpperCase();
    }

    changeHeroAge(newAge: number) {
        this.age.set(newAge);
    }

    changeHeroNameAndAge(newName: string, newAge: number) {
        this.name.set(newName);
        this.age.set(newAge);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }
}

// ******************************************************
// Tarea - Como la resolvio el Profesor Fernando Herrera
// ******************************************************
@Component({
    templateUrl: './hero2-page.html',
    styleUrls: ['./hero-page.css'],
    imports: [ UpperCasePipe],
    // Para quitar el zoneJs y solo trabajar con señales
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero2PageComponent {

    name = signal('Ironman');
    age = signal(45);

    // Señal computada descripción del héroe
    heroDescription = computed( () => {
        const description = `${ this.name() } - ${ this.age() } años`;
        // console.log('Calculando descripción del héroe');
        return description;
    })

    // Señal computada capitalizando el nombre
    capitalizedHeroName = computed( () => this.name().toUpperCase() );

    // getHeroDescription() {
    //     return `${this.name()} - ${this.age()} años`;
    // }

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    changeAge() {
        this.age.set(60);
    }

    // Capitalizar con Método
    // displayNameUpperCase() {
    //     return this.name().toUpperCase();
    // }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }
}
