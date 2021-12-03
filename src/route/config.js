import Root from '@/views/root';
import Home from '@/views/home';
import ReduxToolkit from '@/views/reduxToolkit';

const routes = [
  {
    title: 'mini-redux',
    component: Root,
    routes: [
      {
        path: ['/home', '/'],
        exact: true,
        component: Home,
      },
      {
        path: '/redux',
        exact: true,
        component: ReduxToolkit,
      },
    ],
  },
];

export default routes;
