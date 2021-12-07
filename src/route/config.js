import Root from '@/views/root';
import Counter from '@/views/counter';

const routes = [
  {
    title: 'redux-simulation',
    component: Root,
    routes: [
      {
        path: ['/redux', '/'],
        exact: true,
        component: Counter,
      },
    ],
  },
];

export default routes;
