import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter-page.html',
    styleUrl: './counter-page.css',

    // Para quitar el zoneJs y solo trabajar con señales
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {

    counter = 10;
    counterSignal = signal(10);

    constructor() {
        // Cada dos segundos mandamos a consola un tick
        setInterval( () => {
            // this.counter += 1;
            // this.increaseBy(1);
            // this.counterSignal.update((v) => v + 1);
            console.log('Tick');
        }, 2000);
    }

    increaseBy(value: number) {
        this.counter += value;
        // Mandamos llamar un callback function
        this.counterSignal.update( (current) => current + value);
    }

    resetCounter() {
        this.counter = 0;
        this.counterSignal.set(0);
    }

}
