import {
  AiOutlineHome,
  AiOutlineCalculator,
  AiOutlineSetting,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { RiUserLine } from "react-icons/ri";

// icon sidebar
import {
  FaRegLightbulb,
  FaFacebookF,
  FaInstagram,
  FaShippingFast,
  FaLine,
  FaPython,
  FaNodeJs,
  FaReact,
  FaDocker,
} from "react-icons/fa";
import { CgCardClubs } from "react-icons/cg";
import { TbCSharp, TbMailOpened } from "react-icons/tb";
import { GoMail } from "react-icons/go";
import { GiChart } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { FiLayers } from "react-icons/fi";
import { SiMongodb } from "react-icons/si";
import { BsPhone } from "react-icons/bs";
import { BsPhoneVibrate, BsVectorPen } from "react-icons/bs";
import {
  MdShareLocation,
  MdLocalShipping,
  MdOutlineLocalShipping,
} from "react-icons/md";



// ----------------------------------------------------------------
export const menu = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    text: "resume",
    url: "/resume",
    icon: <RiUserLine />,
  },
  {
    id: 3,
    text: "portfolio",
    url: "/portfolio",
    icon: <FaRegLightbulb />,
  },
  {
    id: 4,
    text: "blog",
    url: "/blog",
    icon: <CgCardClubs />,
  },
  {
    id: 5,
    text: "contact",
    url: "/contact",
    icon: <TbMailOpened />,
  },
];

export const socialIcon = [
  {
    id: 1,
    icon: <FaFacebookF />,
    text: "Parinya Khemthong",
    class: "facebook",
  },
  {
    id: 2,
    icon: <FaLine />,
    text: "parinya.earth",
    class: "line",
  },
  // {
  //   id: 3,
  //   icon: <FaGithub />,
  //   text: 
  //   class: "github",
  // },
  {
    id: 4,
    icon: <FaInstagram />,
    text: "exrth_parinya",
    class: "instagram",
  },
];

export const side = [
  {
    id: 1,
    text: "Node.js",
    class: "skill1",
    icon: <FaNodeJs/>
  },
  {
    id: 2,
    text: "React",
    class: "skill2",
    icon: <FaReact/>
  },
  {
    id: 3,
    text: "Python",
    class: "skill3",
    icon: <FaPython/>
  },
  {
    id:4,
    text: "C#",
    class: "skill4",
    icon: <TbCSharp/>
  },
  {
    id:5,
    text: "SQL",
    class: "skill5",
    icon: <GrMysql/>
  },
  {
    id:6,
    text: "MongoDB",
    class: "skill6",
    icon: <SiMongodb/>
  },
  {
    id:7,
    text: "Docker",
    class: "skill7",
    icon: <FaDocker/>
  },
  {
    id:8,
    text: "Gitbranch", 
    class: "skill8",
    icon: <BiGitBranch/>,
  }
];

export const about = [
  {
    deatils: [
      {
        text: "My Name",
        value: "Parinya Khemthong",
        icon: <RiUserLine />,
      },
      {
        text: "My Age",
        value: "23 Years",
        icon: <AiOutlineCalculator />,
      },
      { text: "Email Address", value: "parinya2541@hotmail.com", icon: <GoMail /> },
      {
        text: "Phone Number",
        value: "083-159-8802",
        icon: <BsPhoneVibrate />,
      },
      {
        text: "Address",
        value: "Click Here to View Map.",
        icon: <MdShareLocation />,
      },
    ],
    bio: [
      {
        para1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo. Quis ipsum suspendisse ultrices gravida.",
        para2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        para3:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        images: "./images/bio.png",
      },
    ],

    serives: [
      {
        id: 1,
        icon: <AiOutlineSetting />,
        title: "Web Development",
        text: "from scratch",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 2,
        icon: <BsVectorPen />,
        title: "UX recherche",
        text: "data collection",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 3,
        icon: <FiLayers />,
        title: "UI design",
        text: "creativ design",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 4,
        icon: <BsPhone />,
        title: "Application",
        text: "stand alone",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 5,
        icon: <AiOutlineShareAlt />,
        title: "Social Media",
        text: "digital product",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 6,
        icon: <GiChart />,
        title: "Search Engine",
        text: "page rank",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
    ],

    review: [
      {
        id: 1,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Edward Johnson",
        link: "gorkcoder.com",
        cover: "./images/aut1.jpg",
      },
      {
        id: 2,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Gork Coder",
        link: "gorkcoder.com",
        cover: "./images/aut2.jpg",
      },
      {
        id: 3,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Edward Johnson",
        link: "gorkcoder.com",
        cover: "./images/aut3.jpg",
      },
    ],

    price: [
      {
        id: 1,
        icon: <MdOutlineLocalShipping />,
        title: "STARTER PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "27.00",
      },
      {
        id: 2,
        icon: <MdLocalShipping />,
        title: "BUSINESS PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "47.00",
      },
      {
        id: 3,
        icon: <FaShippingFast />,
        title: "PRO PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "97.00s",
      },
    ],
  },
];
