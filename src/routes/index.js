import routes from '../configs/routes';
//  Pages
import HomePage from '../pages/HomePage';
import Reigster from '../pages/Register';
import Login from '../pages/Login';

export const publicRoutes = [
    { path: routes.home, component: HomePage },
    { path: routes.login, component: Login},
    { path: routes.register, component: Reigster },
];
export const privateRoutes = [];