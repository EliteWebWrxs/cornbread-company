// Populate verified business details before launch. Never use placeholder contact details.
export const site = {
  name: 'Cornbread & Company',
  alternateName: 'Cornbread and Company',
  origin: '',
  // Primary line, E.164 for tel: links and schema.
  phone: '+17202979861',
  phones: [
    { display: '(720) 297-9861', tel: '+17202979861' },
    { display: '(720) 404-0424', tel: '+17204040424' }
  ],
  email: 'cornbreadandcompany2027@gmail.com',
  mode: 'catering',
  tagline: 'Bringing People Together, One Plate at a Time',
  hours: [
    ['Sunday–Thursday', '11 AM–8 PM'],
    ['Friday', '11 AM–5 PM'],
    ['Saturday', 'Closed for Sabbath']
  ],
  areas: {
    Denver: 'Denver, Five Points, Park Hill, Montbello, Green Valley Ranch, Central Park, RiNo',
    Arapahoe: 'Aurora, Centennial, Englewood, Greenwood Village, Glendale, Littleton',
    Adams: 'Thornton, Westminster, Northglenn, Commerce City, Brighton, Federal Heights',
    Jefferson: 'Lakewood, Arvada, Wheat Ridge, Golden',
    Douglas: 'Highlands Ranch, Lone Tree, Parker, Castle Rock',
    Broomfield: 'Broomfield'
  }
};
export const routes = [
  '/',
  '/catering',
  '/catering/corporate',
  '/catering/private',
  '/menu',
  '/specials',
  '/order',
  '/about',
  '/gallery',
  '/contact',
  '/faq',
  '/privacy',
  '/accessibility'
];
