window.siteData = {
  meta: {
    title: 'Ben Hartline',
    description: 'Ben Hartline is a Computer Engineering student focused on software, robotics, and AI.',
  },
  brand: {
    name: 'Ben Hartline',
    scrollTarget: 'body',
  },
  resumeUrl: 'assets/Ben_Hartline_Resume_Spring_2026.pdf',
  nav: [
    { label: 'About', target: '#about', scrollTarget: '#about' },
    { label: 'Experience', target: '#experience', scrollTarget: '#experience' },
    { label: 'Projects', target: '#projects', scrollTarget: '#projects' },
    { label: 'Contact', target: '#contact', scrollTarget: '#contact' },
    { label: 'Download Resume', target: 'assets/Ben_Hartline_Resume_Spring_2026.pdf', external: true, style: 'primary' },
  ],
  hero: {
    title: "Hi, I'm Ben.",
    subtitle: 'I build solutions that solve real problems.',
    avatar: {
      src: 'assets/images/BenHeadshot2.jpg',
      alt: 'Ben Hartline headshot',
    },
    ctas: [
      { label: 'View My Work', type: 'scroll', target: '#projects', style: 'primary' },
      { label: 'Download Resume', type: 'link', target: 'assets/Ben_Hartline_Resume_Spring_2026.pdf', external: true, style: 'primary' },
      { label: 'ben@benhartline.com', type: 'link', target: 'mailto:ben@benhartline.com', style: 'secondary' },
    ],
  },
  about: {
    title: 'About Me',
    profile: {
      name: 'Ben Hartline',
      role: 'Hi! My name is Ben, I am studying Computer Engineering, Computer Science, & AI at the University of Kentucky.',
      location: '📍Lexington, KY & Cincinnati, OH',
      photo: {
        src: 'assets/Ben_Headshot.jpg',
        alt: 'Ben Hartline headshot',
      },
    },
    text: "I'm a Computer Engineering student with experience across Python, C++, and app/web development. I've worked on robotics and autonomous code, and I've built a video generation pipeline using MoviePy and ElevenLabs for narrated short form content.",
  },
  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Robot Technician',
        company: 'Starship Technologies',
        location: 'Lexington, KY',
        dates: 'Feb 2024 - Present',
        logo: {
          src: 'assets/images/starshipTechnologiesLogo.jpg',
          alt: 'Starship Technologies logo',
        },
        points: [
          'Diagnosed, repaired, and maintained autonomous delivery robots to ensure minimal downtime.',
          'Managed preventative maintenance and parts inventory for continuous fleet operations.',
          'Part time seasonal worker during the school year.',
        ],
      },
      {
        role: 'Software Engineer Intern',
        company: 'Cintas',
        location: 'Mason, OH',
        dates: 'May 2025 — Aug 2025',
        logo: {
          src: 'assets/images/cintasLogo.jpg',
          alt: 'Cintas logo',
        },
        points: [
          'Implemented a local logging library and database enhancements for a new internal mobile app, including automated log uploads to Azure.',
          'Developed a Google Maps API feature to identify optimal sales prospects along user routes and improved UI readability with new route selection options.',
          'Collaborated through daily stand ups using Git for version control.',
        ],
      },
      {
        role: 'IT / Software Engineering Intern',
        company: 'Cintas',
        location: 'Mason, OH',
        dates: 'May 2024 — Aug 2024',
        logo: {
          src: 'assets/images/cintasLogo.jpg',
          alt: 'Cintas logo',
        },
        points: [
          'Led development and testing of a new internal mobile app proof of concept.',
          'Collaborated with software engineers and field employees to gather feedback and refine requirements.',
          'Served as a subject matter expert, advising on next steps in app development.',
        ],
      },
    ],
  },
  projects: {
    title: 'Projects',
    items: [
      {
        title: 'Video Generation Pipeline',
        description: 'Python pipeline using MoviePy + ElevenLabs to generate narrated shorts with timing/subtitles.',
        images: [
          { src: 'assets/images/100kSubs.jpg', alt: '100k subscribers milestone', caption: 'Silver Play Button Award' },
        ],
        badges: ['Python', 'MoviePy', 'ElevenLabs'],
        points: [
          'Developed a Python based video generation pipeline using MoviePy and API integrations to dynamically create short form videos.',
          'Implemented structured data logging by exporting video metadata and performance metrics to Excel for analysis and content optimization.',
          'Scaled the system to produce viral content, contributing to 700M+ views and 200K+ subscribers across all platforms.',
          'Continuously updated and optimized the codebase to adapt to evolving social media algorithms, formats, and trends for maximum engagement.',
        ],
      },
      {
        title: 'Robotics Autonomous Control',
        description: 'Custom PID control + sensing for consistent autonomous performance in competitive robotics.',
        images: [
          { src: 'assets/images/MallOfAmericaSignatureEventWin.jpg', alt: 'Mall of America Signature Event win' },
          { src: 'assets/images/SpeedwaySignatureEventWin.jpg', alt: 'Speedway Signature Event win' },
          { src: 'assets/images/Team&AlliancePartnerOnStage.png', alt: 'Team and alliance partner on stage' },
          { src: 'assets/images/2022WorldChamps.jpg', alt: '2022 World Championship' },
          { src: 'assets/images/WinMoment2022.jpg', alt: '2022 win moment' },
          { src: 'assets/images/WorldsQualMatch.jpg', alt: 'Worlds qualification match' },
        ],
        badges: ['C++', 'Controls', 'Sensors'],
        points: [
          'VEX Robotics World Champion (2022) #1 out of ~20,000 teams worldwide; designed, built, programmed, tested, and drove competition robots using a rigorous engineering design process while collaborating at the highest competitive level.',
          'Co-founded and led a competitive VEX robotics team; owned full robot lifecycle (design, CAD, programming, documentation, driving) and mentored 2 local middle school teams, plus supported others at competitions and through online forums.',
          'Record setting season (single year): 13 World Championship qualifications (most ever) and longest win streak in VEX history.',
          'Season achievements: 42 total awards including 14x Tournament Champion, 11x Excellence Award, 10x Robot Skills Champion, Think Awards, CAD/Onshape awards, Community Service Google Award, and multiple finals placements.',
        ],
      },
      {
        title: 'Crypto Mining PC',
        description: 'Custom Ethereum mining rig built and operated for performance and efficiency.',
        images: [
          { src: 'assets/images/MiningPC.jpg', alt: 'Crypto Mining PC' },
        ],
        badges: ['Hardware', 'GPU Tuning', 'Ethereum'],
        points: [
          'Researched, built, and maintained a custom Ethereum mining PC, achieving ~99% uptime through active monitoring and tuning.',
          'Optimized GPU performance by overclocking for higher hashrate and undervolting to reduce power costs, mining until Ethereum\'s transition to proof of stake.',
          'Fully recouped hardware costs and ultimately sold the system, netting approximately $1,000 in profit.',
        ],
      },
      {
        title: 'Portfolio (this site)',
        description: 'Deployed on GitHub Pages with Cloudflare DNS; clean, fast, and simple.',
        badges: ['HTML/CSS', 'GitHub Pages', 'Cloudflare'],
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        title: 'Bachelor of Engineering (BE) - Computer Engineering, Computer Science, & Artificial Intelligence',
        school: 'University of Kentucky Pigman College of Engineering',
        dates: '2023 - 2027',
        logo: { src: 'assets/images/ukyLogo.jpg', alt: 'University of Kentucky logo' },
        description: '4.0/4.0 GPA to date. Triple major.',
        coursework: [
          'Algorithms',
          'Data Structures',
          'Program Design (OOP)',
          'Software Engineering',
          'Embedded Systems',
          'Digital Logic Design',
          'Engineering Computing',
          'Systems Programming',
          'Computer Organization',
          'AC & DC Circuits',
          'Electronics',
          'Signals and Systems',
          'Computer Architecture',
          'Gen AI',
        ],
        badges: ['C++', 'Python', 'Controls'],
      },
    ],
  },
  skills: {
    title: 'Skills',
    intro: 'A snapshot of what I use most:',
    items: ['Python', 'C++', 'Kotlin Multiplatform', 'Flutter', 'Embedded / ADC', 'Git', 'Linux / SSH', 'MoviePy'],
  },
  contact: {
    title: 'Contact',
    text: "I'm always open to ideas, projects, or joining ambitious teams. Please feel free to reach out!",
    links: [
      { label: 'ben@benhartline.com', href: 'mailto:ben@benhartline.com', icon: 'assets/icons/email.png' },
      { label: 'GitHub', href: 'https://github.com/BenHartline', icon: 'assets/icons/github.png', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ben-hartline/', icon: 'assets/icons/linkedin.png', external: true },
    ],
  },
  footer: {
    prefix: '©',
    owner: 'Ben Hartline',
    note: 'Built with HTML/CSS',
  },
};
