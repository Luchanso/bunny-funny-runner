const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, quisquam? Eos praesentium perferendis hic eius optio impedit expedita architecto nobis corrupti quod, blanditiis at ducimus ipsam in natus iure eaque!';

export const items = [
  {
    id: '1',
    title: 'Title',
    price: 99000,
    description: LOREM,
    img:
      'https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=1498&q=80'
  },
  {
    id: '2',
    title: 'Unicorne Item 2',
    price: 232000,
    description: LOREM,
    img:
      'https://images.unsplash.com/photo-1495900158145-fa1e1786861b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2cb8ee4de153b83ed42e3ab1943e6e5&auto=format&fit=crop&w=1193&q=80'
  },
  {
    id: '3',
    title: 'Third item',
    price: 232000,
    description: LOREM,
    img:
      'https://images.unsplash.com/photo-1495900158145-fa1e1786861b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2cb8ee4de153b83ed42e3ab1943e6e5&auto=format&fit=crop&w=1193&q=80'
  }
];

items.push({ ...items[0], id: Math.random().toString(), title: '1' });
items.push({ ...items[0], id: Math.random().toString(), title: '2' });
items.push({ ...items[0], id: Math.random().toString(), title: '3' });
items.push({ ...items[0], id: Math.random().toString(), title: '4' });
items.push({ ...items[0], id: Math.random().toString(), title: '5' });

export default {
  items
};
