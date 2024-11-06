import Home from '../pages/homePage';
import Following from '../pages/following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import { HeaderOnly } from '../layouts';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/:nickname',
        component: Profile,
    },
    {
        path: '/live',
        component: Upload,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
