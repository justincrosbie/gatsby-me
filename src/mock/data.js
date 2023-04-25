import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_0247.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  paragraphFour: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'This site!',
    info: 'This is my personal website, its written in Gatsby and React, using a standard template I found on the interwebs. ',
    info2: 'Who knows what I will do next with it....',
    url: 'https://github.com/justincrosbie/gatsby-me'
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Stuff I do at work',
    info: 'I won\t go into detail here, for fear of violating DRY principles ;) Check out my resume for details!',
    info2: 'But I have developed many full-stack web apps, mostly in Angular with Java or Node REST backends\n\nThese days, while I am still heavily involved in development, most of my responsibilities are centred around ensuring the team and the product are successful, and the customers are happy :)',
    info3: 'Mostly this is around ensuring the team are using best Agile practices (this is an art in itself, and not easy to get right!), Story writing (also another art - if you get this right, that is half the battle, if you get it - meh, almost right - you are plunged into the abyss of misaligned objectives and perpetual scope creep!!)',
    info4: 'Oh and tests. You didn\'t write enough tests!',
    url: ''
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Secure Venue',
    info: 'This is a mobile app platform i developed for the clubs industry',
    info2: 'Its developed in Xamarin with a Serverless backend hosted in AWS using Lanbda and S3. It sends push notifications using Pushwoosh',
    url: 'https://securevenue.com.au'
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Many hobby projects',
    info: 'I still love tinkering around with all the goodies out there in my spare time :) I\'ve developed projects in Angular, React, running on Serverless Lambdas in AWS',
    info2: 'Mostly just for fun and to getting the learns',
    url: 'https://github.com/justincrosbie'
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
