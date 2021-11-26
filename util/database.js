import fs from 'node:fs';

console.log('fileSystem', fs);

export const products = [
  {
    id: '1',
    name: 'Blacks of Kinsale',
    description:
      ' Black Ops Irish whiskey is a careful blend of malt and grain whiskey, matured in Sherry and Bourbon casks and finished in extra deep charred Bourbon Oak barrels for an extra smooth, extra dark Black Whiskey. Non Chill filtered and bottled at 43%.',
    price: '20 euro',
    imgFile: '../images/blacks.webp',
  },
  {
    id: '2',
    name: 'Glendalough',
    description:
      'Glendalough Double Barrel is a single grain Irish whiskey, aged in a combination of bourbon and oloroso sherry casks. Sweet and creamy, with butterscotch and honey from the American oak and dried fruit from the Spanish',
    price: '20 euro',
    imgFile: '../images/glendalough.jpg',
  },
  {
    id: '3',
    name: 'Green Spot',
    description:
      ' Green Spot pours somewhere between sunburnt straw and light amber, and possesses a regal clarity and brilliance in the glass. Its impressive legs are slow to droop and the body of the whiskey ripples like jelly when swirled fervently.',
    price: '20 euro',
    imgFile: '../images/greenspot.jpg',
  },
  {
    id: '4',
    name: 'Roe&Co',
    description:
      'Roe & Co is bottled at 45% abv without chill filtration and is a blend of single malt and grain whiskeys matured exclusively in bourbon casks (a high proportion of which are first-fill).',
    price: '20 euro',
    imgFile: '../images/roeco.webp',
  },
  {
    id: '5',
    name: 'Teelings',
    description:
      " Finished in rum casks and bottled at 46% without chill-filtration, it's an excellent statement of intent. The blend is said to contain a high proportion of first-fill bourbon cask whiskey, and a higher-than-normal ratio of malt to grain.",
    price: '20 euro',
    imgFile: '../images/teeling.jpeg',
  },
  {
    id: '6',
    name: 'Writers Tears',
    description:
      'Writers Tears is a light, sweet Irish whiskey made using a mix of single pot still and single malt whiskeys, resulting in oodles of honeyed, fruity notes. Wonderfully easy to drink, it would make for a great introduction to Irish whiskey for folks new to the spirit.',
    price: '20 euro',
    imgFile: '../images/writers.jpg',
  },
];
