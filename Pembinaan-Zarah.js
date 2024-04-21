const BilProton = document.querySelector('.bilProton');
const BilElectron = document.querySelector('.bilElectron');
const BilNeutron = document.querySelector('.bilNeutron');

const elemen = {
    Hydrogen: { 
      Proton: 1,
      Neutron: 0,
      AtomicMass: 1
    },
     Helium: { 
      Proton: 2,
      Neutron: 2,
      AtomicMass: 4
    },
    Lithium: { 
      Proton: 3,
      Neutron: 4,
      AtomicMass: 7
    },
    Beryllium: { 
      Proton: 4,
      Neutron: 5,
      AtomicMass: 9
    },
    Boron: { 
      Proton: 5,
      Neutron: 5,
      AtomicMass: 10
    },
    Carbon: { 
      Proton: 6,
      Neutron: 6,
      AtomicMass: 12
    },
    Nitrogen: { 
      Proton: 7,
      Neutron: 7,
      AtomicMass: 14
    },
    Oxygen: { 
      Proton: 8,
      Neutron: 8,
      AtomicMass: 16
    },
    Fluorine: { 
      Proton: 9,
      Neutron: 10,
      AtomicMass: 9
    },
    Neon: { 
      Proton: 10,
      Neutron: 10,
      AtomicMass: 20
    },
    Sodium: { 
      Proton: 11,
      Neutron: 12,
      AtomicMass: 23
    },
    Magnesium: { 
      Proton: 12,
      Neutron: 12,
      AtomicMass: 24
    },
    Aluminium: { 
      Proton: 13,
      Neutron: 14,
      AtomicMass: 27
    },
    Silicon: { 
      Proton: 14,
      Neutron: 14,
      AtomicMass: 28
    },
    Phosphorus: { 
      Proton: 15,
      Neutron: 16,
      AtomicMass: 31
    },
    Sulfur: { 
      Proton: 16,
      Neutron: 16,
      AtomicMass: 32
    },
    Chlorine: { 
      Proton: 17,
      Neutron: 18,
      AtomicMass: 35
    },
    Argon: { 
      Proton: 18,
      Neutron: 22,
      AtomicMass: 40
    },
    Potassium: { 
      Proton: 19,
      Neutron: 20,
      AtomicMass: 39
    },
    Calcium: { 
      Proton: 20,
      Neutron: 20,
      AtomicMass: 40
    },
    Scandium: { 
      Proton: 21,
      Neutron: 24,
      AtomicMass: 45
    },
    Titanium: { 
      Proton: 22,
      Neutron: 26,
      AtomicMass: 48
    },
    Vanadium: { 
      Proton: 23,
      Neutron: 28,
      AtomicMass: 51
    },
    Chromium: { 
      Proton: 24,
      Neutron: 28,
      AtomicMass: 52
    },
    Manganese: { 
      Proton: 25,
      Neutron: 30,
      AtomicMass: 55
    },
    Iron: { 
      Proton: 26,
      Neutron: 30,
      AtomicMass: 56
    },
    Cobalt: { 
      Proton: 27,
      Neutron: 32,
      AtomicMass: 59
    },
    Nickel: { 
      Proton: 28,
      Neutron: 31,
      AtomicMass: 59
    },
    Copper: { 
      Proton: 29,
      Neutron: 35,
      AtomicMass: 64
    },
    Zinc: { 
      Proton: 30,
      Neutron: 35,
      AtomicMass: 65
    },
    Gallium: { 
      Proton: 31,
      Neutron: 39,
      AtomicMass: 70
    },
    Germanium: { 
      Proton: 32,
      Neutron: 41,
      AtomicMass: 73
    },
    Arsenic: { 
      Proton: 33,
      Neutron: 42,
      AtomicMass: 75
    },
    Selenium: { 
      Proton: 34,
      Neutron: 45,
      AtomicMass: 79
    },
    Bromine: { 
      Proton: 35,
      Neutron: 45,
      AtomicMass: 80
    },
    Krypton: { 
      Proton: 36,
      Neutron: 48,
      AtomicMass: 84
    },
    Rubidium: { 
      Proton: 37,
      Neutron: 48,
      AtomicMass: 85
    },
    Strontium: { 
      Proton: 38,
      Neutron: 50,
      AtomicMass: 88
    },
    Yttrium: { 
      Proton: 39,
      Neutron: 50,
      AtomicMass: 89
    },
    Zirconium: { 
      Proton: 40,
      Neutron: 51,
      AtomicMass: 91
    },
    Niobium: { 
      Proton: 41,
      Neutron: 52,
      AtomicMass: 93
    },
    Molybdenum: { 
      Proton: 42,
      Neutron: 54,
      AtomicMass: 96
    },
    Technetium: { 
      Proton: 43,
      Neutron: 55,
      AtomicMass: 98
    },
    Ruthenium: { 
      Proton: 44,
      Neutron: 57,
      AtomicMass: 101
    },
    Rhodium: { 
      Proton: 45,
      Neutron: 58,
      AtomicMass: 103
    },
    Palladium: { 
      Proton: 46,
      Neutron: 60,
      AtomicMass: 106
    },
    Silver: { 
      Proton: 47,
      Neutron: 61,
      AtomicMass: 108
    },
    Cadmium: { 
      Proton: 48,
      Neutron: 64,
      AtomicMass: 112
    },
    Indium: { 
      Proton: 49,
      Neutron: 66,
      AtomicMass: 115
    },
    Tin: { 
      Proton: 50,
      Neutron: 69,
      AtomicMass: 119
    },
    Antimony: { 
      Proton: 51,
      Neutron: 71,
      AtomicMass: 122
    },
    Tellurium: { 
      Proton: 52,
      Neutron: 76,
      AtomicMass: 128
    },
    Iodine: { 
      Proton: 53,
      Neutron: 74,
      AtomicMass: 127
    },
    Xenon: { 
      Proton: 54,
      Neutron: 77,
      AtomicMass: 131
    },
    Caesium: { 
      Proton: 55,
      Neutron: 78,
      AtomicMass: 133
    },
    Barium: { 
      Proton: 56,
      Neutron: 81,
      AtomicMass: 137
    },
    Lanthanum: { 
      Proton: 57,
      Neutron: 82,
      AtomicMass: 139
    },
    Cerium: { 
      Proton: 58,
      Neutron: 82,
      AtomicMass: 140
    },
    Praseodymium: { 
      Proton: 59,
      Neutron: 82,
      AtomicMass: 141
    },
    Neodymium: { 
      Proton: 60,
      Neutron: 84,
      AtomicMass: 144
    },
    Promethium: { 
      Proton: 61,
      Neutron: 84,
      AtomicMass: 145
    },
    Samarium: { 
      Proton: 62,
      Neutron: 88,
      AtomicMass: 150
    },
    Europium: { 
      Proton: 63,
      Neutron: 89,
      AtomicMass: 152
    },
    Gadolinium: { 
      Proton: 64,
      Neutron: 93,
      AtomicMass: 157
    },
    Terbium: { 
      Proton: 65,
      Neutron: 94,
      AtomicMass: 159
    },
    Dysprosium: { 
      Proton: 66,
      Neutron: 97,
      AtomicMass: 163
    },
    Holmium: { 
      Proton: 67,
      Neutron: 98,
      AtomicMass: 165
    },
    Erbium: { 
      Proton: 68,
      Neutron: 99,
      AtomicMass: 167
    },
    Thulium: { 
      Proton: 69,
      Neutron: 100,
      AtomicMass: 169
    },
    Ytterbium: { 
      Proton: 70,
      Neutron: 103,
      AtomicMass: 173
    },
    Lutetium: { 
      Proton: 71,
      Neutron: 104,
      AtomicMass: 175
    },
    Hafnium: { 
      Proton: 72,
      Neutron: 106,
      AtomicMass: 178
    },
    Tantalum: { 
      Proton: 73,
      Neutron: 108,
      AtomicMass: 181
    },
    Tungsten: { 
      Proton: 74,
      Neutron: 110,
      AtomicMass: 184
    },
    Rhenium: { 
      Proton: 75,
      Neutron: 111,
      AtomicMass: 186
    },
    Osmium: { 
      Proton: 76,
      Neutron: 114,
      AtomicMass: 190
    },
    Iridium: { 
      Proton: 77,
      Neutron: 115,
      AtomicMass: 192
    },
    Platinum: { 
      Proton: 78,
      Neutron: 117,
      AtomicMass: 195
    },
    Gold: { 
      Proton: 79,
      Neutron: 118,
      AtomicMass: 197
    },
    Mercury: { 
      Proton: 80,
      Neutron: 121,
      AtomicMass: 201
    },
    Thallium: { 
      Proton: 81,
      Neutron: 123,
      AtomicMass: 204
    },
    Lead: { 
      Proton: 82,
      Neutron: 125,
      AtomicMass: 207
    },
    Bismuth: { 
      Proton: 83,
      Neutron: 126,
      AtomicMass: 209
    },
    Polonium: { 
      Proton: 84,
      Neutron: 125,
      AtomicMass: 209
    },
    Astatine: { 
      Proton: 85,
      Neutron: 125,
      AtomicMass: 210
    },
    Radon: { 
      Proton: 86,
      Neutron: 136,
      AtomicMass: 222
    },
    Francium: { 
      Proton: 87,
      Neutron: 136,
      AtomicMass: 223
    },
    Radium: { 
      Proton: 88,
      Neutron: 138,
      AtomicMass: 226
    },
    Actinium: { 
      Proton: 89,
      Neutron: 138,
      AtomicMass: 227
    },
    Thorium: { 
      Proton: 90,
      Neutron: 142,
      AtomicMass: 232
    },
    Protactinium: { 
      Proton: 91,
      Neutron: 140,
      AtomicMass: 231
    },
    Uranium: { 
      Proton: 92,
      Neutron: 146,
      AtomicMass: 238
    },
    Neptunium: { 
      Proton: 93,
      Neutron: 144,
      AtomicMass: 237
    },
    Plutonium: { 
      Proton: 94,
      Neutron: 150,
      AtomicMass: 244
    },
    Americium: { 
      Proton: 95,
      Neutron: 148,
      AtomicMass: 243
    },
    Curium: { 
      Proton: 96,
      Neutron: 151,
      AtomicMass: 247
    },
    Berkelium: { 
      Proton: 97,
      Neutron: 150,
      AtomicMass: 247
    },
    Califormium: { 
      Proton: 98,
      Neutron: 153,
      AtomicMass: 251
    },
    Einsteinium: { 
      Proton: 99,
      Neutron: 153,
      AtomicMass: 252
    },
    Fermium: { 
      Proton: 100,
      Neutron: 157,
      AtomicMass: 257
    },
    Mendelevium: { 
      Proton: 101,
      Neutron: 157,
      AtomicMass: 258
    },
    Nobelium: { 
      Proton: 102,
      Neutron: 157,
      AtomicMass: 259
    },
    Lawrencium: { 
      Proton: 103,
      Neutron: 159,
      AtomicMass: 262
    },
    Rutherfordium: { 
      Proton: 104,
      Neutron: 163,
      AtomicMass: 267
    },
    Dubnium: { 
      Proton: 105,
      Neutron: 157,
      AtomicMass: 262
    },
    Seaborgium: { 
      Proton: 106,
      Neutron: 163,
      AtomicMass: 269
    },
    Bohrium: { 
      Proton: 107,
      Neutron: 157,
      AtomicMass: 264
    },
    Hassium: { 
      Proton: 108,
      Neutron: 161,
      AtomicMass: 269
    },
    Meitnerium: { 
      Proton: 109,
      Neutron: 169,
      AtomicMass: 278
    },
    Darmstadtium: { 
      Proton: 110,
      Neutron: 171,
      AtomicMass: 281
    },
    Roentgenium: { 
      Proton: 111,
      Neutron: 171,
      AtomicMass: 282
    },
    Copernicium: { 
      Proton: 112,
      Neutron: 173,
      AtomicMass: 285
    },
    Nihonium: { 
      Proton: 113,
      Neutron: 173,
      AtomicMass: 286
    },
    Flerovium: { 
      Proton: 114,
      Neutron: 175,
      AtomicMass: 289
    },
    Moscovium: { 
      Proton: 115,
      Neutron: 174,
      AtomicMass: 289
    },
    Livermorium: { 
      Proton: 116,
      Neutron: 177,
      AtomicMass: 293
    },
    Tennessine: { 
      Proton: 117,
      Neutron: 177,
      AtomicMass: 294
    },
    Oganesson: { 
      Proton: 118,
      Neutron: 176,
      AtomicMass: 294
    },
    
  };
