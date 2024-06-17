export interface FooterDataType {
  title: String;
  links: Array<String>;
}

export const footerData: FooterDataType[] = [
  {
    title: 'Services',
    links: [
      'Forex Trading',
      'Technical Analysis',
      'Algorithmic Trading',
      'Risk Management',
    ],
  },
  {
    title: 'Trustpilot',
    links: [
      'How Trustpilot Works',
      'Transparency Report',
      'Press',
      'Investor Relations',
      'Community',
      'Trust in Reviews',
      'Help Center',
    ],
  },
  {
    title: 'Business',
    links: [
      'Trustpilot Business',
      'Products',
      'Plans & Pricing',
      'Business Login',
      'Blog for Business',
    ],
  },
];
