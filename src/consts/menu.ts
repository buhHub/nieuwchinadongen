export default [
  {
    text: 'Soepen', items: [
      { id: '1', text: 'Tomatensoep', price: 5.10 },
      { id: '2', text: 'Kippensoep', price: 5.10 },
      { id: '3', text: 'Haaienvinnensoep', price: 5.10 },
      { id: '4', text: 'Champignonsoep', price: 5.20 },
      { id: '6', text: 'Pekingsoep', price: 6.50 },
      { id: '7', text: 'Sichuan soep', price: 6.80, subtext: 'pittig' },
      { id: '8', text: 'Wan Tan Soep', price: 6.80, subtext: 'bouillon met gevulde flensjes' },
      { id: '9a', text: 'Soep ‘Nieuw China’', price: 7.90, subtext: 'soep met garnalen en groenten' },
    ]
  },

  {
    text: 'Voor- en Bijgerechten', items: [
      { id: '9', text: 'Kroepoek / Casava', price: 3.80 },
      { id: '10', text: 'Grote Loempia', price: 7.20 },
      { id: '11', text: 'Mini Loempia\’s', price: 7.50, subtext: '4 stuks' },
      { id: '12', text: 'Pangsit Goreng', price: 6.00, subtext: '6 stuks' },
      { id: '13', text: 'Gebakken grote garnalen', price: 9.10, subtext: '4 stuks' },
      { id: '14', text: 'Mini Loempia’s vegetarisch', price: 4.90, subtext: '6 stuks' },
      { id: '17', text: 'Saté Babi', price: 7.60, subtext: '4 stokjes' },
      { id: '18', text: 'Saté Ajam', price: 7.60, subtext: '4 stokjes' },
      { id: '19', text: 'Saté Ossenhaas', price: 9.50, subtext: '4 stokjes' },
      { id: '20', text: 'Kip Gyoza', price: 7.10, subtext: '6 stuks' },
      { id: '21', text: 'Pindasaus / Pikante saus / Atjar', price: 3.70 },
      { id: '22', text: 'Edamame', price: 6.10 },
      { id: '23', text: 'Gado Gado', price: 8.60 },
      { id: '24', text: 'Gebakken bananen', price: 6.20, subtext: '4 stuks' },
      { id: '24a', text: 'Sieuw Maai', price: 8.10, subtext: '6 stuks' },
    ]
  },

  {
    text: 'Bami- of Nasi gerechten', items: [
      { id: '26', text: 'Bami of Nasi Goreng met ei', price: 7.50 },
      { id: '27', text: 'Bami of Nasi Goreng speciaal', price: 12.70, subtext: '1/4 kip en saté' },
      { id: '28', text: 'Bami of Nasi Goreng met saté', price: 12.40, subtext: '3 stokjes' },
      { id: '29', text: 'Bami of Nasi Goreng met kipfilet of varkensvlees', price: 15.50 },
      { id: '31', text: 'Bami of Nasi Goreng met gesneden ossenhaas', price: 18.10 },
      { id: '33', text: 'Bami of Nasi Goreng Singapore', price: 17.60 },
      { id: '38', text: 'Bami of Nasi Goreng compleet', price: 23.20 },
    ]
  },

  {
    text: 'Mihoen of Chinese Bami gerechten', items: [
      { id: '45', text: 'Mihoen Goreng met gesneden kip of varkensvlees', price: 13.50 },
      { id: '47', text: 'Mihoen Goreng met ossenhaas', price: 18.80 },
      { id: '48', text: 'Mihoen Goreng met Chinese garnalen', price: 19.10 },
      { id: '49', text: 'Mihoen Singapore', price: 17.90 },
      { id: '51', text: 'Mihoen Goreng Speciaal', price: 18.80 },
      { id: '52', text: 'Mihoen Goreng compleet', price: 23.60 },
      { id: '56', text: 'Chinese Bami compleet', price: 23.60 },
    ]
  },

  {
    text: 'Combinatiegerechten', items: [
      { id: '123', text: 'Cha Kai', price: 23.50, subtext: 'Cha siu, Kipfilet met kong po saus, 6x veg. mini loempia’s' },
      { id: '124', text: 'Foe Kai', price: 22.50, subtext: 'Foe Yong Hai, Kip op Kantonese wijze, 6x veg. mini loempia’s' },
      { id: '125', text: 'Foe Yuk', price: 21.50, subtext: 'Babi Pangang, Foe Yong Hai, 2st. Saté' },
      { id: '126', text: 'Tjap Yuk', price: 21.50, subtext: 'Babi Pangang, Tjap Tjoy, 2st. Saté' },
      { id: '126a', text: 'Koe Tjap', price: 21.50, subtext: 'Koe Loe Kai, Tjap Tjoy, 2st. Saté' },
      { id: '127', text: 'Koe Yuk', price: 22.50, subtext: 'Babi Pangang, Koe Loe Kai, 2st. Saté' },
      { id: '127a', text: 'Foe Koe', price: 22.50, subtext: 'Foe Yong Hai, Koe Loe Kai, 2st. Saté' },
      { id: '128', text: 'Mo Yuk', price: 23.10, subtext: 'Babi Pangang, Kip met champignons,  2st. Saté' },
      { id: '129', text: 'Ha Yuk', price: 22.50, subtext: 'Babi Pangang, geb. garnalen, 2st. Saté' },
      { id: '130', text: 'Lee Yuk', price: 22.50, subtext: 'Babi Pangang, Kip met kerriesaus, 2st. Saté' },
      { id: '131', text: 'Foe Tjap', price: 21.50, subtext: 'Foe Yong Hai, Tjap Tjoy, 2st. Saté' },
    ],
    context: 'Bij Combinatie-gerechten:\nmet Witte rijst +€1.60\nmet Bami of Nasi +€3.60\nmet Mihoen of Chinese bami +€6.90',
  },

  {
    text: 'Ei gerechten', items: [
      { id: '57', text: 'Foe Yong Hai met varkensvlees of kipfilet', price: 14.50 },
      { id: '59', text: 'Foe Yong Hai met gesneden biefstuk', price: 18.50 },
      { id: '60', text: 'Foe Yong Hai met Chinese Garnalen', price: 18.50 },
      { id: '62', text: 'Foe Yong Hai Speciaal', price: 18.50 },
    ]
  },

  {
    text: 'Groente gerechten', items: [
      { id: '63', text: 'Tjap Tjoy met varkensvlees of kipfilet', price: 14.50 },
      { id: '65', text: 'Tjap Tjoy met gesneden biefstuk', price: 18.50 },
      { id: '66', text: 'Tjap Tjoy met Chinese garnalen', price: 18.50 },
      { id: '67', text: 'Tjap Tjoy speciaal', price: 18.50, subtext: 'met varkenshaas, kipfilet en garnalen' },
    ]
  },

  {
    text: 'Varkensvlees gerechten', items: [
      { id: '72', text: 'Babi Pangang met spek', price: 18.50 },
      { id: '73', text: 'Babi Pangang mager vlees', price: 18.50 },
      { id: '74', text: 'Babi Pangang Speciaal', price: 19.50 },
      { id: '76', text: 'Cha Siu', price: 19.50 },
      { id: '77', text: 'Babi Ketjap', price: 18.50 },
      { id: '78', text: 'Koe Loe Yuk', price: 18.20 },
      { id: '86', text: 'Vlees met zwarte bonensaus', price: 18.20 },
      { id: '87', text: 'Vlees met Malakka saus', price: 18.20 },
    ],
    context: 'Bij hoofdgerechten:\nmet Witte rijst +€1.60\nmet Bami of Nasi +€3.60\nmet Mihoen of Chinese bami +€6.90',
  },

  {
    text: 'Kip gerechten', items: [
      { id: '90a', text: 'Koe Loe Kai', price: 17.20 },
      { id: '90', text: 'Kipfilet met champignons', price: 17.30 },
      { id: '91', text: 'Kipfilet met cashewnoten', price: 18.50 },
      { id: '92', text: 'King Do Kai', price: 18.60 },
      { id: '93', text: 'Kipfilet met verse daggroenten', price: 17.50 },
      { id: '94', text: 'Kipfilet met ananas', price: 17.50 },
      { id: '95', text: 'Kipfilet met kerriesaus', price: 17.50 },
      { id: '96', text: 'Kipfilet met zwarte bonensaus', price: 18.50 },
      { id: '97', text: 'Kipfilet met Malakka saus', price: 18.50 },
      { id: '97a', text: 'Kipfilet met ketjap saus', price: 18.60 },
      { id: '98', text: 'Kip van de chef', price: 18.50 },
    ]
  },

  {
    text: 'Ossenhaas gerechten', items: [
      { id: '100', text: 'Gesneden ossenhaas met cashewnoten', price: 21.90 },
      { id: '103', text: 'Gesneden ossenhaas verse daggroenten', price: 21.50 },
      { id: '105', text: 'Gesneden ossenhaas met kerriesaus', price: 21.50 },
      { id: '106', text: 'Gesneden ossenhaas met zwarte bonensaus', price: 21.50 },
      { id: '107', text: 'Gesneden ossenhaas met Malakka saus', price: 21.50 },
    ]
  },

  {
    text: 'Chinese garnalen en vis gerechten', items: [
      { id: '108', text: 'Gebakken Chinese grote garnalen', price: 19.90 },
      { id: '111', text: 'Chinese garnalen met verse daggroenten', price: 21.50 },
      { id: '112', text: 'Chinese garnalen met kerriesaus', price: 21.50 },
      { id: '113', text: 'Chinese garnalen met zwarte bonensaus', price: 21.50 },
      { id: '114', text: 'Chinese garnalen met Malakka saus', price: 21.50 },
      { id: '117', text: 'Tongfilet met champignons', price: 21.50 },
      { id: '119', text: 'Tongfilet met ananas in zoetzure saus', price: 21.50 },
      { id: '121', text: 'Tongfilet met zwarte bonensaus', price: 21.50 },
      { id: '122', text: 'Tongfilet met Malakka saus', price: 21.50 },
    ]
  },

  {
    text: 'Indische gerechten', items: [
      { id: '132', text: 'Nasi Rames', price: 13.80 },
      { id: '133', text: 'Nasi Rames speciaal', price: 15.90 },
      { id: '134', text: 'Bami Rames', price: 13.80 },
      { id: '135', text: 'Bami Rames speciaal', price: 15.90 },
      { id: '136', text: 'Ajam Pangang', price: 17.90 },
      { id: '137', text: 'Daging Bamboe Roedjak', price: 19.20 },
      { id: '138', text: 'Nasi Rames met 3 stokjes saté', price: 15.20 },
      { id: '139', text: 'Bami Rames met 3 stokjes saté', price: 15.20 },
    ]
  },

  {
    text: 'Pekingse Specialiteiten', subtext: 'De beroemde Peking-eend vindt zijn oorsprong in de Peking keuken ( ook wel de keizerlijke keuken genoemd)', items: [
      { id: '251', text: 'Peking-eend met knoflook en gembersaus', price: 21.30 },
      { id: '253', text: 'Peking-eend met zoetzure saus', price: 21.30 },
      { id: '254', text: 'Peking-eend met zwarte bonensaus', price: 21.30 },
      { id: '258', text: 'Peking-eend met Chinese champignons', price: 21.30 },
      { id: '261', text: 'Peking-eend met roedjaksaus', price: 21.30 },
      { id: '262', text: 'Peking-eend met pikante saus', price: 21.30 },
      { id: '263', text: 'Peking-eend met ketjapsaus', price: 21.30 },
    ]
  },

  {
    text: 'Kantonese specialiteiten', items: [
      { id: 'K1', text: 'Grote Chinese garnalen met knoflook', price: 24.20 },
      { id: 'K2', text: 'Grote Chinese garnalen met zout en peper', price: 24.20 },
      { id: 'K3', text: 'Gebakken grote garnalen op Kantonese wijze', price: 24.20 },
      { id: 'K4', text: 'Gebakken varkenshaas / Kip op Kantonese wijze', price: 21.80 },
      { id: 'K5', text: 'Ossenhaas op Kantonese wijze', price: 24.30 },
    ]
  },

  {
    text: 'Sichuanese specialiteiten', items: [
      { id: 'S1', text: 'Kung Po Kai', price: 22.20, subtext: 'gebakken kipfilet met Kong Po gekruide pikante saus' },
      { id: 'S2', text: 'Kung Po San Pam', price: 22.20, subtext: 'gebakken kip, varkensvlees en ossenhaas met Kung Po pikante saus' },
      { id: 'S3', text: 'Kung Po Eend', price: 23.10, subtext: 'Peking eend met Kong Po gekruide pikante saus' },
      { id: 'S4', text: 'Kung Po Yu Pin', price: 23.10, subtext: 'gebakken tongfilet met Kong Po gekruide pikante saus' },
      { id: 'S5', text: 'Kung Po Ngow', price: 23.10, subtext: 'gesneden biefstuk met Kong Po gekruide pikante saus' },
      { id: 'S6', text: 'Kanton Sieuw Chow', price: 23.30, subtext: 'gemengde groenten met kip, garnalen en tongfilet met knoflook saus' },
      { id: 'S7', text: 'Sam Mee', price: 23.30, subtext: 'gebakken garnalen, kip met champignons, Koe Loe Kai' },
      { id: 'S8', text: 'Tip Pan Garnalen', price: 24.10, subtext: 'garnalen met speciale Tip Pan pikante saus' },
      { id: 'S9', text: 'Tip Pan kipfilet of varkensvlees', price: 22.10, subtext: 'kipfilet of  varkensvlees met speciale Tip Pan pikante saus' },
      { id: 'S10', text: 'Tip Pan gesneden biefstuk', price: 24.10, subtext: 'biefstuk met speciale Tip Pan pikante saus' },
      { id: 'S11', text: 'Tip Pan Cha Siu', price: 24.10, subtext: 'geroosterd varkensvlees met honing' },
      { id: 'S12', text: 'Tip Pan 3 - sterren', price: 23.10, subtext: 'biefstuk, varkenshaas, kipfilet met speciale Tip Pan pikante saus' },
      { id: 'S13', text: 'Tip Pan 5 - sterren', price: 25.10, subtext: 'biefstuk, varkenshaas, kipfilet, tongfilet en garnalen met Tip Pan pikante saus' },
      { id: 'S14', text: 'Tip Pan Babi Pangang Speciaal', price: 24.10, subtext: 'Babi Pangang met speciale pikante saus en groenten' },
    ]
  },
];

