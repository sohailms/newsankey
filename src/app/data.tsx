const people = [
  { group: 'people', id: 'Conor Irwin' },
  { group: 'people', id: 'Mohammad Sullivan' },
  { group: 'people', id: 'Anna Graham' },
  { group: 'people', id: 'Ayden Gates' },
  { group: 'people', id: 'Juan Cole' },
  { group: 'people', id: 'Lillian Stein' },
  { group: 'people', id: 'Jake Barrera' },
  { group: 'people', id: 'Aaliyah Roth' },
  { group: 'people', id: 'Nieve Ferrell' },
  { group: 'people', id: 'Ayrton Lin' },
  { group: 'people', id: 'Gethin Proctor' },
  { group: 'people', id: 'Juanita Fowler' },
  { group: 'people', id: 'Amna Vincent' },
  { group: 'people', id: 'Bruno Bradley' },
  { group: 'people', id: 'Sienna Chen' },
  { group: 'people', id: 'Arjun Holloway' },
  { group: 'people', id: 'Mina Trujillo' },
  { group: 'people', id: 'Jayson Molina' },
  { group: 'people', id: 'Lacey Oneill' },
  { group: 'people', id: 'Caspar Aguirre' },
  { group: 'people', id: 'Zeeshan Reynolds' },
  { group: 'people', id: 'Paige Finch' },
  { group: 'people', id: 'Tianna Greer' },
  { group: 'people', id: 'Alma Lara' },
  { group: 'people', id: 'Leila Connor' },
  { group: 'people', id: 'Emilia Sanchez' },
  { group: 'people', id: 'Elsie Knapp' },
  { group: 'people', id: 'Darragh Dickerson' },
];

const tickets = [
  { group: 'tickets', id: 'Ticket 0' },
  { group: 'tickets', id: 'Ticket 25' },
  { group: 'tickets', id: 'Ticket 14' },
  { group: 'tickets', id: 'Ticket 40' },
  { group: 'tickets', id: 'Ticket 32' },
  { group: 'tickets', id: 'Ticket 29' },
  { group: 'tickets', id: 'Ticket 28' },
  { group: 'tickets', id: 'Ticket 15' },
  { group: 'tickets', id: 'Ticket 24' },
  { group: 'tickets', id: 'Ticket 26' },
  { group: 'tickets', id: 'Ticket 1' },
  { group: 'tickets', id: 'Ticket 23' },
  { group: 'tickets', id: 'Ticket 10' },
  { group: 'tickets', id: 'Ticket 12' },
  { group: 'tickets', id: 'Ticket 5' },
  { group: 'tickets', id: 'Ticket 2' },
  { group: 'tickets', id: 'Ticket 38' },
  { group: 'tickets', id: 'Ticket 36' },
  { group: 'tickets', id: 'Ticket 44' },
  { group: 'tickets', id: 'Ticket 6' },
  { group: 'tickets', id: 'Ticket 17' },
  { group: 'tickets', id: 'Ticket 31' },
  { group: 'tickets', id: 'Ticket 21' },
  { group: 'tickets', id: 'Ticket 20' },
  { group: 'tickets', id: 'Ticket 43' },
  { group: 'tickets', id: 'Ticket 45' },
  { group: 'tickets', id: 'Ticket 33' },
  { group: 'tickets', id: 'Ticket 4' },
  { group: 'tickets', id: 'Ticket 11' },
  { group: 'tickets', id: 'Ticket 46' },
  { group: 'tickets', id: 'Ticket 27' },
  { group: 'tickets', id: 'Ticket 7' },
  { group: 'tickets', id: 'Ticket 42' },
  { group: 'tickets', id: 'Ticket 47' },
  { group: 'tickets', id: 'Ticket 48' },
  { group: 'tickets', id: 'Ticket 9' },
  { group: 'tickets', id: 'Ticket 49' },
  { group: 'tickets', id: 'Ticket 8' },
  { group: 'tickets', id: 'Ticket 19' },
  { group: 'tickets', id: 'Ticket 37' },
  { group: 'tickets', id: 'Ticket 41' },
  { group: 'tickets', id: 'Ticket 35' },
  { group: 'tickets', id: 'Ticket 18' },
  { group: 'tickets', id: 'Ticket 30' },
  { group: 'tickets', id: 'Ticket 3' },
  { group: 'tickets', id: 'Ticket 13' },
  { group: 'tickets', id: 'Ticket 34' },
  { group: 'tickets', id: 'Ticket 39' },
  { group: 'tickets', id: 'Ticket 16' },
  { group: 'tickets', id: 'Ticket 22' },
];

