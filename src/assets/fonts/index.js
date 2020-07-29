import orkneyLight from './orkney-light.otf';
import orkneyRegular from './orkney-regular.otf';
import orkneyMedium from './orkney-medium.otf';
import orkneyBold from './orkney-bold.otf';

const orkney = [
  {
    fontFamily: 'orkney',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 300,
    src: `
      local('orkney'),
      local('orkney-light'),
      url(${orkneyLight}) format('opentype')
    `,
  },
  {
    fontFamily: 'orkney',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('orkney'),
      local('orkney-regular'),
      url(${orkneyRegular}) format('opentype')
    `,
  },
  {
    fontFamily: 'orkney',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `
      local('orkney'),
      local('orkney-medium'),
      url(${orkneyMedium}) format('opentype')
    `,
  },
  {
    fontFamily: 'orkney',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 600,
    src: `
      local('orkney'),
      local('orkney-bold'),
      url(${orkneyBold}) format('opentype')
    `,
  },
];

export default orkney;
