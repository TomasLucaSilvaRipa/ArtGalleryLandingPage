import { Routes } from '@angular/router';
import { LandingPage } from './ArtGalleryLangingPage/pages/landingPage/landingPage';

export const routes: Routes = [
    {
        path:'ArtGalleryLandingPage',
        component: LandingPage,
    },
    {
        path: '**',
        redirectTo: "ArtGalleryLandingPage"
    }
];