const projects = [
  { group: 'projects', id: 'Project 3' },
  { group: 'projects', id: 'Project 4' },
  { group: 'projects', id: 'Project 5' },
  { group: 'projects', id: 'Project 6' },
  { group: 'projects', id: 'Project 0' },
  { group: 'projects', id: 'Project 1' },
  { group: 'projects', id: 'Project 2' },
  { group: 'projects', id: 'Project 7' },
  { group: 'projects', id: 'Project 8' },
];

const phases = [
  { group: 'research', id: 'Research Phase' },
  { group: 'development', id: 'Application Development' },
  { group: 'maintenance', id: 'Maintenance' },
];

const capitalization = [
  { group: 'capitalization', id: 'Capitalize' },
  { group: 'expense', id: 'Expense' },
];

const linksPeople2Tickets = [
  {
    source: 'Conor Irwin',
    target: 'Ticket 0',
    value: 292364.15,
  },
  {
    source: 'Mohammad Sullivan',
    target: 'Ticket 25',
    value: 99826.9,
  },
  {
    source: 'Mohammad Sullivan',
    target: 'Ticket 14',
    value: 121499.84,
  },
  {
    source: 'Anna Graham',
    target: 'Ticket 40',
    value: 116990.34,
  },
  {
    source: 'Anna Graham',
    target: 'Ticket 32',
    value: 184318.12,
  },
  {
    source: 'Ayden Gates',
    target: 'Ticket 29',
    value: 109032.81,
  },
  {
    source: 'Ayden Gates',
    target: 'Ticket 28',
    value: 148421.62,
  },
  {
    source: 'Ayden Gates',
    target: 'Ticket 15',
    value: 31967.73,
  },
  {
    source: 'Juan Cole',
    target: 'Ticket 24',
    value: 23160.55,
  },
  {
    source: 'Juan Cole',
    target: 'Ticket 26',
    value: 20467.46,
  },
  {
    source: 'Juan Cole',
    target: 'Ticket 1',
    value: 52425.42,
  },
  {
    source: 'Lillian Stein',
    target: 'Ticket 23',
    value: 246831.12,
  },
  {
    source: 'Jake Barrera',
    target: 'Ticket 10',
    value: 31941.8,
  },
  {
    source: 'Jake Barrera',
    target: 'Ticket 12',
    value: 28994.15,
  },
  {
    source: 'Aaliyah Roth',
    target: 'Ticket 5',
    value: 126876.21,
  },
  {
    source: 'Aaliyah Roth',
    target: 'Ticket 2',
    value: 18363.66,
  },
  {
    source: 'Aaliyah Roth',
    target: 'Ticket 38',
    value: 48651.78,
  },
  {
    source: 'Nieve Ferrell',
    target: 'Ticket 36',
    value: 175697.47,
  },
  {
    source: 'Ayrton Lin',
    target: 'Ticket 44',
    value: 196096.52,
  },
  {
    source: 'Gethin Proctor',
    target: 'Ticket 6',
    value: 4962.17,
  },
  {
    source: 'Gethin Proctor',
    target: 'Ticket 17',
    value: 57164.24,
  },
  {
    source: 'Gethin Proctor',
    target: 'Ticket 31',
    value: 32154.89,
  },
  {
    source: 'Juanita Fowler',
    target: 'Ticket 21',
    value: 11387.79,
  },
  {
    source: 'Juanita Fowler',
    target: 'Ticket 20',
    value: 48804.83,
  },
  {
    source: 'Juanita Fowler',
    target: 'Ticket 43',
    value: 114488,
  },
  {
    source: 'Juanita Fowler',
    target: 'Ticket 45',
    value: 16268.28,
  },
  {
    source: 'Juanita Fowler',
    target: 'Ticket 33',
    value: 47178,
  },
  {
    source: 'Amna Vincent',
    target: 'Ticket 4',
    value: 52967.9,
  },
  {
    source: 'Amna Vincent',
    target: 'Ticket 11',
    value: 102199.48,
  },
  {
    source: 'Amna Vincent',
    target: 'Ticket 46',
    value: 36264.33,
  },
  {
    source: 'Bruno Bradley',
    target: 'Ticket 27',
    value: 130412.65,
  },
  {
    source: 'Sienna Chen',
    target: 'Ticket 7',
    value: 54738.68,
  },
  {
    source: 'Sienna Chen',
    target: 'Ticket 42',
    value: 109699.88,
  },
  {
    source: 'Sienna Chen',
    target: 'Ticket 47',
    value: 122383.24,
  },
  {
    source: 'Sienna Chen',
    target: 'Ticket 48',
    value: 17133.65,
  },
  {
    source: 'Arjun Holloway',
    target: 'Ticket 9',
    value: 122087.83,
  },
  {
    source: 'Mina Trujillo',
    target: 'Ticket 49',
    value: 290207.37,
  },
  {
    source: 'Jayson Molina',
    target: 'Ticket 8',
    value: 281845.62,
  },
  {
    source: 'Lacey Oneill',
    target: 'Ticket 19',
    value: 85112.31,
  },
  {
    source: 'Lacey Oneill',
    target: 'Ticket 37',
    value: 164034.63,
  },
  {
    source: 'Caspar Aguirre',
    target: 'Ticket 41',
    value: 107139.75,
  },
  {
    source: 'Zeeshan Reynolds',
    target: 'Ticket 35',
    value: 338153.13,
  },
  {
    source: 'Paige Finch',
    target: 'Ticket 18',
    value: 240920.23,
  },
  {
    source: 'Tianna Greer',
    target: 'Ticket 30',
    value: 244576.58,
  },
  {
    source: 'Alma Lara',
    target: 'Ticket 3',
    value: 165872,
  },
  {
    source: 'Leila Connor',
    target: 'Ticket 13',
    value: 219616.28,
  },
  {
    source: 'Emilia Sanchez',
    target: 'Ticket 34',
    value: 147879.69,
  },
  {
    source: 'Emilia Sanchez',
    target: 'Ticket 39',
    value: 188580.52,
  },
  {
    source: 'Elsie Knapp',
    target: 'Ticket 16',
    value: 124350.07,
  },
  {
    source: 'Darragh Dickerson',
    target: 'Ticket 22',
    value: 229498.35,
  },
];