console.log(elemen)

function saveValue(event, jenisE) {
  if (event.key === 'Enter') {
    if (jenisE === 'E') {
      jenisElemen('Electron');
    } else if (jenisE === 'P') {
      jenisElemen('Proton')
    } else if (jenisE === 'N') {
      jenisElemen('Neutron')
    }
  }
}

function jenisElemen(elemen) {
  if (elemen === 'Electron') {
    let bilE = Number(BilElectron.value);
    if (bilE <= 118) {
      document.querySelector('.js-bilangan-electron').innerHTML = `Bil.Electron: ${bilE}`;
      calculateAtomicMass();
    } else if (bilE > 118) {
        alert("Tiada zarah elemen yang mempunyai proton/electron lebih dari 118");
    }

  } else if (elemen === 'Proton') {
    let bilP = Number(BilProton.value);
    if (bilP <= 118) {
      document.querySelector('.js-bilangan-proton').innerHTML = `Bil.Proton: ${bilP}`;
      document.querySelector('.state-num-PE').innerHTML = `${bilP}`;
      calculateAtomicMass();
    } else if (bilP > 118) {
        alert("Tiada zarah elemen yang mempunyai proton/electron lebih dari 118");
    }

  } else if (elemen === 'Neutron') {
    let bilN = Number(BilNeutron.value);
    if (bilN <= 177 ) {
      document.querySelector('.js-bilangan-neutron').innerHTML = `Bil.Neutron: ${bilN}`;
      document.querySelector('.atomic-mass').innerHTML = `${bilN}`;
      calculateAtomicMass();
    } else if (bilN > 177) {
        alert("Tiada zarah elemen yang mempunyai neutron lebih dari 177");
    }
  }
}

