import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { Hero2PageComponent, HeroPageComponent } from './pages/hero/hero-page';
import { App } from './app';
import { HomePageComponent } from './pages/home/home-page';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page';

export const routes: Routes = [

    { path: '', component: HomePageComponent, title: 'Home | Page' },
    { path: 'counter', component: CounterPageComponent, title: 'Counter | Page' },
    { path: 'hero', component: HeroPageComponent, title: 'Hero | Page' },
    { path: 'hero-tarea', component: Hero2PageComponent, title: 'Hero Tarea | Page' },
    { path: 'dragonball', component: DragonballPageComponent, title: 'Dragonball | Page' },

    { path: '**', redirectTo: '' },
];
