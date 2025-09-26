export const familieMenu = {
  id: 'M1',
  text: 'Familie Menu',
  contents: [
    { title: 'Mini loempia\'s', subtitle: '8 stuks' },
    { title: 'Kerry Ko', subtitle: '5 stuks' },
    { title: 'Saté Ajam', subtitle: '3 stuks' },
    { title: 'Babi Pangang met mager vlees', subtitle: null },
    { title: 'Foe Yong Hai met kipfilet', subtitle: null },
    { title: 'Koe Lu Kai', subtitle: 'Gepaneerde kipblokjes in zoetzure saus' },
    { title: 'Tia Pan 3-sterren', subtitle: 'Vlees, kipfilet en biefstuk met Kung Po pikante saus' },
  ],
  person: [3, 4],
  withBase: true,
  price: 54.90,
};

export const monthMenu = {
  id: 'M2',
  text: 'September Menu',
  contents: [
    { title: 'Mini loempia\'s', subtitle: '6 stuks' },
    { title: 'Saté Ajam', subtitle: '2 stuks' },
    { title: 'Babi Pangang met mager vlees', subtitle: null },
    { title: 'Foe Yong Hai met kipfilet', subtitle: null },
    { title: 'Kipfilet met zwarte bonensaus', subtitle: 'Gebakken kipfilet met gewokte groenten in een zoet pikante saus' },
  ],
  person: [2, 3],
  withBase: true,
  price: 36.90,
};

export const extraMenu = {
  id: 'M3',
  text: 'Extra Afhaalmenu',
  contents: [
    { title: 'Mini loempia\'s', subtitle: '8 stuks' },
    { title: 'Siu Mei', subtitle: '4 stuks' },
    { title: 'Saté Ajam', subtitle: '4 stuks' },
    { title: 'Kipfilet met Kong Po pikante saus', subtitle: null },
    { title: 'Cha Siu met honingsaus', subtitle: null },
    { title: 'Babi Pangang met mager vlees', subtitle: null },
    { title: 'Biefstuk met ketjapsaus', subtitle: null },
    { title: 'Grote Nasi en Bami', subtitle: null },
    { title: 'Gratis tempura garnalen', subtitle: '4 stuks' },
  ],
  person: [4, 6],
  withBase: false,
  price: 70.90,
};

export const snackBox = {
  id: 'M4',
  text: 'Nieuw China Snackbox',
  contents: [
    { title: 'Mini loempia\'s' },
    { title: 'Tempura garnalen' },
    { title: 'Chinese pangsit' },
    { title: 'Gebakken banaan' },
    { title: 'Kerry Ko' },
    { title: 'Aardappelkoekjes' },
  ],
  person: null,
  withBase: false,
  price: 17.50,
};

export default [
  familieMenu,
  monthMenu,
  extraMenu,
  snackBox,
];