function calculateAtomicMass() {
  let bilN = Number(BilNeutron.value);
  let bilP = Number(BilProton.value);
  let AtomicMass = bilN + bilP;
  document.querySelector('.js-jumlah-atomicmass').innerHTML = `Atomic-Mass: ${AtomicMass}`;
  state();
  determineElementName();
}

function determineElementName() {
  let bilN = Number(BilNeutron.value);
  let bilP = Number(BilProton.value);
  let AtomicMass = bilN + bilP;

  if (AtomicMass === elemen.Hydrogen.AtomicMass && (bilP === elemen.Hydrogen.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Hydrogen`; document.querySelector('.name-element').innerHTML = `H`;

  } else if (AtomicMass === elemen.Helium.AtomicMass && (bilP === elemen.Helium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Helium`; document.querySelector('.name-element').innerHTML = `He`;

  } else if (AtomicMass === elemen.Lithium.AtomicMass && (bilP === elemen.Lithium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Lithium`; document.querySelector('.name-element').innerHTML = `Li`;

  } else if (AtomicMass === elemen.Beryllium.AtomicMass && (bilP === elemen.Beryllium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Beryllium`; document.querySelector('.name-element').innerHTML = `Be`;

  } else if (AtomicMass === elemen.Boron.AtomicMass && (bilP === elemen.Boron.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Boron`; document.querySelector('.name-element').innerHTML = `B`;

  } else if (AtomicMass === elemen.Carbon.AtomicMass && (bilP === elemen.Carbon.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Carbon`; document.querySelector('.name-element').innerHTML = `C`;

  } else if (AtomicMass === elemen.Nitrogen.AtomicMass && (bilP === elemen.Nitrogen.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Nitrogen`; document.querySelector('.name-element').innerHTML = `N`;

  } else if (AtomicMass === elemen.Oxygen.AtomicMass && (bilP === elemen.Oxygen.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Oxygen`; document.querySelector('.name-element').innerHTML = `O`;

  } else if (AtomicMass === elemen.Fluorine.AtomicMass && (bilP === elemen.Fluorine.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Fluorine`; document.querySelector('.name-element').innerHTML = `F`;

  } else if (AtomicMass === elemen.Neon.AtomicMass && (bilP === elemen.Neon.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Neon`; document.querySelector('.name-element').innerHTML = `Ne`;

  } else if (AtomicMass === elemen.Sodium.AtomicMass && (bilP === elemen.Sodium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Sodium`; document.querySelector('.name-element').innerHTML = `Na`;

  } else if (AtomicMass === elemen.Magnesium.AtomicMass && (bilP === elemen.Magnesium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Magnesium`; document.querySelector('.name-element').innerHTML = `Mg`;

  } else if (AtomicMass === elemen.Aluminium.AtomicMass && (bilP === elemen.Aluminium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Aluminium`; document.querySelector('.name-element').innerHTML = `Al`;

  } else if (AtomicMass === elemen.Silicon.AtomicMass && (bilP === elemen.Silicon.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Silicon`; document.querySelector('.name-element').innerHTML = `Si`;

  } else if (AtomicMass === elemen.Phosphorus.AtomicMass && (bilP === elemen.Phosphorus.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Phosphorus`; document.querySelector('.name-element').innerHTML = `P`;

  } else if (AtomicMass === elemen.Sulfur.AtomicMass && (bilP === elemen.Sulfur.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Sulfur`; document.querySelector('.name-element').innerHTML = `S`;

  } else if (AtomicMass === elemen.Chlorine.AtomicMass && (bilP === elemen.Chlorine.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Chlorine`; document.querySelector('.name-element').innerHTML = `Cl`;

  } else if (AtomicMass === elemen.Argon.AtomicMass && (bilP === elemen.Argon.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Argon`; document.querySelector('.name-element').innerHTML = `Ar`;

  } else if (AtomicMass === elemen.Potassium.AtomicMass && (bilP === elemen.Potassium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Potassium`; document.querySelector('.name-element').innerHTML = `K`;

  } else if (AtomicMass === elemen.Calcium.AtomicMass && (bilP === elemen.Calcium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Calcium`; document.querySelector('.name-element').innerHTML = `Ca`;

  } else if (AtomicMass === elemen.Scandium.AtomicMass && (bilP === elemen.Scandium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Scandium`; document.querySelector('.name-element').innerHTML = `Sc`;

  } else if (AtomicMass === elemen.Titanium.AtomicMass && (bilP === elemen.Titanium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Titanium`; document.querySelector('.name-element').innerHTML = `Ti`;

  } else if (AtomicMass === elemen.Vanadium.AtomicMass && (bilP === elemen.Vanadium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Vanadium`; document.querySelector('.name-element').innerHTML = `V`;

  } else if (AtomicMass === elemen.Chromium.AtomicMass && (bilP === elemen.Chromium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Chromium`; document.querySelector('.name-element').innerHTML = `Cr`;

  } else if (AtomicMass === elemen.Manganese.AtomicMass && (bilP === elemen.Manganese.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Manganese`; document.querySelector('.name-element').innerHTML = `Mn`;

  } else if (AtomicMass === elemen.Iron.AtomicMass && (bilP === elemen.Iron.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Iron`; document.querySelector('.name-element').innerHTML = `Fe`;

  } else if (AtomicMass === elemen.Cobalt.AtomicMass && (bilP === elemen.Cobalt.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Cobalt`; document.querySelector('.name-element').innerHTML = `Co`;

  } else if (AtomicMass === elemen.Nickel.AtomicMass && (bilP === elemen.Nickel.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Nickel`; document.querySelector('.name-element').innerHTML = `Ni`;

  } else if (AtomicMass === elemen.Copper.AtomicMass && (bilP === elemen.Copper.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Copper`; document.querySelector('.name-element').innerHTML = `Cu`;

  } else if (AtomicMass === elemen.Zinc.AtomicMass && (bilP === elemen.Zinc.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Zinc`; document.querySelector('.name-element').innerHTML = `Zn`;

  } else if (AtomicMass === elemen.Gallium.AtomicMass && (bilP === elemen.Gallium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Gallium`; document.querySelector('.name-element').innerHTML = `Ga`;

  } else if (AtomicMass === elemen.Germanium.AtomicMass && (bilP === elemen.Germanium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Germanium`; document.querySelector('.name-element').innerHTML = `Ge`;

  } else if (AtomicMass === elemen.Arsenic.AtomicMass && (bilP === elemen.Arsenic.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Arsenic`; document.querySelector('.name-element').innerHTML = `As`;

  } else if (AtomicMass === elemen.Selenium.AtomicMass && (bilP === elemen.Selenium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Selenium`; document.querySelector('.name-element').innerHTML = `Se`;

  } else if (AtomicMass === elemen.Bromine.AtomicMass && (bilP === elemen.Bromine.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Bromine`; document.querySelector('.name-element').innerHTML = `Br`;

  } else if (AtomicMass === elemen.Krypton.AtomicMass && (bilP === elemen.Krypton.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Krypton`; document.querySelector('.name-element').innerHTML = `Kr`;

  } else if (AtomicMass === elemen.Rubidium.AtomicMass && (bilP === elemen.Rubidium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Rubidium`; document.querySelector('.name-element').innerHTML = `Rb`;

  } else if (AtomicMass === elemen.Strontium.AtomicMass && (bilP === elemen.Strontium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Strontium`; document.querySelector('.name-element').innerHTML = `Sr`;

  } else if (AtomicMass === elemen.Yttrium.AtomicMass && (bilP === elemen.Yttrium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Yttrium`; document.querySelector('.name-element').innerHTML = `Y`;

  } else if (AtomicMass === elemen.Zirconium.AtomicMass && (bilP === elemen.Zirconium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Zirconium`; document.querySelector('.name-element').innerHTML = `Zr`;

  } else if (AtomicMass === elemen.Niobium.AtomicMass && (bilP === elemen.Niobium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Niobium`; document.querySelector('.name-element').innerHTML = `Nb`;

  } else if (AtomicMass === elemen.Molybdenum.AtomicMass && (bilP === elemen.Molybdenum.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Molybdenum`; document.querySelector('.name-element').innerHTML = `Mo`;

  } else if (AtomicMass === elemen.Technetium.AtomicMass && (bilP === elemen.Technetium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Technetium`; document.querySelector('.name-element').innerHTML = `Tc`;

  } else if (AtomicMass === elemen.Ruthenium.AtomicMass && (bilP === elemen.Ruthenium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Ruthenium`; document.querySelector('.name-element').innerHTML = `Ru`;

  } else if (AtomicMass === elemen.Rhodium.AtomicMass && (bilP === elemen.Rhodium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Rhodium`; document.querySelector('.name-element').innerHTML = `Rh`;

  } else if (AtomicMass === elemen.Palladium.AtomicMass && (bilP === elemen.Palladium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Palladium`; document.querySelector('.name-element').innerHTML = `Pd`;

  } else if (AtomicMass === elemen.Silver.AtomicMass && (bilP === elemen.Silver.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Silver`; document.querySelector('.name-element').innerHTML = `Ag`;

  } else if (AtomicMass === elemen.Cadmium.AtomicMass && (bilP === elemen.Cadmium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Cadmium`; document.querySelector('.name-element').innerHTML = `Cd`;

  } else if (AtomicMass === elemen.Indium.AtomicMass && (bilP === elemen.Indium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Indium`; document.querySelector('.name-element').innerHTML = `In`;

  } else if (AtomicMass === elemen.Tin.AtomicMass && (bilP === elemen.Tin.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Tin`; document.querySelector('.name-element').innerHTML = `Sn`;

  } else if (AtomicMass === elemen.Antimony.AtomicMass && (bilP === elemen.Antimony.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Antimony`; document.querySelector('.name-element').innerHTML = `Sb`;

  } else if (AtomicMass === elemen.Tellurium.AtomicMass && (bilP === elemen.Tellurium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Tellurium`; document.querySelector('.name-element').innerHTML = `Te`;

  } else if (AtomicMass === elemen.Iodine.AtomicMass && (bilP === elemen.Iodine.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Iodine`; document.querySelector('.name-element').innerHTML = `I`;

  } else if (AtomicMass === elemen.Xenon.AtomicMass && (bilP === elemen.Xenon.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Xenon`; document.querySelector('.name-element').innerHTML = `Xe`;

  } else if (AtomicMass === elemen.Caesium.AtomicMass && (bilP === elemen.Caesium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Caesium`; document.querySelector('.name-element').innerHTML = `Cs`;

  } else if (AtomicMass === elemen.Barium.AtomicMass && (bilP === elemen.Barium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Barium`; document.querySelector('.name-element').innerHTML = `Ba`;

  } else if (AtomicMass === elemen.Lanthanum.AtomicMass && (bilP === elemen.Lanthanum.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Lanthanum`; document.querySelector('.name-element').innerHTML = `La`;

  } else if (AtomicMass === elemen.Cerium.AtomicMass && (bilP === elemen.Cerium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Cerium`; document.querySelector('.name-element').innerHTML = `Ce`;

  } else if (AtomicMass === elemen.Praseodymium.AtomicMass && (bilP === elemen.Praseodymium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Praseodymium`; document.querySelector('.name-element').innerHTML = `Pr`;

  } else if (AtomicMass === elemen.Neodymium.AtomicMass && (bilP === elemen.Neodymium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Neodymium`; document.querySelector('.name-element').innerHTML = `Nd`;

  } else if (AtomicMass === elemen.Promethium.AtomicMass && (bilP === elemen.Promethium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Promethium`; document.querySelector('.name-element').innerHTML = `Pm`;

  } else if (AtomicMass === elemen.Samarium.AtomicMass && (bilP === elemen.Samarium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Samarium`; document.querySelector('.name-element').innerHTML = `Sm`;

  } else if (AtomicMass === elemen.Europium.AtomicMass && (bilP === elemen.Europium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Europium`; document.querySelector('.name-element').innerHTML = `Eu`;

  } else if (AtomicMass === elemen.Gadolinium.AtomicMass && (bilP === elemen.Gadolinium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Gadolinium`; document.querySelector('.name-element').innerHTML = `Gd`;

  } else if (AtomicMass === elemen.Terbium.AtomicMass && (bilP === elemen.Terbium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Terbium`; document.querySelector('.name-element').innerHTML = `Tb`;

  } else if (AtomicMass === elemen.Dysprosium.AtomicMass && (bilP === elemen.Dysprosium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Dysprosium`; document.querySelector('.name-element').innerHTML = `Dy`;

  } else if (AtomicMass === elemen.Holmium.AtomicMass && (bilP === elemen.Holmium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Holmium`; document.querySelector('.name-element').innerHTML = `Ho`;

  } else if (AtomicMass === elemen.Erbium.AtomicMass && (bilP === elemen.Erbium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Erbium`; document.querySelector('.name-element').innerHTML = `Er`;

  } else if (AtomicMass === elemen.Thulium.AtomicMass && (bilP === elemen.Thulium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Thulium`; document.querySelector('.name-element').innerHTML = `Tm`;

  } else if (AtomicMass === elemen.Ytterbium.AtomicMass && (bilP === elemen.Ytterbium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Ytterbium`; document.querySelector('.name-element').innerHTML = `Yb`;

  } else if (AtomicMass === elemen.Lutetium.AtomicMass && (bilP === elemen.Lutetium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Lutetium`; document.querySelector('.name-element').innerHTML = `Lu`;

  } else if (AtomicMass === elemen.Hafnium.AtomicMass && (bilP === elemen.Hafnium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Hafnium`; document.querySelector('.name-element').innerHTML = `Hf`;

  } else if (AtomicMass === elemen.Tantalum.AtomicMass && (bilP === elemen.Tantalum.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Tantalum`; document.querySelector('.name-element').innerHTML = `Ta`;

  } else if (AtomicMass === elemen.Tungsten.AtomicMass && (bilP === elemen.Tungsten.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Tungsten`; document.querySelector('.name-element').innerHTML = `W`;

  } else if (AtomicMass === elemen.Rhenium.AtomicMass && (bilP === elemen.Rhenium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Rhenium`; document.querySelector('.name-element').innerHTML = `Re`;

  } else if (AtomicMass === elemen.Osmium.AtomicMass && (bilP === elemen.Osmium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Osmium`; document.querySelector('.name-element').innerHTML = `Os`;

  } else if (AtomicMass === elemen.Iridium.AtomicMass && (bilP === elemen.Iridium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Iridium`; document.querySelector('.name-element').innerHTML = `Ir`;

  } else if (AtomicMass === elemen.Platinum.AtomicMass && (bilP === elemen.Platinum.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Platinum`; document.querySelector('.name-element').innerHTML = `Pt`;

  } else if (AtomicMass === elemen.Gold.AtomicMass && (bilP === elemen.Gold.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Gold`; document.querySelector('.name-element').innerHTML = `Au`;

  } else if (AtomicMass === elemen.Mercury.AtomicMass && (bilP === elemen.Mercury.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Mercury`; document.querySelector('.name-element').innerHTML = `Hg`;

  } else if (AtomicMass === elemen.Thallium.AtomicMass && (bilP === elemen.Thallium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Thallium`; document.querySelector('.name-element').innerHTML = `Tl`;

  } else if (AtomicMass === elemen.Lead.AtomicMass && (bilP === elemen.Lead.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Lead`; document.querySelector('.name-element').innerHTML = `Pb`;

  } else if (AtomicMass === elemen.Bismuth.AtomicMass && (bilP === elemen.Bismuth.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Bismuth`; document.querySelector('.name-element').innerHTML = `Bi`;

  } else if (AtomicMass === elemen.Polonium.AtomicMass && (bilP === elemen.Polonium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Polonium`; document.querySelector('.name-element').innerHTML = `Po`;

  } else if (AtomicMass === elemen.Astatine.AtomicMass && (bilP === elemen.Astatine.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Astatine`; document.querySelector('.name-element').innerHTML = `At`;

  } else if (AtomicMass === elemen.Radon.AtomicMass && (bilP === elemen.Radon.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Radon`; document.querySelector('.name-element').innerHTML = `Rn`;

  } else if (AtomicMass === elemen.Francium.AtomicMass && (bilP === elemen.Francium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Francium`; document.querySelector('.name-element').innerHTML = `Fr`;

  } else if (AtomicMass === elemen.Radium.AtomicMass && (bilP === elemen.Radium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Radium`; document.querySelector('.name-element').innerHTML = `Ra`;

  } else if (AtomicMass === elemen.Actinium.AtomicMass && (bilP === elemen.Actinium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Actinium`; document.querySelector('.name-element').innerHTML = `Ac`;

  } else if (AtomicMass === elemen.Thorium.AtomicMass && (bilP === elemen.Thorium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Thorium`; document.querySelector('.name-element').innerHTML = `Th`;

  } else if (AtomicMass === elemen.Protactinium.AtomicMass && (bilP === elemen.Protactinium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Protactinium`; document.querySelector('.name-element').innerHTML = `Pa`;

  } else if (AtomicMass === elemen.Uranium.AtomicMass && (bilP === elemen.Uranium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Uranium`; document.querySelector('.name-element').innerHTML = `U`;

  } else if (AtomicMass === elemen.Neptunium.AtomicMass && (bilP === elemen.Neptunium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Neptunium`; document.querySelector('.name-element').innerHTML = `Np`;

  } else if (AtomicMass === elemen.Plutonium.AtomicMass && (bilP === elemen.Plutonium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Plutonium`; document.querySelector('.name-element').innerHTML = `Pu`;

  } else if (AtomicMass === elemen.Americium.AtomicMass && (bilP === elemen.Americium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Americium`; document.querySelector('.name-element').innerHTML = `Am`;

  } else if (AtomicMass === elemen.Curium.AtomicMass && (bilP === elemen.Curium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Curium`; document.querySelector('.name-element').innerHTML = `Cm`;

  } else if (AtomicMass === elemen.Berkelium.AtomicMass && (bilP === elemen.Berkelium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Berkelium`; document.querySelector('.name-element').innerHTML = `Bk`;

  } else if (AtomicMass === elemen.Califormium.AtomicMass && (bilP === elemen.Califormium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Califormium`; document.querySelector('.name-element').innerHTML = `Cf`;

  } else if (AtomicMass === elemen.Einsteinium.AtomicMass && (bilP === elemen.Einsteinium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Einsteinium`; document.querySelector('.name-element').innerHTML = `Es`;

  } else if (AtomicMass === elemen.Fermium.AtomicMass && (bilP === elemen.Fermium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Fermium`; document.querySelector('.name-element').innerHTML = `Fm`;

  } else if (AtomicMass === elemen.Mendelevium.AtomicMass && (bilP === elemen.Mendelevium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Mendelevium`; document.querySelector('.name-element').innerHTML = `Md`;

  } else if (AtomicMass === elemen.Nobelium.AtomicMass && (bilP === elemen.Nobelium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Nobelium`; document.querySelector('.name-element').innerHTML = `No`;

  } else if (AtomicMass === elemen.Lawrencium.AtomicMass && (bilP === elemen.Lawrencium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Lawrencium`; document.querySelector('.name-element').innerHTML = `Lr`;

  } else if (AtomicMass === elemen.Rutherfordium.AtomicMass && (bilP === elemen.Rutherfordium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Rutherfordium`; document.querySelector('.name-element').innerHTML = `Rf`;

  } else if (AtomicMass === elemen.Dubnium.AtomicMass && (bilP === elemen.Dubnium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Dubnium`; document.querySelector('.name-element').innerHTML = `Db`;

  } else if (AtomicMass === elemen.Seaborgium.AtomicMass && (bilP === elemen.Seaborgium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Seaborgium`; document.querySelector('.name-element').innerHTML = `Sg`;

  } else if (AtomicMass === elemen.Bohrium.AtomicMass && (bilP === elemen.Bohrium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Bohrium`; document.querySelector('.name-element').innerHTML = `Bh`;

  } else if (AtomicMass === elemen.Hassium.AtomicMass && (bilP === elemen.Hassium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Hassium`; document.querySelector('.name-element').innerHTML = `Hs`;

  } else if (AtomicMass === elemen.Meitnerium.AtomicMass && (bilP === elemen.Meitnerium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Meitnerium`; document.querySelector('.name-element').innerHTML = `Mt`;

  } else if (AtomicMass === elemen.Darmstadtium.AtomicMass && (bilP === elemen.Darmstadtium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Darmstadtium`; document.querySelector('.name-element').innerHTML = `Ds`;

  } else if (AtomicMass === elemen.Roentgenium.AtomicMass && (bilP === elemen.Roentgenium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Roentgenium`; document.querySelector('.name-element').innerHTML = `Rg`;

  } else if (AtomicMass === elemen.Copernicium.AtomicMass && (bilP === elemen.Copernicium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Copernicium`; document.querySelector('.name-element').innerHTML = `Cn`;

  } else if (AtomicMass === elemen.Nihonium.AtomicMass && (bilP === elemen.Nihonium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Nihonium`; document.querySelector('.name-element').innerHTML = `Nh`;

  } else if (AtomicMass === elemen.Flerovium.AtomicMass && (bilP === elemen.Flerovium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Flerovium`; document.querySelector('.name-element').innerHTML = `Fl`;

  } else if (AtomicMass === elemen.Moscovium.AtomicMass && (bilP === elemen.Moscovium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Moscovium`; document.querySelector('.name-element').innerHTML = `Mc`;

  } else if (AtomicMass === elemen.Livermorium.AtomicMass && (bilP === elemen.Livermorium.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Livermorium`; document.querySelector('.name-element').innerHTML = `Lv`;

  } else if (AtomicMass === elemen.Tennessine.AtomicMass && (bilP === elemen.Tennessine.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Tennessine`; document.querySelector('.name-element').innerHTML = `Ts`;

  } else if (AtomicMass === elemen.Oganesson.AtomicMass && (bilP === elemen.Oganesson.Proton)) {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: Oganesson`; document.querySelector('.name-element').innerHTML = `Og`;

  } else {
    document.querySelector('.js-nama-elemen').innerHTML = `Nama: -`; document.querySelector('.name-element').innerHTML = `-`;
  }
}

function state() {
  let bilE = Number(BilElectron.value);
  let bilP = Number(BilProton.value);
  if (bilP > bilE) {
    document.querySelector('.state').innerHTML = `&#160 +ion`;
  } else if (bilE > bilP) {
    document.querySelector('.state').innerHTML = `&#160 -ion`;
  } else {
    document.querySelector('.state').innerHTML = `Neutral`;
  }
}