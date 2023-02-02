const users = [
  {
    name: {
      title: 'Mr',
      first: 'Loïs',
      last: 'Schmitt',
    },
    location: {
      street: {
        number: 5425,
        name: 'Rue Cyrus-Hugues',
      },
      city: 'Rouen',
      state: 'Bouches-du-Rhône',
      country: 'France',
      postcode: 32788,
      coordinates: {
        latitude: '-2.4086',
        longitude: '-84.8111',
      },
      timezone: {
        offset: '-12:00',
        description: 'Eniwetok, Kwajalein',
      },
    },
    email: 'lois.schmitt@example.com',
    login: {
      uuid: '8f087c24-ed83-4698-a1ff-05089fd1893b',
      username: 'yellowwolf121',
      password: 'barbie',
      salt: '61FmyLH3',
      md5: '88e4dc8460521aaf9bdbf05da9907756',
      sha1: 'f61584cc2b9360ff7b4cc93155880e9dd07f2ff4',
      sha256:
        '4ba59a31cb0caab8f7bcd4e31cfe57ed57eb85f87e0b53776dac7391e3c67441',
    },
    dob: {
      date: '1964-10-20T03:04:28.223Z',
      age: 56,
    },
    registered: {
      date: '2003-04-01T19:07:53.321Z',
      age: 17,
    },
    phone: '03-98-05-52-64',
    cell: '06-57-60-07-14',
    id: {
      name: 'INSEE',
      value: '1NNaN74137943 47',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/51.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/51.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/51.jpg',
    },
    nat: 'FR',
  },
  {
    name: {
      title: 'Mr',
      first: 'Aapo',
      last: 'Perala',
    },
    location: {
      street: {
        number: 2318,
        name: 'Hämeentie',
      },
      city: 'Ulvila',
      state: 'Southern Ostrobothnia',
      country: 'Finland',
      postcode: 51000,
      coordinates: {
        latitude: '-4.4923',
        longitude: '0.8392',
      },
      timezone: {
        offset: '-4:00',
        description: 'Atlantic Time (Canada), Caracas, La Paz',
      },
    },
    email: 'aapo.perala@example.com',
    login: {
      uuid: 'ca01b26c-725c-4f75-ae62-0b434eb7ea01',
      username: 'blackostrich507',
      password: 'diego',
      salt: '6Ndht1nN',
      md5: 'd53edd53a23a181d9679526114784c2f',
      sha1: '68e3d1e8984b926bc612c22f58ebc1b347c89d51',
      sha256:
        '36d663c08f4583ba4f00b438beb7335ff5e21ee72fa03149285619447f39ff62',
    },
    dob: {
      date: '1986-04-18T16:40:51.497Z',
      age: 34,
    },
    registered: {
      date: '2005-02-16T21:49:26.913Z',
      age: 15,
    },
    phone: '03-571-585',
    cell: '044-788-91-57',
    id: {
      name: 'HETU',
      value: 'NaNNA175undefined',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/35.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/35.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/35.jpg',
    },
    nat: 'FI',
  },
  {
    name: {
      title: 'Mr',
      first: 'Miguel',
      last: 'Murray',
    },
    location: {
      street: {
        number: 5491,
        name: 'York Road',
      },
      city: 'Mullingar',
      state: 'Kilkenny',
      country: 'Ireland',
      postcode: 63576,
      coordinates: {
        latitude: '-32.4465',
        longitude: '122.9490',
      },
      timezone: {
        offset: '+10:00',
        description: 'Eastern Australia, Guam, Vladivostok',
      },
    },
    email: 'miguel.murray@example.com',
    login: {
      uuid: '3a42a7c2-529c-429c-97bc-de18b1c8a0ba',
      username: 'whitegoose105',
      password: 'pinkfloy',
      salt: 'HztiLZz8',
      md5: '27b2b276ac23365a78b488bf15d77a82',
      sha1: '4bcbd27ec65d190ae891c4a61b57a9a721e33889',
      sha256:
        '37b17ff71028fe73e34509fa739113f9fdd0fa83c0a11cd5235360aa069c7e14',
    },
    dob: {
      date: '1967-05-22T10:17:35.234Z',
      age: 53,
    },
    registered: {
      date: '2009-07-06T18:11:43.712Z',
      age: 11,
    },
    phone: '051-065-8420',
    cell: '081-357-7877',
    id: {
      name: 'PPS',
      value: '0694851T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/22.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/22.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/22.jpg',
    },
    nat: 'IE',
  },
  {
    name: {
      title: 'Mr',
      first: 'Anatol',
      last: 'Eichhorn',
    },
    location: {
      street: {
        number: 3423,
        name: 'Schulstraße',
      },
      city: 'Nienburg/Weser',
      state: 'Sachsen-Anhalt',
      country: 'Germany',
      postcode: 73657,
      coordinates: {
        latitude: '81.7016',
        longitude: '17.6722',
      },
      timezone: {
        offset: '-5:00',
        description: 'Eastern Time (US & Canada), Bogota, Lima',
      },
    },
    email: 'anatol.eichhorn@example.com',
    login: {
      uuid: 'fa698652-9d6f-4be5-8663-91a9d74148bb',
      username: 'beautifulzebra463',
      password: 'someone',
      salt: 'uojtes8d',
      md5: '1c5521e867eb9a30289e524649734153',
      sha1: 'fe1389992febcec10c009eb4518771e4170094c2',
      sha256:
        'd88f6140b3a140dbb5574f0c877e6e1760807fa9cc0a2338efe42c54679f6b9f',
    },
    dob: {
      date: '1962-04-09T02:18:20.845Z',
      age: 58,
    },
    registered: {
      date: '2003-11-21T05:50:30.096Z',
      age: 17,
    },
    phone: '0153-2429183',
    cell: '0173-9256976',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/57.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/57.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
    },
    nat: 'DE',
  },
  {
    name: {
      title: 'Ms',
      first: 'Mia',
      last: 'Mendoza',
    },
    location: {
      street: {
        number: 5521,
        name: 'Mcclellan Rd',
      },
      city: 'Maitland',
      state: 'Western Australia',
      country: 'Australia',
      postcode: 3068,
      coordinates: {
        latitude: '57.4143',
        longitude: '107.8067',
      },
      timezone: {
        offset: '+5:00',
        description: 'Ekaterinburg, Islamabad, Karachi, Tashkent',
      },
    },
    email: 'mia.mendoza@example.com',
    login: {
      uuid: 'c09f7e82-4102-445d-9db5-32514f0d0f65',
      username: 'heavygoose920',
      password: 'senior',
      salt: 'xBeOuCY8',
      md5: 'a8ec3e998e3d3a66a29a8244577092c5',
      sha1: '80279818715952d1601c80c3c2057ccda482b417',
      sha256:
        'd3f171b228e2c9fb352002a1dc081497de81fa694a3905ce9f50fe4b9440cb23',
    },
    dob: {
      date: '1951-03-18T00:04:08.706Z',
      age: 69,
    },
    registered: {
      date: '2016-04-18T05:25:32.573Z',
      age: 4,
    },
    phone: '07-2738-2553',
    cell: '0485-800-907',
    id: {
      name: 'TFN',
      value: '005883794',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/77.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/77.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/77.jpg',
    },
    nat: 'AU',
  },
  {
    name: {
      title: 'Miss',
      first: 'Kelly',
      last: 'Meyer',
    },
    location: {
      street: {
        number: 2766,
        name: 'Springfield Road',
      },
      city: 'Carlow',
      state: 'Roscommon',
      country: 'Ireland',
      postcode: 28070,
      coordinates: {
        latitude: '-72.8372',
        longitude: '28.6407',
      },
      timezone: {
        offset: '-3:30',
        description: 'Newfoundland',
      },
    },
    email: 'kelly.meyer@example.com',
    login: {
      uuid: '295373e1-e55e-448a-ac90-fb9ab878f166',
      username: 'bluepeacock361',
      password: 'beau',
      salt: 'tscbulC2',
      md5: '4b09ca339c29a804ad5e7db9839db6b2',
      sha1: 'e62ad01e42b5788dfbe6da3e1535f81dae6bcc0c',
      sha256:
        '87378ec63ed7287e752dc4dceba051f737924ade77b002a4b7fe999ff8cab53d',
    },
    dob: {
      date: '1969-07-10T09:39:45.614Z',
      age: 51,
    },
    registered: {
      date: '2005-06-19T17:43:14.882Z',
      age: 15,
    },
    phone: '051-531-9619',
    cell: '081-824-0434',
    id: {
      name: 'PPS',
      value: '6947363T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/40.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/40.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/40.jpg',
    },
    nat: 'IE',
  },
  {
    name: {
      title: 'Mr',
      first: 'Alexander',
      last: 'Rodriquez',
    },
    location: {
      street: {
        number: 2056,
        name: 'Edwards Rd',
      },
      city: 'El Monte',
      state: 'Ohio',
      country: 'United States',
      postcode: 22970,
      coordinates: {
        latitude: '-76.0596',
        longitude: '56.8849',
      },
      timezone: {
        offset: '+10:00',
        description: 'Eastern Australia, Guam, Vladivostok',
      },
    },
    email: 'alexander.rodriquez@example.com',
    login: {
      uuid: '57cfc65e-1ccc-44c4-9488-5e8c00f0c018',
      username: 'organicmeercat688',
      password: 'zhao',
      salt: 'B74BpdaI',
      md5: '5f149f27360ef81cd9447379efca2f20',
      sha1: '07dc2dfff39cc53da59d233711686445f62b60ba',
      sha256:
        'f89e8029227c090370cb01bb96310d4915d21fd2b3ca5ad0b5585b51fcc577e3',
    },
    dob: {
      date: '1953-02-04T20:43:19.481Z',
      age: 67,
    },
    registered: {
      date: '2002-04-26T14:38:58.869Z',
      age: 18,
    },
    phone: '(579)-934-5986',
    cell: '(525)-233-3411',
    id: {
      name: 'SSN',
      value: '197-83-5334',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/58.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/58.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/58.jpg',
    },
    nat: 'US',
  },
  {
    name: {
      title: 'Mrs',
      first: 'Venla',
      last: 'Makela',
    },
    location: {
      street: {
        number: 4050,
        name: 'Hämeentie',
      },
      city: 'Larsmo',
      state: 'Central Finland',
      country: 'Finland',
      postcode: 89664,
      coordinates: {
        latitude: '65.1178',
        longitude: '110.7964',
      },
      timezone: {
        offset: '-7:00',
        description: 'Mountain Time (US & Canada)',
      },
    },
    email: 'venla.makela@example.com',
    login: {
      uuid: '4be74af9-9354-4c2c-b540-0527d12c4726',
      username: 'happybear293',
      password: 'bizkit',
      salt: '1dy97j1N',
      md5: '1ccf9b197240b7e8b910f10c402d45dc',
      sha1: '36d59c09d0fc1ecd65ead977468e248ea7d8f996',
      sha256:
        'd2dbb40b26561a2d8784d596fd5d9417155bb616ec9a937bba9072d3a343b023',
    },
    dob: {
      date: '1969-12-19T15:41:40.109Z',
      age: 51,
    },
    registered: {
      date: '2013-09-16T08:11:27.071Z',
      age: 7,
    },
    phone: '09-910-266',
    cell: '048-385-73-93',
    id: {
      name: 'HETU',
      value: 'NaNNA996undefined',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/72.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/72.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/72.jpg',
    },
    nat: 'FI',
  },
  {
    name: {
      title: 'Ms',
      first: 'Harriet',
      last: 'Smith',
    },
    location: {
      street: {
        number: 754,
        name: 'South Road',
      },
      city: 'Upper Hutt',
      state: 'Bay of Plenty',
      country: 'New Zealand',
      postcode: 33365,
      coordinates: {
        latitude: '33.4253',
        longitude: '25.7832',
      },
      timezone: {
        offset: '-3:30',
        description: 'Newfoundland',
      },
    },
    email: 'harriet.smith@example.com',
    login: {
      uuid: '51f93ee3-6076-47af-ac4b-5f20cf334b27',
      username: 'sadkoala504',
      password: 'chelle',
      salt: 'UTaupAnI',
      md5: '5608a64de8d2f44e04263cbe204191e8',
      sha1: '1c844e374a8a376ad8ab203a2599c2b1f7362167',
      sha256:
        'a01f761670f9b94eca45f4eb1a1d1b861ed91a9c4885c65436eafc87d8852bbb',
    },
    dob: {
      date: '1992-11-18T07:58:20.054Z',
      age: 28,
    },
    registered: {
      date: '2017-09-27T13:55:56.650Z',
      age: 3,
    },
    phone: '(970)-249-6702',
    cell: '(324)-663-8113',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/42.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/42.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/42.jpg',
    },
    nat: 'NZ',
  },
  {
    name: {
      title: 'Mr',
      first: 'Ceyhun',
      last: 'Köybaşı',
    },
    location: {
      street: {
        number: 8281,
        name: 'Bağdat Cd',
      },
      city: 'Sakarya',
      state: 'Mardin',
      country: 'Turkey',
      postcode: 94466,
      coordinates: {
        latitude: '79.1011',
        longitude: '143.7086',
      },
      timezone: {
        offset: '+5:00',
        description: 'Ekaterinburg, Islamabad, Karachi, Tashkent',
      },
    },
    email: 'ceyhun.koybasi@example.com',
    login: {
      uuid: '74008f99-a209-48ce-b579-eda848344572',
      username: 'beautifulfish226',
      password: 'biker',
      salt: '9IsK4vuv',
      md5: 'd5cd5758fc05b427232f8501e9847a96',
      sha1: '3e2b373a8ee189f4ff7e65f9fe96c1106356fe28',
      sha256:
        '2011aa2ef14a59a6b4fe678c821d1d0252bb3628fa4e1bf571ac3e1ee51d478b',
    },
    dob: {
      date: '1979-01-21T07:32:56.675Z',
      age: 41,
    },
    registered: {
      date: '2003-10-23T01:14:43.861Z',
      age: 17,
    },
    phone: '(312)-520-8233',
    cell: '(032)-146-8710',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/44.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/44.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/44.jpg',
    },
    nat: 'TR',
  },
];

export default users;
