import loadable from '@loadable/component'
// import Child from '@/views/child';

const Hello = loadable(() => import('@/views/hello'))
const Child = loadable(() => import('@/views/child'))

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
