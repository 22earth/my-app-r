import Hello from '@/views/hello';
import Child from '@/views/child';

export default [
  {
    path: '/hello',
    exact: true,
    component: Hello
  },
  {
    path: '/child/:id',
    component: Child
  }
];
