import React from 'react';
import ImageTextColumn from './ImageTextColumn';
import Image from '../image';

export default [
  {
    component: ImageTextColumn,
    name: 'ImageTextColumn',
    props: {
      heading: 'Lets test this thing.',
      body: 'Here is some more text',
      image: require('../../assets/images/heros/shirts.jpg'),
      cta: {
        label: 'More',
        href: 'more'
      }
    }
  }
];