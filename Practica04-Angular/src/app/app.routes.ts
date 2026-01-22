import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact} from './pages/contact/contact';
import { GgUWU } from './pages/gg-uwu/gg-uwu';



export const routes: Routes = [
{ path: '', component: Home },
{ path: 'contact', component: Contact },
{ path: 'gg-uwu', component: GgUWU}
];
