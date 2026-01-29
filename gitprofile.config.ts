// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'wowser20', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['wowser20/go-rest-proxy', 'Nuxify/celeste'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects & Projects I\'ve Contributed To',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Forward Proxy Server using Go',
          description:
            'Simple forward proxy server for securing HTTP requests.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/wowser20/go-rest-proxy',
        },
        {
          title: 'Nuxie: An AI-Powered Chat Platform Using LLM & RAG Technology',
          description:
            'Developed the APIs for user onboarding and connected the platform with various LLMs.',
          imageUrl:
            'https://nuxify.tech/images/case-studies/nuxie/laptop-5.webp',
          link: 'https://hello-nuxie.nuxify.tech/',
        },
        {
          title: 'Certifika: A Multi-Chain NFT-Based Certificate Based Event Certification Platform',
          description:
            'Developed the APIs and integrated smartcontracts.',
          imageUrl:
            'https://nuxify.tech/images/case-studies/certifika/laptop-1.webp',
          link: 'https://certifika.org/',
        },
        {
          title: 'Decentralized and Instant Voting Platform Powered By Ethereum',
          description:
            'Due to NDA agreement I could not disclose the actual name of the project. Developed the APIs and integrated smartcontract.',
          imageUrl:
            'https://nuxify.tech/images/case-studies/decentralized-voting/laptop-2.webp',
          link: 'https://nuxify.tech/works/decentralized-voting',
        }
      ],
    },
  },
  seo: { title: 'AER', description: 'Backend Developer', imageURL: 'https://avatars.githubusercontent.com/u/100786249?v=4' },
  social: {
    linkedin: 'andrea-ella-remoreras-759a051b9',
    dev: 'wowser20',
    website: 'https://github.com/wowser20/portfolio',
    phone: '09070841101',
    email: 'ae.remoreras.dev@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Git',
    'Docker',
    'Go',
    'MySQL',
    'JavaScript',,
    'CSS',
    'Java',
  ],
  experiences: [
    {
      company: 'Nuxify Inc.',
      position: 'Software Engineer',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://nuxify.tech/',
    },
    {
      company: 'Department of Science & Technology',
      position: 'Full Stack Developer Intern',
      from: 'July 2022',
      to: 'August 2022',
      companyLink: 'https://www.stii.dost.gov.ph/',
    },
  ],
  certifications: [
    {
      name: 'MTA: Introduction to Programming Using Java - Certified 2020',
      body: 'Earners of the MTA: Introduction to Programming Using Java validates the skills and knowledge to write, debug and maintain well-formed, well documented Java code. The MTA program provides an appropriate entry point to a future career in technology.',
      year: 'January 2020',
      link: 'https://www.credly.com/badges/e8bf15a5-3190-412a-98c1-3d40ecb08efc?source=linked_in_profile',
    },
    {
      name: 'IT Specialist - Databases',
      body: 'Earners of this badge demonstrate foundational knowledge of how to design and query relational databases, such as MySQL, Microsoft SQL Server, or Oracle.',
      year: 'July 2022',
      link: 'https://www.credly.com/badges/235e3cc1-3ccc-458b-865b-9ed791b61248?source=linked_in_profile',
    }
  ],
  educations: [
    {
      institution: 'University Of Mindanao',
      degree: 'Bachelor of Science in Computer Science',
      from: '2019',
      to: '2023',
    }
  ],
  publications: [
    {
      title: 'Applying Batch Normalization and Dropout for CNN on Dermoscopic Images for Skin Cancer Classification',
      conferenceName: 'Undergraduate Thesis',
      journalName: '',
      authors: 'Ma. Hannah Budiongan, Andrea Ella Remoreras, Tom James Yap',
      link: 'https://onlineservices.ipophil.gov.ph/CopyrightSearch/CR_Registrations03smry.asp?so1_CRRegNo=LIKE&sv1_CRRegNo=2023-06151-A&so1_CCRIssuanceDate=%3E%3D&sv1_CCRIssuanceDate=&so2_CCRIssuanceDate=%3C%3D&sv2_CCRIssuanceDate=&so1_Title=LIKE&sv1_Title=&so1_CRHolder=LIKE&sv1_CRHolder=&so1_CRClass=LIKE&sv1_CRClass=&Submit=SEARCH',
      description:
        'Improvised the CNN model for skin cancer classification and evaluated it with existing CNN model.',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️ <a class="text-primary" href="https://github.com/wowser20" 
    target="_blank"
    rel="noreferrer"
    >wowser20</a>`,

  enablePWA: true,
};

export default CONFIG;
