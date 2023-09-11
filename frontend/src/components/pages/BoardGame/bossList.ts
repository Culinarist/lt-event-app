export const bossList = () => {
  let bosses = [
    'Barrows',
    'Giant Mole',
    'Deranged Archaeologist',
    'Dagannoth Kings',
    'Sarachnis',
    'Kalphite Queen',
    "Kree'arra",
    'Commander Zilyana',
    'General Graardor',
    "K'ril Tsutsaroth",
    'Corporeal Beast',
    'Nex',
    'Chaos Fanatic',
    'Crazy Archaeologist',
    'Scorpia',
    'King Black Dragon',
    'Chaos Elemenatal',
    'Revenant maledictus',
    "Calvar'ion & Vet'ion",
    'Spindel & Venenatis',
    'Artio & Callisto',
    'Zulrah',
    'Vorkath',
    'Phantom Mustpah',
    "The Nightmare & Phosani's Nightmare",
    'Duke Sucellus',
    'The Leviathan',
    'The Whisperer',
    'Vardorvis',
    'Obor',
    'Bryophyta',
    'The Mimic',
    'Hespori',
    'Skotizo',
    'Grotesque Guardians',
    'Abyssal Sire',
    'Kraken',
    'Cerberus',
    'Thermonuclear smoke devil',
    'Alchemical Hydra',
    'Crystalline Hunllef',
    'Corrupted Hunllef',
    'TzTok-Jad',
    'TzKal-Zuk',
    'Tempoross',
    'Wintertodt',
    'Zalcano',
    'Chambers of Xeric',
    'Theatre of Blood',
    'Tombs of Amascut',
  ];

  const bossArray = bosses.sort().map((name: string, idx: number) => [{ name, id: idx }]);
  console.log(bossArray);
  return bossArray;
};