const linksTickets2Projects = [
  {
    source: 'Ticket 8',
    target: 'Project 3',
    value: 281845.62,
  },
  {
    source: 'Ticket 4',
    target: 'Project 3',
    value: 52967.9,
  },
  {
    source: 'Ticket 40',
    target: 'Project 3',
    value: 116990.34,
  },
  {
    source: 'Ticket 46',
    target: 'Project 3',
    value: 36264.33,
  },
  {
    source: 'Ticket 32',
    target: 'Project 3',
    value: 184318.12,
  },
  {
    source: 'Ticket 25',
    target: 'Project 4',
    value: 99826.9,
  },
  {
    source: 'Ticket 10',
    target: 'Project 4',
    value: 31941.8,
  },
  {
    source: 'Ticket 14',
    target: 'Project 4',
    value: 121499.84,
  },
  {
    source: 'Ticket 19',
    target: 'Project 4',
    value: 85112.31,
  },
  {
    source: 'Ticket 1',
    target: 'Project 4',
    value: 52425.42,
  },
  {
    source: 'Ticket 3',
    target: 'Project 4',
    value: 165872.0,
  },
  {
    source: 'Ticket 37',
    target: 'Project 4',
    value: 164034.63,
  },
  {
    source: 'Ticket 28',
    target: 'Project 5',
    value: 148421.62,
  },
  {
    source: 'Ticket 7',
    target: 'Project 5',
    value: 54738.68,
  },
  {
    source: 'Ticket 41',
    target: 'Project 5',
    value: 107139.75,
  },
  {
    source: 'Ticket 45',
    target: 'Project 5',
    value: 16268.28,
  },
  {
    source: 'Ticket 48',
    target: 'Project 5',
    value: 17133.65,
  },
  {
    source: 'Ticket 26',
    target: 'Project 6',
    value: 20467.46,
  },
  {
    source: 'Ticket 9',
    target: 'Project 6',
    value: 122087.83,
  },
  {
    source: 'Ticket 13',
    target: 'Project 6',
    value: 219616.28,
  },
  {
    source: 'Ticket 35',
    target: 'Project 6',
    value: 338153.13,
  },
  {
    source: 'Ticket 39',
    target: 'Project 6',
    value: 188580.52,
  },
  {
    source: 'Ticket 21',
    target: 'Project 0',
    value: 11387.79,
  },
  {
    source: 'Ticket 22',
    target: 'Project 0',
    value: 229498.35,
  },
  {
    source: 'Ticket 27',
    target: 'Project 0',
    value: 130412.65,
  },
  {
    source: 'Ticket 12',
    target: 'Project 0',
    value: 28994.15,
  },
  {
    source: 'Ticket 34',
    target: 'Project 0',
    value: 147879.69,
  },
  {
    source: 'Ticket 15',
    target: 'Project 1',
    value: 31967.73,
  },
  {
    source: 'Ticket 44',
    target: 'Project 1',
    value: 196096.52,
  },
  {
    source: 'Ticket 38',
    target: 'Project 1',
    value: 48651.78,
  },
  {
    source: 'Ticket 24',
    target: 'Project 2',
    value: 23160.55,
  },
  {
    source: 'Ticket 11',
    target: 'Project 2',
    value: 102199.48,
  },
  {
    source: 'Ticket 17',
    target: 'Project 2',
    value: 57164.24,
  },
  {
    source: 'Ticket 49',
    target: 'Project 2',
    value: 290207.37,
  },
  {
    source: 'Ticket 31',
    target: 'Project 2',
    value: 32154.89,
  },
  {
    source: 'Ticket 20',
    target: 'Project 7',
    value: 48804.83,
  },
  {
    source: 'Ticket 29',
    target: 'Project 7',
    value: 109032.81,
  },
  {
    source: 'Ticket 5',
    target: 'Project 7',
    value: 126876.21,
  },
  {
    source: 'Ticket 6',
    target: 'Project 7',
    value: 4962.17,
  },
  {
    source: 'Ticket 18',
    target: 'Project 7',
    value: 240920.23,
  },
  {
    source: 'Ticket 16',
    target: 'Project 7',
    value: 124350.07,
  },
  {
    source: 'Ticket 43',
    target: 'Project 7',
    value: 114488.0,
  },
  {
    source: 'Ticket 47',
    target: 'Project 7',
    value: 122383.24,
  },
  {
    source: 'Ticket 30',
    target: 'Project 7',
    value: 244576.58,
  },
  {
    source: 'Ticket 33',
    target: 'Project 7',
    value: 47178.0,
  },
  {
    source: 'Ticket 2',
    target: 'Project 7',
    value: 18363.66,
  },
  {
    source: 'Ticket 23',
    target: 'Project 8',
    value: 246831.12,
  },
  {
    source: 'Ticket 42',
    target: 'Project 8',
    value: 109699.88,
  },
  {
    source: 'Ticket 36',
    target: 'Project 8',
    value: 175697.47,
  },
  {
    source: 'Ticket 0',
    target: 'Project 8',
    value: 292364.15,
  },
];

