const uuid = require('../helpers/uuid');

const reviews = [
  {
    product: 'Happy Hacking Keyboard Professional 2',
    price: '$250.00',
    switch_type: 'Topre',
    username: 'kbdfan05',
    review:
      'Love it! They typing feel is amazing but it lacks dedicated arrow keys',
    rating: 8,
    upvotes: 20,
    review_id: uuid(),
  },
  {
    product: 'Apple Wireless Keyboard',
    price: '$99',
    switch_type: 'Scissor Switch',
    username: 'TimApple',
    review:
      'It works for what I need it for, but the travel distance is almost non-existent',
    rating: 6,
    upvotes: 20,
    review_id: uuid(),
  },
  {
    product: 'Ducky One Two Mini',
    price: '$140.00',
    switch_type: 'Cherry MX',
    username: 'C00lcat',
    review:
      'Great 60% keyboard with amazing build quality. Nice bang for your buck',
    rating: 9,
    upvotes: 20,
    review_id: uuid(),
  },
  {
    product: 'Dell USB keyboard',
    price: '$19.00',
    switch_type: 'Rubber dome',
    username: 'AllGasNobrakes',
    review: 'This thing is terrible. It came with my PC and it is not great',
    rating: 2,
    upvotes: 20,
    review_id: uuid(),
  },
];

module.exports = reviews;
