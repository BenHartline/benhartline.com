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
      src: 'assets/Ben_Headshot.jpg',
      alt: 'Ben Hartline headshot',
    },
    ctas: [
      { label: 'View My Work', type: 'scroll', target: '#projects', style: 'primary' },
      { label: 'Download Resume', type: 'link', target: 'assets/Ben_Hartline_Resume_Spring_2026.pdf', external: true, style: 'primary' },
      { label: 'ben@benhartline.com', type: 'link', target: 'mailto:ben@benhartline.com', style: 'secondary' },
    ],
  },
  about: {
    title: 'About',
    text: "I'm a Computer Engineering student with experience across Python, C++, and app/web development. I've worked on robotics and autonomous code, and I've built a video-generation pipeline using MoviePy and ElevenLabs for narrated short-form content.",
  },
  experience: {
    title: 'Experience',
    items: [
      {
        title: 'Software Engineering Intern',
        description: 'Built autonomous routines, tuned PID/controls, and integrated sensors for consistent competition runs.',
        badges: ['C++', 'Controls', 'Sensors'],
      },
      {
        title: 'Embedded / Hardware Projects',
        description: 'Hands-on PCB/wiring work plus embedded bring-up for robotics and custom hardware experiments.',
        badges: ['Embedded', 'PCBs', 'Debugging'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    items: [
      {
        title: 'Video Generation Pipeline',
        description: 'Python pipeline using MoviePy + ElevenLabs to generate narrated shorts with timing/subtitles.',
        badges: ['Python', 'MoviePy', 'ElevenLabs'],
      },
      {
        title: 'Robotics Autonomous Control',
        description: 'Custom PID control + sensing for consistent autonomous performance in competitive robotics.',
        badges: ['C++', 'Controls', 'Sensors'],
      },
      {
        title: 'Custom PCB / Hardware Work',
        description: 'Hands-on experience building and working with PCBs/wiring in real robotics hardware environments.',
        badges: ['Hardware', 'Debugging'],
      },
      {
        title: 'Portfolio (this site)',
        description: 'Deployed on GitHub Pages with Cloudflare DNS; clean, fast, and simple.',
        badges: ['HTML/CSS', 'GitHub Pages', 'Cloudflare'],
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
        title: 'Computer Engineering (B.S.)',
        description: 'Coursework across software, embedded systems, controls, and AI; active in robotics projects and competitions.',
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
