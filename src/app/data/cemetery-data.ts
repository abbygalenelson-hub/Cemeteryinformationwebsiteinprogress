export interface Person {
  id: string;
  name: string;
  deathYear: number | null;
  ageAtDeath: number | null;
  plotId: string;
  relationships: {
    type: 'spouse' | 'child of' | 'parent of' | 'sibling';
    personId: string;
  }[];
  // Additional roster fields
  familyKinshipGroup?: string;
  gravestoneType?: string;
  materialCondition?: string;
  gprStatus?: string;
  researchConfidence?: string;
  notes?: string;
  image?: string;
  imageDescription?: string;
}

export interface Plot {
  id: string;
  number: string;
  section?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  occupants: string[];
}

export const plots: Plot[] = [
{ id: 'p1', number: '28', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per31'] },
{ id: 'p2', number: '27a', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per30'] },
{ id: 'p3', number: '40', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per40', 'per41'] },
{ id: 'p4', number: '27b', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per29'] },
{ id: 'p5', number: '84', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per79', 'per80'] },
{ id: 'p6', number: '76', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per71', 'per72'] },
{ id: 'p7', number: '83', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per78'] },
{ id: 'p8', number: '61', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per56'] },
{ id: 'p9', number: '39', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per38', 'per39'] },
{ id: 'p10', number: '68', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per63', 'per64', 'per65'] },
{ id: 'p11', number: '26', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per28'] },
{ id: 'p12', number: '75', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per70'] },
{ id: 'p13', number: '60', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per55'] },
{ id: 'p14', number: '58', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per54'] },
{ id: 'p15', number: '67', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per62'] },
{ id: 'p16', number: '25', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per26', 'per27'] },
{ id: 'p17', number: '57', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per53'] },
{ id: 'p18', number: '24', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per25'] },
{ id: 'p19', number: '74', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per69'] },
{ id: 'p20', number: '35', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per37'] },
{ id: 'p21', number: '66', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per60', 'per61'] },
{ id: 'p22', number: '23', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per24'] },
{ id: 'p23', number: '33', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per36'] },
{ id: 'p24', number: '9', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per12', 'per13'] },
{ id: 'p25', number: '81', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per76', 'per77'] },
{ id: 'p26', number: '8', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per11'] },
{ id: 'p27', number: '32', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per35'] },
{ id: 'p28', number: '7', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per10'] },
{ id: 'p29', number: '73', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per66', 'per67', 'per68'] },
{ id: 'p30', number: '56', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per51', 'per52'] },
{ id: 'p31', number: '31', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per34'] },
{ id: 'p32', number: '65', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per59'] },
{ id: 'p33', number: '30', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per33'] },
{ id: 'p34', number: '6', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per7', 'per8', 'per9'] },
{ id: 'p35', number: '64', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per57', 'per58'] },
{ id: 'p36', number: '18', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per22', 'per23'] },
{ id: 'p37', number: '94', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per92'] },
{ id: 'p38', number: '47', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per49', 'per50'] },
{ id: 'p39', number: '91', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per87', 'per88', 'per89'] },
{ id: 'p40', number: '5', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per6'] },
{ id: 'p41', number: '80', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per75'] },
{ id: 'p42', number: '29', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per32'] },
{ id: 'p43', number: '90', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per86'] },
{ id: 'p44', number: '79', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per74'] },
{ id: 'p45', number: '89', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per85'] },
{ id: 'p46', number: '86', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per81'] },
{ id: 'p47', number: '93', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per91'] },
{ id: 'p48', number: '88', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per83', 'per84'] },
{ id: 'p49', number: '92', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per90'] },
{ id: 'p50', number: '77', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per73'] },
{ id: 'p51', number: 'E', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per118', 'per119'] },
{ id: 'p52', number: '87', section: 'Back', x: 0, y: 0, width: 0, height: 0, occupants: ['per82'] },
{ id: 'p53', number: '4', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per4', 'per5'] },
{ id: 'p54', number: '15', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per18', 'per19', 'per20', 'per21'] },
{ id: 'p55', number: '3', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per3'] },
{ id: 'p56', number: 'B', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per114', 'per115'] },
{ id: 'p57', number: 'A', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per112', 'per113'] },
{ id: 'p58', number: 'F', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per120', 'per121', 'per122'] },
{ id: 'p59', number: 'C', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per116'] },
{ id: 'p60', number: 'D', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per117'] },
{ id: 'p61', number: '14', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per16', 'per17'] },
{ id: 'p62', number: '2', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per2'] },
{ id: 'p63', number: '1', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per1'] },
{ id: 'p64', number: '44', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per47', 'per48'] },
{ id: 'p65', number: '11', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per15'] },
{ id: 'p66', number: '96', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per94'] },
{ id: 'p67', number: '95', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per93'] },
{ id: 'p68', number: '100', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per110', 'per111'] },
{ id: 'p69', number: '98', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per95', 'per96', 'per97', 'per98', 'per99', 'per100', 'per101'] },
{ id: 'p70', number: '10', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per14'] },
{ id: 'p71', number: '99', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per102', 'per103', 'per104', 'per105', 'per106', 'per107', 'per108', 'per109'] },
{ id: 'p72', number: '43', section: 'Front', x: 0, y: 0, width: 0, height: 0, occupants: ['per42', 'per43', 'per44', 'per45', 'per46'] },
{ id: 'pUNK', number: 'UNK', section: 'Unknown', x: 0, y: 0, width: 0, height: 0, occupants: ['per123'] }
];

export const people: Person[] = [
  {
    id: 'per1',
    name: 'James Collins',
    deathYear: 1875,
    ageAtDeath: 34,
    plotId: 'p63',
    relationships: [
      { type: 'sibling', personId: 'per22' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'James Collins was from Devonshire, England, and died March 6, 1875, aged 34 years. His marker identifies him as “a native of Devonshire, England,” but the stone is now broken and pieces are missing, including part or all of the name. He does not appear to be related to the Jabez Collins family, but he is related to William Dennis Collins, as they were brothers.\n\nThere is some confusion around his wife and children. Earlier research suggested a James Collins born in Devon around 1840 whose life was marked by repeated loss: his wife Rebecca died in 1873 at age 23, only months after their twin daughters were born, and in 1874 one of the daughters, one-year-old Edith, also died. I have not been able to find what happened to the other twin, Edna. However, newer evidence points instead to his wife being Melinda Lacey, who died in 1873. There is also a Find a Grave memorial for Melinda Collins, and a previous mention of twin children named Edna and Ellen. Their birth record, however, lists the parents as Richard and Melinda Tracey. This may be a recording or hearing error, since Melinda Tracey also died in 1873 and her husband is listed as J. Collins. It is possible that “Tracey” was misheard or miswritten, or that someone else, perhaps Richard Collins, registered the birth.\n\nJames Collins is described as a Bible Christian minister in his 1872 marriage record to Melinda, which complicates his burial in a Wesleyan Methodist cemetery, especially because the Bible Christian and Methodist amalgamation did not occur until 1883. A Richard Collins is later described as a Sunday school teacher from 1881 to after 1883 at the Stone Church on Thomas Adams’s property. This raises several questions: was the Stone Church connected to James or his family? Did it actually have no cemetery of its own? And if James was Bible Christian rather than Wesleyan Methodist, why was he buried at Highland Creek Wesleyan Cemetery?'
  },
  {
    id: 'per2',
    name: 'Annie Electa Woodruff',
    deathYear: 1872,
    ageAtDeath: 6,
    plotId: 'p62',
    relationships: [],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS AE 6y 11m 24d - matches. Father was Lorne Woodruff, who was grandson of Hawkins Woodruff. Hawkins Woodruff was nephew of Melinda Woodruff Post. Mother was Desdemona Cornell, daughter of Calvin Cornell and his wife Melinda Post.'
  },
  {
    id: 'per3',
    name: 'Edith Lanktree',
    deathYear: 1872,
    ageAtDeath: 1,
    plotId: 'p55',
    relationships: [
      { type: 'sibling', personId: 'per4' },
      { type: 'sibling', personId: 'per5' }
    ],
    familyKinshipGroup: 'Henry & Eleanor Lanktree',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS AE 16 months - matches. Also spelt Langtree. Sister to George and James Lanktree. Eleanor and Henry Lanktree are listed as wesleyan methodists in 1871 census'
  },
  {
    id: 'per4',
    name: 'George Roberts Lanktree',
    deathYear: 1866,
    ageAtDeath: 1,
    plotId: 'p53',
    relationships: [
      { type: 'sibling', personId: 'per3' },
      { type: 'sibling', personId: 'per5' }
    ],
    familyKinshipGroup: 'Henry & Eleanor Lanktree',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: d. Aug. 28, 1866, George Robert d. Aug 28, 1866 ac 1. 11. 10., children of Henry & Eleanor LANKTREE.'
  },
  {
    id: 'per5',
    name: 'James Liam Lanktree',
    deathYear: 1866,
    ageAtDeath: 3,
    plotId: 'p53',
    relationships: [
      { type: 'sibling', personId: 'per3' },
      { type: 'sibling', personId: 'per4' }
    ],
    familyKinshipGroup: 'Henry & Eleanor Lanktree',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: James Liam d. Aug 31, 1866 ae 3. 3. 26'
  },
  {
    id: 'per6',
    name: 'John Greenfield',
    deathYear: 1852,
    ageAtDeath: 23,
    plotId: 'p40',
    relationships: [],
    familyKinshipGroup: 'Greenfield (Singleton)',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Uncertain',
    notes: 'OGS: \'Here lies the remains of John GREENFIELD d 1852 AE 23\' - matches. Might be actually named William Greenfield.'
  },
  {
    id: 'per7',
    name: 'Elizabeth Fawcett Wallace',
    deathYear: 1905,
    ageAtDeath: 66,
    plotId: 'p34',
    relationships: [
      { type: 'child of', personId: 'per8' },
      { type: 'child of', personId: 'per9' }
    ],
    familyKinshipGroup: 'William Fawcett & Jane Armstrong',
    gravestoneType: 'monument',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: ''
  },
  {
    id: 'per8',
    name: 'Jane Armstrong Fawcett',
    deathYear: 1868,
    ageAtDeath: 70,
    plotId: 'p34',
    relationships: [
      { type: 'parent of', personId: 'per7' },
      { type: 'spouse', personId: 'per9' }
    ],
    familyKinshipGroup: 'William Fawcett & Jane Armstrong',
    gravestoneType: 'monument',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'OGS stone gives no maiden; FaG adds. Doesn\'t seem to be related to william or ann armstrong.'
  },
  {
    id: 'per9',
    name: 'William Fawcett',
    deathYear: 1872,
    ageAtDeath: 72,
    plotId: 'p34',
    relationships: [
      { type: 'parent of', personId: 'per7' },
      { type: 'spouse', personId: 'per8' }
    ],
    familyKinshipGroup: 'William Fawcett & Jane Armstrong',
    gravestoneType: 'monument',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'him and jane armstrong fawcett are parents of mary fawcett white and elizabeth fawcett wallace'
  },
  {
    id: 'per10',
    name: 'Mary Robinson White',
    deathYear: 1856,
    ageAtDeath: 31,
    plotId: 'p28',
    relationships: [],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'OGS widow of Thomas, blacksmith d 5 Jun 1856. Likely mary fawcett white. Robinson could be middle name or married name'
  },
  {
    id: 'per11',
    name: 'Thomas White',
    deathYear: 1852,
    ageAtDeath: 36,
    plotId: 'p26',
    relationships: [
      { type: 'child of', personId: 'per24' },
      { type: 'parent of', personId: 'per28' },
      { type: 'parent of', personId: 'per29' },
      { type: 'parent of', personId: 'per99' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'Thomas WHITE, d. Aug. 10, 1852 AE 36.'
  },
  {
    id: 'per12',
    name: 'Jane White',
    deathYear: 1849,
    ageAtDeath: 0,
    plotId: 'p24',
    relationships: [],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'Jane, dau. of Thomas & Mary WHITE, d. May 1849, AE 8 months,'
  },
  {
    id: 'per13',
    name: 'William White',
    deathYear: 1851,
    ageAtDeath: 0,
    plotId: 'p24',
    relationships: [],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'William WHITE, d. Mar. 28, 1851, AE 6 months. Son of Thomas and Mary White'
  },
  {
    id: 'per14',
    name: 'Alfretta Bennett',
    deathYear: 1893,
    ageAtDeath: 0,
    plotId: 'p70',
    relationships: [],
    familyKinshipGroup: 'John Karr & Elizabeth Woodruff',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: "Alfretta, dau. of William & Mary BENNETT, d 15 Jan 1893 AE 7 mths" - only Bennett. Related to the Kerr/Karr family. Mother is mary kerr daughter of carlton luther kerr, son of John Kerr and Elizabeth Woodruff'
  },
  {
    id: 'per15',
    name: 'Jessie Bell Taylor',
    deathYear: 1893,
    ageAtDeath: 0,
    plotId: 'p65',
    relationships: [],
    familyKinshipGroup: 'John Taylor & Mary Clark',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Uncertain',
    notes: 'familysearch confirms name and date of death: Death Date: 27 Jan 1893. OGS: AE 4 months and 27 days. Died from old school diaper rash. Listed as episcopalian.'
  },
  {
    id: 'per16',
    name: 'Edward Littlejohns',
    deathYear: 1887,
    ageAtDeath: 77,
    plotId: 'p61',
    relationships: [
      { type: 'spouse', personId: 'per17' }
    ],
    familyKinshipGroup: 'Littlejohns (Singleton)',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: d 4 Feb 1887 AE 77'
  },
  {
    id: 'per17',
    name: 'Ann Knight Littlejohns',
    deathYear: 1903,
    ageAtDeath: 83,
    plotId: 'p61',
    relationships: [
      { type: 'spouse', personId: 'per16' }
    ],
    familyKinshipGroup: 'Littlejohns (Singleton)',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: wife of Edward d 25 Aug 1903 AE 83 - matches'
  },
  {
    id: 'per18',
    name: 'Rhoda Olive Reed',
    deathYear: 1890,
    ageAtDeath: 2,
    plotId: 'p54',
    relationships: [
      { type: 'child of', personId: 'per20' },
      { type: 'child of', personId: 'per21' },
      { type: 'sibling', personId: 'per19' }
    ],
    familyKinshipGroup: 'John Karr & Elizabeth Woodruff',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS child - matches'
  },
  {
    id: 'per19',
    name: 'Lorne Garfield Reed',
    deathYear: 1892,
    ageAtDeath: 8,
    plotId: 'p54',
    relationships: [
      { type: 'child of', personId: 'per20' },
      { type: 'child of', personId: 'per21' },
      { type: 'sibling', personId: 'per18' }
    ],
    familyKinshipGroup: 'John Karr & Elizabeth Woodruff',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS child entry - matches'
  },
  {
    id: 'per20',
    name: 'Nahum Goodwin Reed',
    deathYear: 1920,
    ageAtDeath: 84,
    plotId: 'p54',
    relationships: [
      { type: 'parent of', personId: 'per18' },
      { type: 'parent of', personId: 'per19' },
      { type: 'spouse', personId: 'per21' }
    ],
    familyKinshipGroup: 'John Karr & Elizabeth Woodruff',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS 1835-1920 - matches'
  },
  {
    id: 'per21',
    name: 'Sarah Jane Kerr Reed',
    deathYear: 1930,
    ageAtDeath: 86,
    plotId: 'p54',
    relationships: [
      { type: 'parent of', personId: 'per18' },
      { type: 'parent of', personId: 'per19' },
      { type: 'spouse', personId: 'per20' }
    ],
    familyKinshipGroup: 'John Karr & Elizabeth Woodruff',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS wife entry - matches. Daughter of Carlton Luther Kerr Sr, son of John and Elizabeth Karr. Mother of lorne and rhoda olive reed'
  },
  {
    id: 'per22',
    name: 'William Denis Collins',
    deathYear: 1911,
    ageAtDeath: 72,
    plotId: 'p36',
    relationships: [
      { type: 'sibling', personId: 'per1' },
      { type: 'spouse', personId: 'per23' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'OGS: 1839-1911 - matches'
  },
  {
    id: 'per23',
    name: 'Annie White Collins',
    deathYear: 1933,
    ageAtDeath: 81,
    plotId: 'p36',
    relationships: [
      { type: 'spouse', personId: 'per22' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'granddaughter of annie wailes white through thomas white and mary fawcett white'
  },
  {
    id: 'per24',
    name: 'Ann Wailes White',
    deathYear: 1855,
    ageAtDeath: 76,
    plotId: 'p22',
    relationships: [
      { type: 'parent of', personId: 'per11' },
      { type: 'parent of', personId: 'per28' },
      { type: 'parent of', personId: 'per29' },
      { type: 'parent of', personId: 'per99' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'OGS wife of Thomas White d 10 Apr 1855 AE 76. mother of Thomas White (died 1852).'
  },
  {
    id: 'per25',
    name: 'John White',
    deathYear: 1884,
    ageAtDeath: 30,
    plotId: 'p18',
    relationships: [
      { type: 'child of', personId: 'per30' },
      { type: 'sibling', personId: 'per26' },
      { type: 'sibling', personId: 'per27' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'John WHITE, d. Feb. 20, 1884. son of joseph white and rosena dowswell white. Married into fisher family, wife is sarah matilda fisher.'
  },
  {
    id: 'per26',
    name: 'infant daughter White',
    deathYear: 1863,
    ageAtDeath: 0,
    plotId: 'p16',
    relationships: [
      { type: 'child of', personId: 'per30' },
      { type: 'sibling', personId: 'per25' },
      { type: 'sibling', personId: 'per27' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'to the left of john\'s grave (the 62 yr old john) child of joseph white and rosenna dowswell (plot 27)'
  },
  {
    id: 'per27',
    name: 'Joseph White',
    deathYear: 1868,
    ageAtDeath: 10,
    plotId: 'p16',
    relationships: [
      { type: 'child of', personId: 'per30' },
      { type: 'sibling', personId: 'per25' },
      { type: 'sibling', personId: 'per26' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'OGS child d 30 Oct 1868 AE 10 - to the left of john\'s grave (the 62 yr old john) child of joseph white and rosenna dowswell (plot 27)'
  },
  {
    id: 'per28',
    name: 'John White',
    deathYear: 1869,
    ageAtDeath: 62,
    plotId: 'p11',
    relationships: [
      { type: 'child of', personId: 'per24' },
      { type: 'sibling', personId: 'per29' },
      { type: 'sibling', personId: 'per99' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'OGS d 12 Nov 1869 AE 62 y-9 m. Son of Ann Wailes White.'
  },
  {
    id: 'per29',
    name: 'Joseph White',
    deathYear: 1873,
    ageAtDeath: 56,
    plotId: 'p4',
    relationships: [
      { type: 'child of', personId: 'per24' },
      { type: 'spouse', personId: 'per30' },
      { type: 'parent of', personId: 'per25' },
      { type: 'parent of', personId: 'per26' },
      { type: 'parent of', personId: 'per27' },
      { type: 'sibling', personId: 'per28' },
      { type: 'sibling', personId: 'per99' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'OGS: Joseph WHITE, d. June 13, 1873, AE 56y, 11 months. Son of Anne Wailes White.'
  },
  {
    id: 'per30',
    name: 'Rosena Dowswell White',
    deathYear: 1886,
    ageAtDeath: 64,
    plotId: 'p2',
    relationships: [
      { type: 'spouse', personId: 'per29' },
      { type: 'parent of', personId: 'per25' },
      { type: 'parent of', personId: 'per26' },
      { type: 'parent of', personId: 'per27' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'on fallen tombstone. Wife of joseph white (d 1873), mother of 10 yr old joseph and infant daughter, and john white (30 yrs old)'
  },
  {
    id: 'per31',
    name: 'John May',
    deathYear: 1865,
    ageAtDeath: 46,
    plotId: 'p1',
    relationships: [],
    familyKinshipGroup: 'John May (Morrish connection)',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'May, John d. Jan 16, 1865 ae 46. "Farewell my wife and children dear, I am not dead but sleeping here, As I am now so you must be Prepare in time to follow me". From Devonshire, England. Wife is Ann Morrish. Who is the great great aunt of William Morrish at plot number 68.'
  },
  {
    id: 'per32',
    name: 'Elizabeth ? Box',
    deathYear: 1875,
    ageAtDeath: 39,
    plotId: 'p42',
    relationships: [],
    familyKinshipGroup: 'John Karr & Elizabeth Woodruff',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'probable',
    researchConfidence: 'Uncertain',
    notes: 'OGS: "Elizabeth, wife of Wm Henry BOX, d 3 Jul 1875 AE 39" - single. Is she in anyway connected to the armstrongs, who seem to have been right beside her at her left'
  },
  {
    id: 'per33',
    name: 'Elizabeth Karr Adams',
    deathYear: 1874,
    ageAtDeath: 52,
    plotId: 'p33',
    relationships: [],
    familyKinshipGroup: 'Thomas Adams & Ann Webster',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'OGS: Eliza Beth, wife of Thomas ADAMS, d. Oct. 31, 1874, AE 52y, 6 months and 17 days. Sister Beulah married Elizabeths brother in law Elijah Adams'
  },
  {
    id: 'per34',
    name: 'Elmira Kerr Post',
    deathYear: 1872,
    ageAtDeath: 58,
    plotId: 'p31',
    relationships: [
      { type: 'child of', personId: 'per36' },
      { type: 'child of', personId: 'per37' },
      { type: 'parent of', personId: 'per38' },
      { type: 'parent of', personId: 'per39' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'wife of Jordan Post 5 (not the original jordan post). Father is John Karr and mother is Elizabeth Woodruff Karr'
  },
  {
    id: 'per35',
    name: 'Harvey W. Keeler',
    deathYear: 1867,
    ageAtDeath: 17,
    plotId: 'p27',
    relationships: [],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Uncertain',
    notes: 'OGS AE 17y 2m 19d. Harvey william keeler, son of orson Keeler and Mary Keeler. Family listed as episcopal methodist in 1861 but wesleyan methodist in 1871. the family moved to muskoka between 1871 and 1881 after harvey died. Cant find direct connections to other families but Jordan Post 4, his son John Post had a son he named Orson Keeler, which indicates that maybe the two families were friends.'
  },
  {
    id: 'per36',
    name: 'John Karr',
    deathYear: 1872,
    ageAtDeath: 87,
    plotId: 'p23',
    relationships: [
      { type: 'spouse', personId: 'per37' },
      { type: 'parent of', personId: 'per34' }
    ],
    familyKinshipGroup: 'John Karr & Elizabeth Woodruff',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: John KARR, d. Feb. 1, 1872, AE 87 and 2 months. Karr from kerr'
  },
  {
    id: 'per37',
    name: 'Elizabeth "Betsey" Woodruff Karr',
    deathYear: 1860,
    ageAtDeath: 67,
    plotId: 'p20',
    relationships: [
      { type: 'spouse', personId: 'per36' },
      { type: 'parent of', personId: 'per34' }
    ],
    familyKinshipGroup: 'John Karr & Elizabeth Woodruff',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / cracked/fallen',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: wife of John KARR d 3 May 1860 AE 67y 8m - matches'
  },
  {
    id: 'per38',
    name: 'Malinda Post',
    deathYear: 1846,
    ageAtDeath: 0,
    plotId: 'p9',
    relationships: [
      { type: 'child of', personId: 'per34' },
      { type: 'sibling', personId: 'per39' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS AE 5 mths 2 d. Grandchild of Jordan Post 4 and Malinda Woodruff. Father is jordan post 5, mother is elmira kerr post.'
  },
  {
    id: 'per39',
    name: 'William Post',
    deathYear: 1849,
    ageAtDeath: 0,
    plotId: 'p9',
    relationships: [
      { type: 'child of', personId: 'per34' },
      { type: 'sibling', personId: 'per38' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS AE 4 mths 16 d. Grandchild of Jordan Post 4 and Malinda Woodruff. Father is jordan post 5, mother is elmira kerr post.'
  },
  {
    id: 'per40',
    name: 'Malinda Woodruff Post',
    deathYear: 1838,
    ageAtDeath: 57,
    plotId: 'p3',
    relationships: [
      { type: 'parent of', personId: 'per65' },
      { type: 'spouse', personId: 'per41' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: '*Reburied in 1900 from Post Farm* OGS prints \'wife of Jordan, d 21 Sep 1838 AE 57\';'
  },
  {
    id: 'per41',
    name: 'Jordan Post',
    deathYear: 1845,
    ageAtDeath: 78,
    plotId: 'p3',
    relationships: [
      { type: 'parent of', personId: 'per65' },
      { type: 'spouse', personId: 'per40' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: '*Reburied in 1900 from Post Farm* OGS: \'Jordan POST d 1845 (re-interred c.1900)\' - matches. Jordan post 4'
  },
  {
    id: 'per42',
    name: 'Alice Emily Hawkins',
    deathYear: 1931,
    ageAtDeath: 8,
    plotId: 'p72',
    relationships: [],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'Granddaughter of Nelson Hawkins and Susan Emily Cornell through their son Albert'
  },
  {
    id: 'per43',
    name: 'Calvin Cornell',
    deathYear: 1857,
    ageAtDeath: 39,
    plotId: 'p72',
    relationships: [
      { type: 'parent of', personId: 'per46' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'Name appears on Hawkins monument; OGS: 1818-1857. Is he buried in the area of the monument? From FindAGrave: Calvin Cornell was apparently murdered while on a business trip to Detroit and buried there. Because he was carrying a large amount of cash, his family suspected foul play and had his body returned to Canada. Tests showed he had been poisoned by antimony. A doctor, whom Calvin knew and accompanied him on his trip, was accused, but a grand jury decided the crime was committed outside Canada and washed its hands of the matter.'
  },
  {
    id: 'per44',
    name: 'Augusta Hawkins Douglas',
    deathYear: 1939,
    ageAtDeath: 55,
    plotId: 'p72',
    relationships: [
      { type: 'child of', personId: 'per45' },
      { type: 'child of', personId: 'per46' },
      { type: 'sibling', personId: 'per48' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'Father is nelson hawkins, mother is susan emily cornell.'
  },
  {
    id: 'per45',
    name: 'Nelson Hawkins',
    deathYear: 1912,
    ageAtDeath: 61,
    plotId: 'p72',
    relationships: [
      { type: 'parent of', personId: 'per44' },
      { type: 'parent of', personId: 'per48' },
      { type: 'spouse', personId: 'per46' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: 1850-1912 - matches'
  },
  {
    id: 'per46',
    name: 'Susan Emily Cornell Hawkins',
    deathYear: 1922,
    ageAtDeath: 67,
    plotId: 'p72',
    relationships: [
      { type: 'child of', personId: 'per43' },
      { type: 'parent of', personId: 'per44' },
      { type: 'parent of', personId: 'per48' },
      { type: 'spouse', personId: 'per45' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: 1855-1922 - matches. Father is calvin cornell and mother is elizabeth stuart'
  },
  {
    id: 'per47',
    name: 'Robert Edgar Cole',
    deathYear: 1950,
    ageAtDeath: 75,
    plotId: 'p64',
    relationships: [
      { type: 'spouse', personId: 'per48' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: 1873-1950 - matches'
  },
  {
    id: 'per48',
    name: 'Elma Elizabeth Hawkins Cole',
    deathYear: 1971,
    ageAtDeath: 93,
    plotId: 'p64',
    relationships: [
      { type: 'child of', personId: 'per45' },
      { type: 'child of', personId: 'per46' },
      { type: 'sibling', personId: 'per44' },
      { type: 'spouse', personId: 'per47' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS shows "1878 -" (no death); FaG adds 1971 age 93. Daughter of Susan Emily Cornell and Nelson Hawkins'
  },
  {
    id: 'per49',
    name: 'William Armstrong',
    deathYear: 1875,
    ageAtDeath: 62,
    plotId: 'p38',
    relationships: [
      { type: 'spouse', personId: 'per50' }
    ],
    familyKinshipGroup: 'William Armstrong',
    gravestoneType: 'Unmarked',
    materialCondition: 'Unmarked / N/A',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: ''
  },
  {
    id: 'per50',
    name: 'Ann ? Armstrong',
    deathYear: 1883,
    ageAtDeath: 73,
    plotId: 'p38',
    relationships: [
      { type: 'spouse', personId: 'per49' }
    ],
    familyKinshipGroup: 'William Armstrong',
    gravestoneType: 'Unmarked',
    materialCondition: 'Unmarked / N/A',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'maiden name might be Hastings. Ancestry has a hastings that was born 1810 in england, married a william armstrong in ontario in 1865'
  },
  {
    id: 'per51',
    name: 'David Huston',
    deathYear: 1866,
    ageAtDeath: 51,
    plotId: 'p30',
    relationships: [
      { type: 'child of', personId: 'per52' }
    ],
    familyKinshipGroup: 'Huston Family',
    gravestoneType: 'Unmarked',
    materialCondition: 'Unmarked / N/A',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'David, d. Nov 8, 1866 ae 51; late of Ballyerae, County Antrim, Ireland. [monument now missing]. Huston also spelt Hewston and Houston. In the 1861 census are listed as living in a structure with a 55 year old Sarah Huston Jr (who is named as single alongside David, Sarah Sr is widow), his mother 96 year old Sarah Huston, and also a 15 year old David Thomas Adams. They are all listed as Free Church Presbyterians. in 1844, david bought, according to metro transit study on scarborough, the south part of lot 5 concession 2, about 100 acres. he was a farmer. neighbours are john chapman and mary ann chapman who are listed as methodist in 1861 census. When Sarah Huston Jr died in 1871, the property went to David Thomas Adams (who I cant determine if related to Hustons in any way) for the price of 1 pound. David connects the Hustons to multiple families in the area. David married Sarah Jane Cornell in the 1870s, daughter of Calvin Cornell. And David\'s father was Thomas Adams Jr, who was son of the Thomas Adams at number 73 in our cemetery. His stepmom was Elizabeth Warr Adams. also names his first son Arthur Huston Adams.'
  },
  {
    id: 'per52',
    name: 'Sarah ? Huston',
    deathYear: 1866,
    ageAtDeath: 100,
    plotId: 'p30',
    relationships: [
      { type: 'parent of', personId: 'per51' }
    ],
    familyKinshipGroup: 'Huston Family',
    gravestoneType: 'Unmarked',
    materialCondition: 'Unmarked / N/A',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'Sarah Huston d. April 17, 1866 aged [cracked] years; late of Ballyerae, County Antrim, Ireland. [monument now missing]. Mother of David Huston. Called Sarah Huston Sr by me.'
  },
  {
    id: 'per53',
    name: 'Elizabeth Briggs',
    deathYear: 1851,
    ageAtDeath: 1,
    plotId: 'p17',
    relationships: [
      { type: 'sibling', personId: 'per54' }
    ],
    familyKinshipGroup: 'John Karr & Elizabeth Woodruff',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible',
    gprStatus: 'probable',
    researchConfidence: 'Uncertain',
    notes: 'OGS: "d 14 Aug 1851 AE 1y 3m". Closest thing I can find which may connect them to other families in the cemetery is that they might be the children of David Briggs and Pheobe Ann Kerr. Pheobe is the daughter of John Kerr and his wife Elizabeth Woodruff. Many different Briggs families in the area of Scarboro during the 1850s. Registery of 1851 names Richard and John in Pickering, and David, George, James, and William in Whitby. L\'amoreux cemetery in pickering has a Dan Briggs who died at 1 yrs in 1853, and a sophia briggs who died in 1853 at 5 yrs old.'
  },
  {
    id: 'per54',
    name: 'John Briggs',
    deathYear: 1851,
    ageAtDeath: 5,
    plotId: 'p14',
    relationships: [
      { type: 'sibling', personId: 'per53' }
    ],
    familyKinshipGroup: 'John Karr & Elizabeth Woodruff',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible',
    gprStatus: 'probable',
    researchConfidence: 'Uncertain',
    notes: 'OGS: "d 11 Aug 1851 AE 5y 4d" brother to elizabeth briggs'
  },
  {
    id: 'per55',
    name: 'William Rawson',
    deathYear: 1868,
    ageAtDeath: 35,
    plotId: 'p13',
    relationships: [
      { type: 'parent of', personId: 'per56' }
    ],
    familyKinshipGroup: 'William Rawson',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'OGS AE 35 -'
  },
  {
    id: 'per56',
    name: 'Thomas Rawson',
    deathYear: 1863,
    ageAtDeath: 1,
    plotId: 'p8',
    relationships: [
      { type: 'child of', personId: 'per55' }
    ],
    familyKinshipGroup: 'William Rawson',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'OGS AE 1y 2 m 2 d. son of William Rawson and Mary Thomson. Mary Thomson is directly descended from the first settlers, the Thomson family in Scarborough, who arrived in the 1790s. Family listed as wesleyan methodist in 1861 census.'
  },
  {
    id: 'per57',
    name: 'Richard Stainton',
    deathYear: 1889,
    ageAtDeath: 73,
    plotId: 'p35',
    relationships: [
      { type: 'parent of', personId: 'per59' },
      { type: 'spouse', personId: 'per58' }
    ],
    familyKinshipGroup: 'Richard & Caroline Stainton',
    gravestoneType: 'replacement gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'OGS AE 73 - matches. Stainton connected to Duncan family via Rich and Carolines son William Henry. William Henry married Lucinda Duncan and produced Elizabeth Caroline Stainton/plot number 95 (the one that died in 1879) among other children before Lucinda died.'
  },
  {
    id: 'per58',
    name: 'Caroline Howell Stainton',
    deathYear: 1901,
    ageAtDeath: 87,
    plotId: 'p35',
    relationships: [
      { type: 'parent of', personId: 'per59' },
      { type: 'spouse', personId: 'per57' }
    ],
    familyKinshipGroup: 'Richard & Caroline Stainton',
    gravestoneType: 'replacement gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'Elizabeth-Caroline is alternative name'
  },
  {
    id: 'per59',
    name: 'Louisa Stainton',
    deathYear: 1868,
    ageAtDeath: 17,
    plotId: 'p32',
    relationships: [
      { type: 'child of', personId: 'per57' },
      { type: 'child of', personId: 'per58' }
    ],
    familyKinshipGroup: 'Richard & Caroline Stainton',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'OGS AE 17y 6 m - matches. Daughter of Richard and Caroline stainton'
  },
  {
    id: 'per60',
    name: 'Stephen Henry Closson',
    deathYear: 1859,
    ageAtDeath: 5,
    plotId: 'p21',
    relationships: [
      { type: 'child of', personId: 'per64' },
      { type: 'child of', personId: 'per65' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'monument',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'FaG shows child "Stephen Henry 5y" child of Stephen Closson and Maria Clarrisa Post, in OGS was written as "Shenby"'
  },
  {
    id: 'per61',
    name: 'Paulina Closson',
    deathYear: 1859,
    ageAtDeath: 9,
    plotId: 'p21',
    relationships: [
      { type: 'child of', personId: 'per64' },
      { type: 'child of', personId: 'per65' },
      { type: 'sibling', personId: 'per62' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'monument',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'OGS: AE 9y 4m; child of Stephen Closson and Maria Clarrisa Post'
  },
  {
    id: 'per62',
    name: 'Cedric W. Closson',
    deathYear: 1864,
    ageAtDeath: 15,
    plotId: 'p15',
    relationships: [
      { type: 'child of', personId: 'per64' },
      { type: 'child of', personId: 'per65' },
      { type: 'sibling', personId: 'per61' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'OGS exact match. child of Stephen Closson and Maria Clarrisa Post'
  },
  {
    id: 'per63',
    name: 'William Morrish',
    deathYear: 1917,
    ageAtDeath: 0,
    plotId: 'p10',
    relationships: [],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'replacement gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'Infant Morrish line on Closson stone; William is the son of William John Morrish, who owned the general store that is now a plaza to the left of the cemetery. William\'s mother, Una Jean Closson is the grandaughter of Stephen and maria clarissa. Williams brother, ken morrish, expanded the general store in the 1950s by building the plaza that is now beside the cemetery.'
  },
  {
    id: 'per64',
    name: 'Stephen Closson',
    deathYear: 1889,
    ageAtDeath: 71,
    plotId: 'p10',
    relationships: [
      { type: 'spouse', personId: 'per65' },
      { type: 'parent of', personId: 'per60' },
      { type: 'parent of', personId: 'per61' },
      { type: 'parent of', personId: 'per62' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'replacement gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: '',
    image: 'figma:asset/51ffd3607d0b3edafefe118f56a248b524a36754.png'
  },
  {
    id: 'per65',
    name: 'Maria Clarissa Post Closson',
    deathYear: 1909,
    ageAtDeath: 85,
    plotId: 'p10',
    relationships: [
      { type: 'child of', personId: 'per40' },
      { type: 'child of', personId: 'per41' },
      { type: 'spouse', personId: 'per64' },
      { type: 'parent of', personId: 'per60' },
      { type: 'parent of', personId: 'per61' },
      { type: 'parent of', personId: 'per62' }
    ],
    familyKinshipGroup: 'Jordan Post & Malinda Woodruff',
    gravestoneType: 'replacement gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'OGS: age 85 (Dec 1909). Sister of Melinda Post Cornell, who was wife of Calvin Cornell. Daughter of Jordan Post 4 and Melinda Woodruff Post'
  },
  {
    id: 'per66',
    name: 'Henry Adams',
    deathYear: 1873,
    ageAtDeath: 45,
    plotId: 'p29',
    relationships: [
      { type: 'child of', personId: 'per67' }
    ],
    familyKinshipGroup: 'Thomas Adams & Ann Webster',
    gravestoneType: 'Unmarked',
    materialCondition: 'Unmarked / N/A',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'Henry s/o Thomas & Ann d. Jan 27, 1873 ae 45 ys & 2 ms. [now missing]. Ann is not Anna Hadley Adams but Ann Webster Adams. Sister in law is elizabeth karr adams who married his brother thomas'
  },
  {
    id: 'per67',
    name: 'Thomas Adams',
    deathYear: 1872,
    ageAtDeath: 88,
    plotId: 'p29',
    relationships: [
      { type: 'parent of', personId: 'per66' }
    ],
    familyKinshipGroup: 'Thomas Adams & Ann Webster',
    gravestoneType: 'Unmarked',
    materialCondition: 'Unmarked / N/A',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'Thomas d. March 10, 1872 ae 78 ys & 5 ms. Ancestry says born 1784 and died 1872. son Thomas Adams Jr married Elizabeth Warr. Son Edward adams married Anna Hadley. Wife was Ann Nancy Webster Adams. known as uncle tommy adams, mr adams was the establishing adams in the family, having arrived in 1808-1812 period from the states. he was responsible for building many of the first frame structures in the city.\n\nFrom _The Township of Scarboro, 1796 to 1896_ by David Boyle, 1896, pgs 48-49: _"Thomas Adams, or, as he was better known among the settlers, Uncle Tommy Adams, was another of the early settlers. He was said to like his sobriquet so well that he declined to be addressed by any other name. He came to Canada from Vermont, U.S., in 1808, and settled upon lots 1, concessions D and 1. He built a log-house on the bank overlooking the lake, and later on, a brick one. The latter was struck by lightning about the year 1832, when his son William was killed. Adams was a carpenter by trade, and had been captain of an American sailing vessel during the war of 1812. He took refuge in Highland Creek during the war, and, fearing the seizure of his cargo, which consisted of guns, brass kettles, and ammunition, threw it overboard. Tradition says that it is still at the bottom of the creek. In partnership with John Allen, he built a sailing vessel, the Mary Ann, at the mouth of Highland Creek, about 1834. Adams built the first school-house in the section, in 1836. It is still standing, a cottage of planks, on the Kingston Road. Many of the first frame houses in the neighborhood were also put up by him. Adams had six sons and two daughters. One of the sons, James, was a sailor and part owner with Daniel Knowles of the Highland Chief, a vessel built at the Humber River about 1834. The Highland Chief was lost in a storm, and all hands perished. The wreck was afterwards found and sold to Thomas Scott."_'
  },
  {
    id: 'per68',
    name: 'Anna Hadley Adams',
    deathYear: 1912,
    ageAtDeath: 85,
    plotId: 'p29',
    relationships: [],
    familyKinshipGroup: 'Thomas Adams & Ann Webster',
    gravestoneType: 'replacement gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'OGS: "Ann HADLEY 1826-1912" husband was Edward Adams, where is he?'
  },
  {
    id: 'per69',
    name: 'Mary ? Doherty',
    deathYear: 1867,
    ageAtDeath: 26,
    plotId: 'p19',
    relationships: [],
    familyKinshipGroup: 'Thomas Adams & Ann Webster',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / cracked/fallen',
    gprStatus: 'not confident',
    researchConfidence: 'Uncertain',
    notes: 'OGS: d 8 May 1867 AE 26y 10m 8d - matches. In memory of Mary Wife of John Doherty Who died May 8th, 1867 AE. 26 yr\'s 10 mo\'s & 8 days. John Doherty listed as a School Teacher in the 1796-1896 Scarboro history book. Cant find anything directly on a Mary Doherty (or Dogerthy or any other spelling) living in Scarborough or the surrounding areas in 1866 or 1867. But, on ancestry i found a Mary Hadley (whose death date is not written) who was born in 1838 and is the sister of Anna Hadley Adams whose grave is beside Mary\'s. also, Mary Hadley was the sister of Elizabeth Isabelle Hadley Ellis, wife of Frederick Ellis who is number 76 in the cemetery and to the right of mary doherty. the close location of these burials makes me think that mary hadley is likely mary doherty.'
  },
  {
    id: 'per70',
    name: 'William E. Ellis',
    deathYear: 1861,
    ageAtDeath: 1,
    plotId: 'p12',
    relationships: [
      { type: 'child of', personId: 'per72' },
      { type: 'sibling', personId: 'per71' }
    ],
    familyKinshipGroup: 'Thomas Adams & Ann Webster',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'probable',
    researchConfidence: 'Confident',
    notes: 'OGS: AE 1y 10 m'
  },
  {
    id: 'per71',
    name: 'Margaret Ann Ellis',
    deathYear: 1863,
    ageAtDeath: 0,
    plotId: 'p6',
    relationships: [
      { type: 'child of', personId: 'per72' },
      { type: 'sibling', personId: 'per70' }
    ],
    familyKinshipGroup: 'Thomas Adams & Ann Webster',
    gravestoneType: 'replacement gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'OGS: AE 2 mths 23 d'
  },
  {
    id: 'per72',
    name: 'Frederick Ellis',
    deathYear: 1868,
    ageAtDeath: 31,
    plotId: 'p6',
    relationships: [
      { type: 'parent of', personId: 'per70' },
      { type: 'parent of', personId: 'per71' }
    ],
    familyKinshipGroup: 'Thomas Adams & Ann Webster',
    gravestoneType: 'replacement gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'connected to the Adams family twice: once through sister in law ann adams, second through Nancy Ann Ellis (who married Thomas Adams son James) who might be a cousin or sister.'
  },
  {
    id: 'per73',
    name: 'Ann ? Steel',
    deathYear: 1864,
    ageAtDeath: 41,
    plotId: 'p50',
    relationships: [],
    familyKinshipGroup: 'Steel (Singleton)',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'Ann wf of William, d. October, 1864 ae 41 ys & 5 ms. William is listed as a school teacher in 1857/58.'
  },
  {
    id: 'per74',
    name: 'Jabez Collins',
    deathYear: 1874,
    ageAtDeath: 41,
    plotId: 'p44',
    relationships: [
      { type: 'spouse', personId: 'per75' }
    ],
    familyKinshipGroup: 'John Taylor & Mary Clark',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: age 41y 5m 14d - matches. Husband of fanny taylor'
  },
  {
    id: 'per75',
    name: 'Fanny Taylor Collins',
    deathYear: 1887,
    ageAtDeath: 49,
    plotId: 'p41',
    relationships: [
      { type: 'child of', personId: 'per83' },
      { type: 'child of', personId: 'per84' },
      { type: 'spouse', personId: 'per74' },
      { type: 'sibling', personId: 'per110' },
      { type: 'sibling', personId: 'per81' }
    ],
    familyKinshipGroup: 'John Taylor & Mary Clark',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: age 49y 7m - matches. Sister of Mary Taylor Brander. Daughter of John Taylor and Mary Clark.'
  },
  {
    id: 'per76',
    name: 'Joseph Swallow',
    deathYear: 1868,
    ageAtDeath: 0,
    plotId: 'p25',
    relationships: [
      { type: 'sibling', personId: 'per77' },
      { type: 'sibling', personId: 'per107' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: may 13 6 months 14 days. Child of Isabella Hall and Charles Swallow'
  },
  {
    id: 'per77',
    name: 'Alfred Swallow',
    deathYear: 1868,
    ageAtDeath: 1,
    plotId: 'p25',
    relationships: [
      { type: 'sibling', personId: 'per76' },
      { type: 'sibling', personId: 'per107' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: may 1st 1 years and 8 months. Child of Isabella Hall and Charles Swallow'
  },
  {
    id: 'per78',
    name: 'Mary Jane Chapman',
    deathYear: 1864,
    ageAtDeath: 0,
    plotId: 'p7',
    relationships: [],
    familyKinshipGroup: 'Chapman (Armstrong/Fawcett)',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'OGS: "d 13 Dec 1864 AE 3 mths" - single Chapman. Parents are Jesse Chapman and Almira Susanah (Secor/Secord) Chapman, daughter of Joseph secor(d) and Laura Armstrong. Laura Armstrong remarried to Thomas Armstrong, brother of William Armstrong at plot 47. Mary Jane\'s sisters include susanah fawcett who married William Henry Fawcett, grandson of William Fawcett and Jane Armstrong.. might be distantly related to Margaret Secord taylor'
  },
  {
    id: 'per79',
    name: 'Mary Cowan',
    deathYear: 1861,
    ageAtDeath: 2,
    plotId: 'p5',
    relationships: [
      { type: 'sibling', personId: 'per80' }
    ],
    familyKinshipGroup: 'Cowan Family',
    gravestoneType: 'replacement gravestone',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'not confident',
    researchConfidence: 'Uncertain',
    notes: '2 years and 11 months. Sister to jane cowan. Hard to pin down parentage. The 1866 and 1871 registerys lists mcowans, not cowans, which might be another spelling anyways. In 1866 the mccowan landholders (pater familias) in scarboro are Robert, James, William. in 1871, they are all still there but joined by James jr on the list. There is in the Wesleyan Baptismal records an Isabella Ann Cowan baptised in 1859, born 1856, mother is Jane, father is Robert. Since they had no kids between 1858 and 1861, there is space for jane and mary to have been born in this timeframe.'
  },
  {
    id: 'per80',
    name: 'Jane Cowan',
    deathYear: 1871,
    ageAtDeath: 11,
    plotId: 'p5',
    relationships: [
      { type: 'sibling', personId: 'per79' }
    ],
    familyKinshipGroup: 'Cowan Family',
    gravestoneType: 'replacement gravestone',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'not confident',
    researchConfidence: 'Uncertain',
    notes: ''
  },
  {
    id: 'per81',
    name: 'Mary Taylor Brander',
    deathYear: 1869,
    ageAtDeath: 27,
    plotId: 'p46',
    relationships: [
      { type: 'child of', personId: 'per83' },
      { type: 'child of', personId: 'per84' },
      { type: 'sibling', personId: 'per110' },
      { type: 'sibling', personId: 'per75' }
    ],
    familyKinshipGroup: 'John Taylor & Mary Clark',
    gravestoneType: 'Unmarked',
    materialCondition: 'Unmarked / N/A',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'Mary A. Brander dau of J. & M. Taylor d. Aug 17, 1869 ae 27. [nearby is a footstone inscribed "M. Brander"]. Daughter of John Taylor and Mary Clark.'
  },
  {
    id: 'per82',
    name: 'Sarah Taylor',
    deathYear: 1851,
    ageAtDeath: 0,
    plotId: 'p52',
    relationships: [],
    familyKinshipGroup: 'John Taylor & Mary Clark',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: '2 months and 9 days. Granddaughter of John Taylor and Mary Clark, through John Taylor Jr.'
  },
  {
    id: 'per83',
    name: 'John Taylor',
    deathYear: 1847,
    ageAtDeath: 51,
    plotId: 'p48',
    relationships: [
      { type: 'spouse', personId: 'per84' },
      { type: 'parent of', personId: 'per75' },
      { type: 'parent of', personId: 'per81' },
      { type: 'parent of', personId: 'per110' }
    ],
    familyKinshipGroup: 'John Taylor & Mary Clark',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: d 18 Aug 1847 AE 51 (Norfolk native) - matches.'
  },
  {
    id: 'per84',
    name: 'Mary Clark Taylor',
    deathYear: 1883,
    ageAtDeath: 86,
    plotId: 'p48',
    relationships: [
      { type: 'spouse', personId: 'per83' },
      { type: 'parent of', personId: 'per110' },
      { type: 'parent of', personId: 'per75' },
      { type: 'parent of', personId: 'per81' }
    ],
    familyKinshipGroup: 'John Taylor & Mary Clark',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS AE 86 - matches.'
  },
  {
    id: 'per85',
    name: 'Ruth Fisher Higgins',
    deathYear: 1870,
    ageAtDeath: 22,
    plotId: 'p45',
    relationships: [
      { type: 'child of', personId: 'per86' },
      { type: 'sibling', personId: 'per88' }
    ],
    familyKinshipGroup: 'Joseph Fisher & Elizabeth Snowdon',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible/cracked/fallen',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'father is joseph fisher, mother is elizabeth snowdon https://www.findagrave.com/memorial/171424419/ruth-higgins.'
  },
  {
    id: 'per86',
    name: 'Joseph Fisher',
    deathYear: 1848,
    ageAtDeath: 47,
    plotId: 'p43',
    relationships: [
      { type: 'parent of', personId: 'per85' },
      { type: 'parent of', personId: 'per88' }
    ],
    familyKinshipGroup: 'Joseph Fisher & Elizabeth Snowdon',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS perfect match. Father is john fisher 1, mother is elizabeth chapman. Brother of william fisher, who\'s son john fisher is married to elizabeth post. Elizabeth post is daughter of jordan post 5 and elmira kerr post'
  },
  {
    id: 'per87',
    name: 'Thomas B. Fisher',
    deathYear: 1901,
    ageAtDeath: 30,
    plotId: 'p39',
    relationships: [
      { type: 'child of', personId: 'per88' },
      { type: 'child of', personId: 'per89' }
    ],
    familyKinshipGroup: 'Joseph Fisher & Elizabeth Snowdon',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'Son of john fisher 2, and susan bellchambers fisher.'
  },
  {
    id: 'per88',
    name: 'John Fisher',
    deathYear: 1900,
    ageAtDeath: 63,
    plotId: 'p39',
    relationships: [
      { type: 'child of', personId: 'per86' },
      { type: 'spouse', personId: 'per89' },
      { type: 'parent of', personId: 'per87' },
      { type: 'sibling', personId: 'per85' }
    ],
    familyKinshipGroup: 'Joseph Fisher & Elizabeth Snowdon',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'OGS: AE 63. father is joseph fisher, mother is elizabeth snowdon. Sister is ruth fisher higgins. John fisher 2'
  },
  {
    id: 'per89',
    name: 'Susan Bellchambers Fisher',
    deathYear: 1926,
    ageAtDeath: 87,
    plotId: 'p39',
    relationships: [
      { type: 'spouse', personId: 'per88' },
      { type: 'parent of', personId: 'per87' }
    ],
    familyKinshipGroup: 'Joseph Fisher & Elizabeth Snowdon',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'Married to John Fisher 2'
  },
  {
    id: 'per90',
    name: 'Mary Taylor',
    deathYear: 1853,
    ageAtDeath: 0,
    plotId: 'p49',
    relationships: [],
    familyKinshipGroup: 'John Taylor & Mary Clark',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: '7 months old. OGS says Marry Ann. daughter of Robert Taylor and Frances Dixon. Robert Taylor is son of John Taylor and Mary Clark'
  },
  {
    id: 'per91',
    name: 'John Taylor',
    deathYear: 1850,
    ageAtDeath: 1,
    plotId: 'p47',
    relationships: [],
    familyKinshipGroup: 'John Taylor & Mary Clark',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible',
    gprStatus: 'not yet surveyed',
    researchConfidence: 'Confident',
    notes: 'Rubbing says 1850 and 1 yrs old. Son of Robert Taylor and Frances Dixon. Robert Taylor is son of John Taylor and Mary Clark'
  },
  {
    id: 'per92',
    name: 'William Pearce',
    deathYear: 1843,
    ageAtDeath: 11,
    plotId: 'p37',
    relationships: [],
    familyKinshipGroup: 'Pearce (Singleton)',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / illegible',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'OGS: \'d 18 Jun 1843 AE 11y 5mos. son of john and susan pearce.'
  },
  {
    id: 'per93',
    name: 'Elizabeth Caroline Stainton',
    deathYear: 1879,
    ageAtDeath: 0,
    plotId: 'p67',
    relationships: [
      { type: 'child of', personId: 'per96' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'OGS AE 6 mths 5 d - matches. Granddaughter of richard and caroline stainton through son william henry stainton. William henry married lucinda duncan, who is elizabeth caroline\'s mom'
  },
  {
    id: 'per94',
    name: 'Sarah Duncan',
    deathYear: 1866,
    ageAtDeath: 4,
    plotId: 'p66',
    relationships: [],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'gravestone',
    materialCondition: 'marble / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'd/o Johnson & Jane duncan. March 16, 1866 ae 4. 1. 11. father was johnson duncan, son of john duncan 1 and elizabeth white'
  },
  {
    id: 'per95',
    name: 'Elizabeth Ethel Duncan Caroll',
    deathYear: 1900,
    ageAtDeath: 28,
    plotId: 'p69',
    relationships: [
      { type: 'child of', personId: 'per101' },
      { type: 'child of', personId: 'per98' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'Ethel Duncan wf of Jas. Carroll d. Jan 26, 1900 ae 28 ys 9 ms. Husband is James Carroll. Granddaughter of Elizabeth White and John Duncan through their son John Duncan'
  },
  {
    id: 'per96',
    name: 'Lucinda Duncan Stainton',
    deathYear: 1884,
    ageAtDeath: 32,
    plotId: 'p69',
    relationships: [
      { type: 'child of', personId: 'per99' },
      { type: 'parent of', personId: 'per93' },
      { type: 'sibling', personId: 'per101' },
      { type: 'sibling', personId: 'per106' },
      { type: 'sibling', personId: 'per97' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'Lucinda Duncan d. June 12, 1884 ae 32 ys & 7 ms; child of elizabeth white and john duncan 1'
  },
  {
    id: 'per97',
    name: 'Isabella Duncan Watson',
    deathYear: 1882,
    ageAtDeath: 35,
    plotId: 'p69',
    relationships: [
      { type: 'child of', personId: 'per99' },
      { type: 'sibling', personId: 'per101' },
      { type: 'sibling', personId: 'per106' },
      { type: 'sibling', personId: 'per96' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'Isabella Duncan d. Nov 24, 1882 ae 35 ys & 10 ms; child of elizabeth white and john duncan 1'
  },
  {
    id: 'per98',
    name: 'Eliza Lennox Duncan',
    deathYear: 1900,
    ageAtDeath: 51,
    plotId: 'p69',
    relationships: [
      { type: 'spouse', personId: 'per101' },
      { type: 'parent of', personId: 'per95' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'Eliza Lennox wf of Jas. Duncan d. Mar 26, 1900 ac 51 ys;'
  },
  {
    id: 'per99',
    name: 'Elizabeth White Duncan',
    deathYear: 1895,
    ageAtDeath: 84,
    plotId: 'p69',
    relationships: [
      { type: 'child of', personId: 'per24' },
      { type: 'spouse', personId: 'per100' },
      { type: 'parent of', personId: 'per101' },
      { type: 'parent of', personId: 'per106' },
      { type: 'parent of', personId: 'per96' },
      { type: 'parent of', personId: 'per97' },
      { type: 'sibling', personId: 'per28' },
      { type: 'sibling', personId: 'per29' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'Elizabeth beloved wife of John Duncan d. Nov 8, 1895 84 ys 10 ms. daughter of ann wailes white (plot 23) and john white (plot 24)'
  },
  {
    id: 'per100',
    name: 'John Duncan',
    deathYear: 1895,
    ageAtDeath: 93,
    plotId: 'p69',
    relationships: [
      { type: 'spouse', personId: 'per99' },
      { type: 'parent of', personId: 'per101' },
      { type: 'parent of', personId: 'per106' },
      { type: 'parent of', personId: 'per96' },
      { type: 'parent of', personId: 'per97' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'April 5, 1895 ae 93 ys 9 ms. Johnson duncan 1'
  },
  {
    id: 'per101',
    name: 'James Duncan',
    deathYear: 1940,
    ageAtDeath: 96,
    plotId: 'p69',
    relationships: [
      { type: 'child of', personId: 'per99' },
      { type: 'child of', personId: 'per100' },
      { type: 'spouse', personId: 'per98' },
      { type: 'parent of', personId: 'per95' },
      { type: 'sibling', personId: 'per106' },
      { type: 'sibling', personId: 'per96' },
      { type: 'sibling', personId: 'per97' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'born 1844. husband of Eliza lennox. child of elizabeth white and john duncan 1'
  },
  {
    id: 'per102',
    name: 'Robert Brumwell',
    deathYear: 1880,
    ageAtDeath: 0,
    plotId: 'p71',
    relationships: [
      { type: 'child of', personId: 'per106' },
      { type: 'child of', personId: 'per109' },
      { type: 'sibling', personId: 'per105' },
      { type: 'sibling', personId: 'per108' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'marble / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'son of mary duncan and william brumwell'
  },
  {
    id: 'per103',
    name: 'Joanne Greig',
    deathYear: 1927,
    ageAtDeath: 0,
    plotId: 'p71',
    relationships: [],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'marble / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'Joanne infant dau of Alex & Rachel Greig and granddaughter of Jacob Brumwell May 11, 1927 - June 16, 1927;'
  },
  {
    id: 'per104',
    name: 'Gladyous Brumwell',
    deathYear: 1905,
    ageAtDeath: 11,
    plotId: 'p71',
    relationships: [
      { type: 'child of', personId: 'per107' },
      { type: 'child of', personId: 'per109' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'marble / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'daughter of rachel ann swallow and william brumwell'
  },
  {
    id: 'per105',
    name: 'John Wesley Brumwell',
    deathYear: 1899,
    ageAtDeath: 32,
    plotId: 'p71',
    relationships: [
      { type: 'child of', personId: 'per106' },
      { type: 'child of', personId: 'per109' },
      { type: 'sibling', personId: 'per102' },
      { type: 'sibling', personId: 'per108' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'marble / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'son of mary duncan and william brumwell'
  },
  {
    id: 'per106',
    name: 'Mary Duncan Brumwell',
    deathYear: 1893,
    ageAtDeath: 51,
    plotId: 'p71',
    relationships: [
      { type: 'child of', personId: 'per99' },
      { type: 'child of', personId: 'per100' },
      { type: 'spouse', personId: 'per109' },
      { type: 'parent of', personId: 'per102' },
      { type: 'parent of', personId: 'per105' },
      { type: 'parent of', personId: 'per108' },
      { type: 'sibling', personId: 'per101' },
      { type: 'sibling', personId: 'per96' },
      { type: 'sibling', personId: 'per97' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'marble / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'Mary wf of William Brumwell d. Dec 30, 1893 ae 51 ys 2 ms 10. daughter of John Duncan 1 and Elizabeth white'
  },
  {
    id: 'per107',
    name: 'Rachel Ann Swallow Brumwell',
    deathYear: 1923,
    ageAtDeath: 59,
    plotId: 'p71',
    relationships: [
      { type: 'parent of', personId: 'per104' },
      { type: 'sibling', personId: 'per76' },
      { type: 'sibling', personId: 'per77' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'marble / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'b. Aug 10, 1864, died in her 59th year. Sister of Alfred and Joseph Swallow. Wife of william brumwell. Mom of gladyous brumwell. Child of Isabella Hall and Charles Swallow'
  },
  {
    id: 'per108',
    name: 'Jacob Brumwell',
    deathYear: 1936,
    ageAtDeath: 70,
    plotId: 'p71',
    relationships: [
      { type: 'child of', personId: 'per106' },
      { type: 'child of', personId: 'per109' },
      { type: 'sibling', personId: 'per102' },
      { type: 'sibling', personId: 'per105' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'marble / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'b. May 31, 1865, d. Apr 15, 1936. child of mary duncan and william brumwell'
  },
  {
    id: 'per109',
    name: 'William Brumwell',
    deathYear: 1925,
    ageAtDeath: 89,
    plotId: 'p71',
    relationships: [
      { type: 'spouse', personId: 'per106' },
      { type: 'parent of', personId: 'per102' },
      { type: 'parent of', personId: 'per105' },
      { type: 'parent of', personId: 'per108' }
    ],
    familyKinshipGroup: 'Thomas White & Ann Wailes',
    gravestoneType: 'monument',
    materialCondition: 'marble / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'William d. Mar 8, 1925 in his 89th yr;'
  },
  {
    id: 'per110',
    name: 'Mark Taylor',
    deathYear: 1923,
    ageAtDeath: 77,
    plotId: 'p68',
    relationships: [
      { type: 'child of', personId: 'per83' },
      { type: 'child of', personId: 'per84' },
      { type: 'spouse', personId: 'per111' },
      { type: 'sibling', personId: 'per75' },
      { type: 'sibling', personId: 'per81' }
    ],
    familyKinshipGroup: 'John Taylor & Mary Clark',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'OGS 1845-1923 - matches.'
  },
  {
    id: 'per111',
    name: 'Margaret Secord Taylor',
    deathYear: 1924,
    ageAtDeath: 78,
    plotId: 'p68',
    relationships: [
      { type: 'spouse', personId: 'per110' }
    ],
    familyKinshipGroup: 'John Taylor & Mary Clark',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'OGS 1846-1924 - matches.'
  },
  {
    id: 'per112',
    name: 'John Spillsbury',
    deathYear: 2000,
    ageAtDeath: 71,
    plotId: 'p57',
    relationships: [
      { type: 'spouse', personId: 'per113' }
    ],
    familyKinshipGroup: 'Unconnected to Pioneers',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Modern Addition',
    notes: 'ogs. Wrote Facts and Folklore book!'
  },
  {
    id: 'per113',
    name: 'Shirley Morrison Spillsbury',
    deathYear: 2017,
    ageAtDeath: 86,
    plotId: 'p57',
    relationships: [
      { type: 'spouse', personId: 'per112' }
    ],
    familyKinshipGroup: 'Unconnected to Pioneers',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Modern Addition',
    notes: 'ogs. https://www.legacy.com/ca/obituaries/thestar/name/shirley-spilsbury-obituary?id=42132822'
  },
  {
    id: 'per114',
    name: 'Gord Grieveson',
    deathYear: 1993,
    ageAtDeath: 61,
    plotId: 'p56',
    relationships: [
      { type: 'spouse', personId: 'per115' }
    ],
    familyKinshipGroup: 'Unconnected to Pioneers',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Modern Addition',
    notes: 'Handwritten 2018?'
  },
  {
    id: 'per115',
    name: 'Joyce Bodnar Grieveson',
    deathYear: 2009,
    ageAtDeath: 73,
    plotId: 'p56',
    relationships: [
      { type: 'spouse', personId: 'per114' }
    ],
    familyKinshipGroup: 'Unconnected to Pioneers',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Modern Addition',
    notes: 'Handwritten modern addition'
  },
  {
    id: 'per116',
    name: 'Ron Pratt',
    deathYear: 1995,
    ageAtDeath: 65,
    plotId: 'p59',
    relationships: [],
    familyKinshipGroup: 'Unconnected to Pioneers',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Modern Addition',
    notes: 'Handwritten modern'
  },
  {
    id: 'per117',
    name: 'Sophia Walker',
    deathYear: 1993,
    ageAtDeath: 86,
    plotId: 'p60',
    relationships: [],
    familyKinshipGroup: 'Unconnected to Pioneers',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Modern Addition',
    notes: 'Handwritten; OGS note misspells as \'Sopia\''
  },
  {
    id: 'per118',
    name: 'Douglas R. Murphy',
    deathYear: 1989,
    ageAtDeath: 62,
    plotId: 'p51',
    relationships: [
      { type: 'spouse', personId: 'per119' }
    ],
    familyKinshipGroup: 'Unconnected to Pioneers',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Modern Addition',
    notes: 'Handwritten; FaG gives 1929-2004 for Douglas R. Murphy -'
  },
  {
    id: 'per119',
    name: 'Georgina M. Galbraith Murphy',
    deathYear: 2004,
    ageAtDeath: 75,
    plotId: 'p51',
    relationships: [
      { type: 'spouse', personId: 'per118' }
    ],
    familyKinshipGroup: 'Unconnected to Pioneers',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Modern Addition',
    notes: 'Matches FaG; no OGS'
  },
  {
    id: 'per120',
    name: 'Alfred Storey Munday',
    deathYear: 2000,
    ageAtDeath: 89,
    plotId: 'p58',
    relationships: [
      { type: 'spouse', personId: 'per121' }
    ],
    familyKinshipGroup: 'Alfred Storey Munday',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'Handwritten entry - matches FaG. Might be buried proper in England.'
  },
  {
    id: 'per121',
    name: 'Marian Powley Munday',
    deathYear: 2006,
    ageAtDeath: 93,
    plotId: 'p58',
    relationships: [
      { type: 'spouse', personId: 'per120' }
    ],
    familyKinshipGroup: 'Alfred Storey Munday',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'Handwritten entry - matches FaG.'
  },
  {
    id: 'per122',
    name: 'Colin Barron',
    deathYear: 2011,
    ageAtDeath: 68,
    plotId: 'p58',
    relationships: [],
    familyKinshipGroup: 'Alfred Storey Munday',
    gravestoneType: 'gravestone',
    materialCondition: 'granite / good',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'Not in OGS; 2011 handwritten addition. Son in law of alfred storey munday and marian powley Munday'
  },
  {
    id: 'per123',
    name: 'Carlton Luther Kerr Sr',
    deathYear: 1894,
    ageAtDeath: 81,
    plotId: 'pUNK',
    relationships: [
      { type: 'child of', personId: 'per36' },
      { type: 'child of', personId: 'per37' },
      { type: 'parent of', personId: 'per21' }
    ],
    familyKinshipGroup: 'John Karr & Elizabeth Woodruff',
    gravestoneType: 'Unmarked',
    materialCondition: 'Unmarked / N/A',
    gprStatus: 'not confident',
    researchConfidence: 'Confident',
    notes: 'Known to be buried in the cemetery from death certificate but unknown location. likely in the back of the cemetery with his immediate family. perhaps in the briggs/huston row. Father is John Karr Sr (in the cemetery) and mother is Elizabeth Woodruff Karr (in the cemetery). Daughter is Sarah Jane Kerr Reed (also in the cemetery).'
  }
];

export const unplacedBurials: Person[] = [];

export function getPlotById(plotId: string): Plot | undefined {
  return plots.find((plot) => plot.id === plotId);
}

export function getPlotByNumber(plotNumber: string): Plot | undefined {
  return plots.find((plot) => plot.number === plotNumber);
}

export function getPersonById(personId: string): Person | undefined {
  return people.find((person) => person.id === personId) ?? unplacedBurials.find((person) => person.id === personId);
}

export function getPeopleInPlot(plotId: string): Person[] {
  return people.filter((person) => person.plotId === plotId);
}

export function getRelatedPeople(personId: string): { type: string; person: Person }[] {
  const person = getPersonById(personId);
  if (!person) return [];

  return person.relationships
    .map((relationship) => {
      const relatedPerson = getPersonById(relationship.personId);
      if (!relatedPerson) return null;
      return { type: relationship.type, person: relatedPerson };
    })
    .filter((rel): rel is { type: string; person: Person } => rel !== null);
}
