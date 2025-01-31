import connect_img from "../../assets/project1.png";
import sarvantharayami_img from "../../assets/project2.png";

export const projects = [
  {
    title: "CONNECT TALK",
    img: connect_img,
    sub_title: "A Web Real Time chatting application.",
    description:
      "The Connect Talk App is a Web based, real-time chatting application designed to provide secure and private communication for users",
    usedTech: [
      " React.js",
      "Node.js",
      " Express.js",
      "MongoDB",
      "HTML",
      "CSS",
      "Javascript",
      "Socket.io",
      "Tailwind CSS",
    ],
    gitHup: "https://github.com/bn-sharath/ConnectTalk",
    animation: "left-to-right",
  },
  {
    title: "SARVANTHARAYAMI",
    img: sarvantharayami_img,
    sub_title:
      " Web based CCTV security system using face recognition with python.",
    description:
      " This project is to recognize face from the CCTV camera and compare this face with the criminal or missing persons face in database and give the security alerts",
    usedTech: [
      "Python",
      "Flask",
      "Face recognition",
      "OpenCV",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    gitHup: "https://github.com/bn-sharath/sarvantharayami",
    animation: "right-to-left",
  },
];
