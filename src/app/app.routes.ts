import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { MasterProducts } from './components/master-products/master-products';
import { Errorpage } from './components/errorpage/errorpage';
import { Cats } from './components/cats/cats';
import { Slider } from './components/slider/slider';
import { Home } from './components/home/home';
import { Aboutcat } from './components/aboutcat/aboutcat';
import { Allcats } from './components/allcats/allcats';
import { Adoptcat } from './components/forms/adobtcat/adoptcat';
import { Offercat } from './components/forms/offercat/offercat';

export const routes: Routes = [
    {
        path:'',
        component : Main,
        children: [
            {path:'', component:Home},
            {path: 'cats',
                loadComponent: ()=>
                import('./components/allcats/allcats').then((c)=>c.Allcats)
            },
            {path: 'adopt',
                loadComponent: ()=>
                import('./components/forms/adobtcat/adoptcat').then((c)=>c.Adoptcat)
            },
            {path: 'offer',
                loadComponent: ()=>
                import('./components/forms/offercat/offercat').then((c)=>c.Offercat)
            },
            
            {path: 'aboutcats/:ID', component:Aboutcat},
            
            // {path: 'adopt', component:Adoptcat},
            // {path: 'offer', component:Offercat}
        ]
    },
    {path:'**', component:Errorpage}
];
