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
      { label: 'ben@benhartline.com', type: 'link', target: 'mailto:ben@benhartline.com', style: 'primary' },
    ],
  },
  about: {
    title: 'About Me',
    profile: {
      name: 'Ben Hartline',
      role: 'Hi! My name is Ben, I am studying Computer Engineering, Computer Science, & AI at the University of Kentucky.',
      location: '📍Lexington, KY & Cincinnati, OH',
      photo: {
        src: 'assets/images/BenHeadshot.jpg',
        alt: 'Ben Hartline headshot',
      },
    },
    text: "I’m highly driven, competitive, and motivated by solving hard problems. I thrive in fast-paced environments, take ownership of my work, and enjoy collaborating to turn ideas into real outcomes. I value feedback, continuous improvement, and strong follow-through.",
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
          'Diagnose, repair, and maintain autonomous delivery robots to ensure minimal downtime.',
          'Manage preventative maintenance and parts inventory to support continuous fleet operations.',
          'Work part-time on a seasonal basis during the school year.',
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
          { src: 'assets/images/VideoGenerationScriptsBlurred.png', alt: 'Blurred Video Generation Scripts', caption: 'Blurred View Of Video Generation Scripts' },
        ],
        points: [
          'Developed a Python based video generation pipeline using MoviePy and API integrations to dynamically create short form videos.',
          'Implemented structured data logging by exporting video metadata and performance metrics to Excel for analysis and content optimization.',
          'Scaled the system to produce viral content, contributing to 700M+ views and 200K+ subscribers across all platforms.',
          'Continuously updated and optimized the codebase to adapt to evolving social media algorithms, formats, and trends for maximum engagement.',
        ],
      },
      {
        title: 'Vex Robotics',
        description: 'Programmer | Builder | Driver',
        images: [
          { src: 'assets/images/MallOfAmericaSignatureEventWin.jpg', alt: 'Mall of America Signature Event win' },
          { src: 'assets/images/SpeedwaySignatureEventWin.jpg', alt: 'Speedway Signature Event win' },
          { src: 'assets/images/Team&AlliancePartnerOnStage.png', alt: 'Team and alliance partner on stage' },
          { src: 'assets/images/2022WorldChamps.jpg', alt: '2022 World Championship' },
          { src: 'assets/images/WinMoment2022.jpg', alt: '2022 win moment' },
          { src: 'assets/images/WorldsQualMatch.jpg', alt: 'Worlds qualification match' },
          { src: 'assets/images/SpeedwaySignatureEventWin2.jpg', alt: 'Speedway Signature Event win 2' },
          { src: 'assets/images/StateChamps.jpg', alt: 'State championship' },
          { src: 'assets/images/CompetetionWithMentoredTeam.jpg', alt: 'Competition with mentored team' },
          { src: 'assets/images/HauntedSignatureEventWin.jpg', alt: 'Haunted Signature Event win' },
          { src: 'assets/images/KalahariSignatureEventWin.jpg', alt: 'Kalahari Signature Event win' },
          { src: 'assets/images/KYStatesSweep.jpg', alt: 'Kentucky States sweep' },
          { src: 'assets/images/LambeauFieldSignatureEventWin.jpg', alt: 'Lambeau Field Signature Event win' },
          { src: 'assets/images/MentoringMiddleSchoolRobotics.jpg', alt: 'Mentoring middle school robotics' },
          { src: 'assets/images/RiverBotsSignatureEventWin.jpg', alt: 'River Bots Signature Event win' },
        ],
        points: [
          'VEX Robotics World Champion (2022), #1 out of ~20,000 teams worldwide; designed and built competition robots (CAD → prototyping → machining → assembly) and programmed autonomous control systems in C++ including motor control, sensor integration, and custom PID loops for reliable match performance.',
          'Co-founded and led a competitive VEX robotics team; owned the full robot lifecyclemechanical design, CAD, embedded programming, autonomous routines, documentation, and competition driving while mentoring 2 middle school teams and supporting others at events and through online forums.',
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
        points: [
          'Researched, built, and maintained a custom Ethereum mining PC, achieving ~99% uptime through active monitoring and tuning.',
          'Optimized GPU performance by overclocking for higher hashrate and undervolting to reduce power costs, mining until Ethereum\'s transition to proof of stake.',
          'Fully recouped hardware costs and ultimately sold the system, netting approximately $1,000 in profit.',
        ],
      },
      {
        title: 'Portfolio (this site)',
        description: 'Deployed on GitHub Pages with Cloudflare DNS; clean, fast, and simple.',
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        title: 'Bachelor of Engineering (BE) - Computer Engineering, Computer Science, & Artificial Intelligence',
        school: 'University of Kentucky Pigman College of Engineering',
        dates: 'Aug 2023 - May 2027',
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
      },
    ],
  },
  skills: {
    title: 'Skills',
    intro: 'A snapshot of what I use most:',
    items: [
      // Programming & Languages
      'Python',
      'C++',
      'C',
      'Kotlin',
      'Kotlin Multiplatform',
      'Jetpack Compose',
      'MATLAB',
      'Verilog',

      // Software & Tools
      'Git',
      'GitHub',
      'Jira',
      'Grafana',
      'Visual Studio',
      'Android Studio',
      'Microsoft 365',
      'Google Workspace',
      'OnShape',
      'Autodesk Inventor',
      'Premiere Pro',
      'MoviePy',
      'API Integrations',
      'Azure',
      'Data Logging & Telemetry',

      // Embedded / Hardware
      'FPGA Development',
      'Sensor Integration',
      'Robotics',
      'Soldering',
      'Digital Multimeter',
      'CNC Lathe',
      'Router & Laser Machining',
      'Test Bench Operation',

      // AI / Data
      'AI Tools (ChatGPT, Gemini)',
      'Data Visualization',
    ],
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
