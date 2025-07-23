import icon1 from "../../../../public/assets/techlcon.png";
import icon2 from "../../../../public/assets/techIcon3.png";
import icon3 from "../../../../public/assets/techIcon2.png";
import image1S from "../../../../public/assets/technology/software/1.png";
import image2S from "../../../../public/assets/technology/software/2.png";
import image3S from "../../../../public/assets/technology/software/3.png";
import image4S from "../../../../public/assets/technology/software/4.png";
import image1C from "../../../../public/assets/technology/Consultant/1.png";
import image2C from "../../../../public/assets/technology/Consultant/2.png";
import image3C from "../../../../public/assets/technology/Consultant/3.png";
import image4C from "../../../../public/assets/technology/Consultant/4.png";
import image5C from "../../../../public/assets/technology/Consultant/5.png";
import image1D from "../../../../public/assets/technology/Design/1.png";
import image2D from "../../../../public/assets/technology/Design/2.png";
import image3D from "../../../../public/assets/technology/Design/3.png";
import image4D from "../../../../public/assets/technology/Design/4.png";
import image5D from "../../../../public/assets/technology/Design/5.png";

export const technologyData = [
  {
    icon: icon1,
    title: "Software / Web Development",
    desc: "Our team of senior developers, architects, and designers build web apps that are robust, scalable, secure, and lightning-fast on the backend, while beautifully and intuitively crafted on the frontend.",
    images: [image1S, image2S, image3S, image4S],
    active: true,
  },
  {
    icon: icon2,
    title: "Strategy & consultancy",
    desc: "The strategy and consultancy project is the master plan we develop to accomplish your objectives. We listen, understand and analyse the needs of the business. Then we define a strategy to deliver optimised results so you can move forward.",
    images: [image1C, image2C, image3C, image4C, image5C],
    active: false,
  },
  {
    icon: icon3,
    title: "Product Design",
    desc: "Our experienced UX/UI team is able to improve the interaction quality of a website or an app, whether we work with startup companies or big corporations. With the help of extensive research, we focus on delivering an enjoyable and easy user experience.",
    images: [image1D, image2D, image3D, image4D, image5D],
    active: false,
  },
];
