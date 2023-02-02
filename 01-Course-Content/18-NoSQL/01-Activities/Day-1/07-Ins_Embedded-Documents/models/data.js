// Data for document
const data = [
  // Using a reference to establish a relationship between two documents
  // This is similar to primary/foreign keys in MySQL
  {
    department: 'floral',
    promotion_id: 'flowers', // refers to the promotion object below
  },
  {
    promotion_id: 'flowers',
    sale: 'discount on red flowers',
    percentage_discount: 50,
  },

  // Using a single embedded document to create relationship
  // This is a one-to-one relationship
  {
    department: 'frozen',
    promotion: {
      promotion_id: 'popsicle',
      sale: 'discount frozen treats',
      percentage_discount: 20,
    },
  },
  {
    department: 'snacks',
    promotion: {
      promotion_id: 'chips',
      sale: 'free granola bar',
      percentage_discount: 50,
    },
  },
  // Using multiple embedded document to create a relationship to a single document
  // This is a one-to-many relationship
  {
    department: 'produce',
    promotion: [
      {
        promotion_id: 'Monday',
        sale: 'discount on bananas',
        percentage_discount: 25,
      },
      {
        promotion_id: 'Tuesday',
        sale: 'half-price apples',
        percentage_discount: 50,
      },
      {
        promotion_id: 'Wednesday',
        sale: 'discount on cherries',
        percentage_discount: 10,
      },
      {
        promotion_id: 'Thursday',
        sale: 'free grapes',
        percentage_discount: 100,
      },
      {
        promotion_id: 'Friday',
        sale: '5% off berries',
        percentage_discount: 5,
      },
      {
        promotion_id: 'Saturday',
        sale: 'discount on all fruit',
        percentage_discount: 30,
      },
      {
        promotion_id: 'Sunday',
        sale: 'discount on all fruit',
        percentage_discount: 12,
      },
    ],
  },
];

module.exports = data;
