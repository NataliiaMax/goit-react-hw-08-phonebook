import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home',
    link: '/',
    private: false,
  },
  {
    id: nanoid(),
    text: 'Registation',
    link: '/register',
    private: false,
  },
  {
    id: nanoid(),
    text: 'Log in',
    link: '/login',
    private: false,
  },
  {
    id: nanoid(),
    text: 'My contacts',
    link: '/contacts',
    private: true,
  },
];

export default items;
