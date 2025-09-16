export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


// NAVIGATION
// export const NAV_LINKS = [
//   { href: '/', key: 'services', label: 'Services' },
//   { href: '/', key: 'contact_us', label: 'Contact Us' },
// ];


export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Knowledgeable Local Guides',
    icon: '/map.svg',
    variant: 'green',
    description:
      'Make the most of your journey with our knowledgeable local guides who bring destinations to life. Our guides are passionate about sharing the culture, history, and hidden gems of each location, providing you with a richer travel experience.',
  },
  {
    title: '  Personalized Tour Packages',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Our experienced team of travel experts crafts personalized tour packages tailored to your interests and budget.Explore the world with confidence, knowing that every detail, from transportation to activities, is optimized to give you the best value for your money.Choose from a variety of pre- designed packages or let us create a unique itinerary just for you.",
  },
  {
    title: 'Transparent Pricing',
    icon: '/price.svg',
    variant: 'green',
    description:
      'At BudgetVoyage, we believe in transparency. Our pricing is clear, with no hidden fees or surprises. We work hard to secure the best deals for accommodations, transportation, and activities, passing the savings directly to you.',
  },
  {
    title: ' Budget-Friendly Accommodations',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Enjoy a wide range of budget-friendly hotel options that cater to various preferences and needs. Whether you`re looking for cozy hostels, economical hotels, or discounted stays in reputable chains, we have carefully curated options that ensure comfort without compromising your budget.',
  },
  {
    title: ' 24/7 Customer Support',
    icon: '/support.svg',
    variant: 'orange',
    description:
      'Your comfort and satisfaction are our top priorities. Our dedicated customer support team is available around the clock to assist you with any queries, concerns, or unexpected situations that may arise during your journey.',
  },
  {
    title: ' Value-Added Services',
    icon: '/service.svg',
    variant: 'orange',
    description:
      'We go the extra mile to enhance your travel experience. Benefit from exclusive discounts, complimentary services, and partnerships with local businesses to make your trip more enjoyable without exceeding your budget.',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Us',
      'Privacy Policy',
      'Contact Us',
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '+234-806-195-1829' },
    { label: 'Email Officer', value: 'Jolihst.info@gmail.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    { icon: '/facebook.svg', url: ''},
    { icon: '/instagram.svg', url: 'https://instagram.com/jolitrips' },
    { icon: '/twitter.svg', url: 'https://x.com/jolihst' },
    { icon: '/youtube.svg', url: '' },
  ],
};
