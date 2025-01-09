/* eslint-disable import/extensions */

// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import UIUX from '../assets/images/Services/Design.png';
import ML from '../assets/images/Services/ML.png';

// Portfolio Img Imports
import Aploy from '../assets/images/Portfolio/Aploy.png';
import SSfinance from '../assets/images/Portfolio/SSfinance.png';
import KMlittle from '../assets/images/Portfolio/KMlittle.png';

// Advantages
import ReactImg from '../assets/images/Advantages/React.png';
import JS from '../assets/images/Advantages/JS.png';
import Python from '../assets/images/Advantages/Python.png';
import Express from '../assets/images/Advantages/Express.png';
import MySQL from '../assets/images/Advantages/MySQL.png';
import MongoDB from '../assets/images/Advantages/MongoDB.png';
import NodeJS from '../assets/images/Advantages/Node_JS.png';
import Flutter from '../assets/images/Advantages/Flutter.png';
import AWS from '../assets/images/Advantages/AWS.png';
import Figma from '../assets/images/Advantages/Figma.png';
import Html from '../assets/images/Advantages/Html.png';
import Bootstrap from '../assets/images/Advantages/Bootstrap.png';
import Css from '../assets/images/Advantages/Css.png';
import TailwindCss from '../assets/images/Advantages/Tailwind_Css.png';
import Django from '../assets/images/Advantages/Django.png';

// TeamMembers
import CEO from '../assets/images/TeamMembers/ASINRAJA.jpg';
import COO from '../assets/images/TeamMembers/PARTHIBAN.jpg';
import CTO from '../assets/images/TeamMembers/ASWIN.jpg';
import ProjectManager from '../assets/images/TeamMembers/ESHAN.jpg';
import MLDev from '../assets/images/TeamMembers/DIWAKAR.jpg';
import Lithish from '../assets/images/TeamMembers/LITHISHS.jpg';
import Raksith from '../assets/images/TeamMembers/RAKSITH.jpg';
import Naveen from '../assets/images/TeamMembers/NAVEEN.jpg';

export const Services = [
  {
    title: 'Full stack Development',
    imageUrl: Web,
    animation: 'left',
  },
  {
    title: 'Mobile Development',
    imageUrl: Mobile,
    animation: 'up',
  },
  {
    title: 'UI/UX',
    imageUrl: UIUX,
    animation: 'right',
  },
  {
    title: 'Machine Learning',
    imageUrl: ML,
    animation: 'up',
  },
];

export const Portfolios = [
  {
    id: 'asd1293uasdads1',
    title: 'Aploy - Digital Marketing',
    imageUrl: Aploy,
    type: 'Website',
    Description: `Aploy is a powerful digital marketing platform that enhances your online presence through effective strategies and data-driven insights. 
Streamline your campaigns, optimize your content, and grow your audience with ease. 🚀`,
    responsibility: ['Full Stack Development'],
    credit: 'https://aploy-digital-marketing-agency.vercel.app/',
  },
  {
    id: 'asd1293uhjkhkjh2',
    title: 'Finance App',
    imageUrl: SSfinance,
    type: 'Website',
    Description: `Finance App helps users manage their personal finances with features like budget tracking, expense logging, and financial goal setting. Stay within budget, visualize spending trends, and achieve your financial goals seamlessly. 🚀`,
    responsibility: ['Full Stack Development'],
    credit: 'https://finance-tracker-ymqi.vercel.app/',
  },
  {
    id: 'asd1293uvbvcbbd3',
    title: 'KM Little Master',
    imageUrl: KMlittle,
    type: 'Graphic Designer',
    Description: `KM Little Master excels in crafting visually stunning and user-centric designs, elevating digital interfaces with creativity and precision. Transform your brand's visual identity and user experience through innovative design solutions. 🎨✨`,
    responsibility: ['UI/UX Design'],
    credit: 'https://www.figma.com/design/QoVrUuUGhnK1CQ5aefmop0/KM-LITTLE-MASTER?node-id=0-1&t=Q5LFjZcisCR8uZMD-1',
  },
];

export const Advantages = [
  [
    { title: 'React', imageUrl: ReactImg, style: "w-[65px] h-[45px] mb-3" },
    { title: 'JS', imageUrl: JS, style: "w-[50px] h-[45px] mb-3" },
  ],
  [
    { title: 'Python', imageUrl: Python, style: "w-[50px] h-[45px] mb-3" },
    { title: 'Express', imageUrl: Express, style: "w-[55px] h-[45px] mb-3" },
  ],
  [
    { title: 'MySQL', imageUrl: MySQL, style: "w-[65px] h-[45px] mb-3" },
    { title: 'MongoDB', imageUrl: MongoDB, style: "w-[65px] h-[45px] mb-3" },
  ],
  [
    { title: 'Node JS', imageUrl: NodeJS, style: "w-[50px] h-[45px] mb-3" },
    { title: 'Flutter', imageUrl: Flutter, style: "w-[50px] h-[45px] mb-3" },
  ],
  [
    { title: 'AWS', imageUrl: AWS, style: "w-[50px] h-[30px] mb-3" },
    { title: 'Figma', imageUrl: Figma, style: "w-[50px] h-[30px] mb-3" },
  ],
  [
    { title: 'Bootstrap', imageUrl: Bootstrap, style: "w-[50px] h-[45px] mb-3" },
    { title: 'Html', imageUrl: Html, style: "w-[45px] h-[45px] mb-3" },
  ],
  [
    { title: 'Css', imageUrl: Css, style: "w-[50px] h-[45px] mb-3" },
    { title: 'Tailwind Css', imageUrl: TailwindCss, style: "w-[50px] h-[30px] mb-3" },
  ],
  [
    { title: 'Django', imageUrl: Django, style: "w-[65px] h-[30px] mb-3" },
  ],
];

export const TeamMembers = [
  { name: 'Asin Raja M D', position: 'Founder & CEO', imageUrl: CEO },
  { name: 'Parthiban S', position: 'Co - Founder & COO', imageUrl: COO },
  { name: 'Aswin V K', position: 'Co - Founder & CTO', imageUrl: CTO },
  { name: 'Eshan', position: 'Project Manager', imageUrl: ProjectManager },
  { name: 'Diwakar', position: 'ML Developer', imageUrl: MLDev },
  { name: 'Lithish', position: 'Full Stack Developer', imageUrl: Lithish },
  { name: 'Raksith', position: 'Front-end Developer', imageUrl: Raksith },
  { name: 'Naveen Krishna', position: 'Full Stack Developer', imageUrl: Naveen },
];