const linksProjects2Phases = [
  { source: 'Project 3', target: 'Research Phase', value: 142277.26 },
  { source: 'Project 4', target: 'Research Phase', value: 134342.58 },
  { source: 'Project 5', target: 'Research Phase', value: 69340.4 },
  { source: 'Project 6', target: 'Research Phase', value: 177981.04 },
  { source: 'Project 0', target: 'Research Phase', value: 109634.53 },
  { source: 'Project 1', target: 'Research Phase', value: 55143.21 },
  { source: 'Project 2', target: 'Research Phase', value: 101177.31 },
  { source: 'Project 7', target: 'Research Phase', value: 208355.52 },
  { source: 'Project 8', target: 'Research Phase', value: 164918.52 },

  { source: 'Project 3', target: 'Application Development', value: 497970.417 },
  { source: 'Project 4', target: 'Application Development', value: 470199.03 },
  { source: 'Project 5', target: 'Application Development', value: 242692.386 },
  { source: 'Project 6', target: 'Application Development', value: 622933.654 },
  { source: 'Project 0', target: 'Application Development', value: 383720.841 },
  { source: 'Project 1', target: 'Application Development', value: 193001.221 },
  { source: 'Project 2', target: 'Application Development', value: 354120.571 },
  { source: 'Project 7', target: 'Application Development', value: 885243.32 },
  { source: 'Project 8', target: 'Application Development', value: 577215.834 },

  { source: 'Project 3', target: 'Maintenance', value: 71138.63 },
  { source: 'Project 4', target: 'Maintenance', value: 67171.29 },
  { source: 'Project 5', target: 'Maintenance', value: 34670.2 },
  { source: 'Project 6', target: 'Maintenance', value: 88990.52 },
  { source: 'Project 0', target: 'Maintenance', value: 54817.26 },
  { source: 'Project 1', target: 'Maintenance', value: 27571.6 },
  { source: 'Project 2', target: 'Maintenance', value: 50588.65 },
  { source: 'Project 7', target: 'Maintenance', value: 104178.76 },
  { source: 'Project 8', target: 'Maintenance', value: 82459.26 },
];

const linksPhases2Capitalization = [
  {
    source: 'Application Development',
    target: 'Capitalize',
    value: 4226197.274,
  },
  { source: 'Research Phase', target: 'Expense', value: 1163170.97 },
  { source: 'Maintenance', target: 'Expense', value: 573785.17 },
];

const data = {
  nodes: [
    ...people,
    ...tickets,
    ...projects,
    ...phases,
    ...capitalization,
    { group: 'placeholder', id: '' }, // Use this placeholder to force sankey chart be bottom aligned
  ],
  links: [
    ...linksPeople2Tickets,
    ...linksTickets2Projects,
    ...linksProjects2Phases,
    ...linksPhases2Capitalization,
  ],
};

export { data };
