import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.css'],
    // Para quitar el zoneJs y solo trabajar con señales
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

    title = signal('Bienvenido a la página de inicio');

}
