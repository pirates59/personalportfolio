import {
 
    backend,
    creator,
    web,
    javascript,
    IIC,
    manariddhi,
    html,
    cloud,
    css,
    reactjs,
    vehicle,
    tailwind,
   python,
   django,
    // mongodb,
    git,
    figma,
    docker
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    // carrent,
    // jobit,
    // tripguide,
    // threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Cloud Developer",
      icon: creator,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
   
   
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Docker",
      icon: docker,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "Cloud",
      icon: cloud,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "IIC Resource Department",
      icon: IIC,
      iconBg:  "#E6DEDD",
      date: "Jun 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
   
    {
      title: "Django Developer",
      company_name: "Manariddhi",
      icon: manariddhi,
      iconBg: "#383E56",
      date: "Jan 2023 - Apr 2024",
      points: [
        "Implemented a social networking web app to support peers with mental health issues.",
"Employed individual account management feature enabling users to create, update and delete posts on the website.",
"Integrated HTML/CSS and Django framework for backend functionality.",
"Developed admin panel for user management.",
      ],
    },
    {
      title: "IOT Developer",
      company_name: "Voice Controlled Vehicle",
      icon: vehicle,
      iconBg: "#383E56",
      date: "Dec 2023",
      points: [
        "Developed voice recognition system where vehicle's movements were controlled using voice commands.",
        "Employed Arduino IDE for writing code and connected to Arduino hardware to upload code.",
        "Implemented object detection system using ultra sonic sensor and vehicle response to obstacles in the vehicle's path.",
        "Added Bluetooth connectivity for voice control monitoring via a mobile app."
      ],
    },
    {
      title: " Python Developer",
      company_name: "Store Management",
      icon: python,
      iconBg: "#383E56",
      date: "Aug 2023",
      points: [
        "Designed and implemented inventory management system for tracking stock levels in real time.",
"Python was integrated for overall functionalities like stock entry, bill generation and order tracking.",
"Integrated alerts and automatic reorder generation when stock levels fall below.",
       
      ],
    },
    {
      title: "Web Developer",
      company_name: "eduTrek",
      icon: django,
      iconBg: "#383E56",
      date: "May 2023",
      points: [
        "Designed an efficient attendance tracking system of students.",
"Displayed comprehensive dashboard of student performance metrics and trends.",
"Utilized HTML/CSS, Django and Figma for overall development.",
"Implemented secure portal for parents to view their child's attendance and performance.",
       
      ],
    },
  ];
  
  
  
  
  export { services, technologies, experiences };