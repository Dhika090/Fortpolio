import { IProject, IServices, ISkill } from './type'
import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi, } from 'react-icons/ai'
import { BsCircleFill, BsCircleHalf } from 'react-icons/bs'

export const services: IServices[] = [
  {
    Icon: RiComputerLine,
    title: "Frotend Development",
    about: "I can build a beatiful and scable SPA | MPA using  HTML ,Css/Sass, Typescript,and REACT.JS ...",

  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about: "Database, Server, API & other populer framework, Spring Booth and Laravel ",

  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI / UX Design",
    about: "Stunning user interface designer using <b>Figma</b>",

  },
]

export const languages: ISkill[] = [
  {
    name: "Java",
    level: "60%",
    Icon: BsCircleFill
  },
  {
    name: "Python",
    level: "35%",
    Icon: BsCircleHalf
  },
  {
    name: "TypeScript",
    level: "80%",
    Icon: BsCircleFill
  },
  {
    name: "React Js",
    level: "80%",
    Icon: BsCircleHalf
  },

  {
    name: "Angular",
    level: "80%",
    Icon: BsCircleHalf
  },
  {
    name: "PHP",
    level: "60%",
    Icon: BsCircleFill
  },
]

export const tools: ISkill[] = [
  {
    name: "Figma",
    level: "85%",
    Icon: BsCircleHalf
  },
]

export const projects: IProject[] = [
  {
    id: 1,
    name: "Mobile PPOB",
    image_path: "/image/ionic1.png",
    deployed_url: "https://play.google.com/store/apps/details?id=com.kanze.reload.app",
    github_url: "",
    category: ["ionic", "angular"],
    description:
      "This is my first project in the mobile developer section for ppob client needs (2020).",
    key_techs: ["ionic", "Angular", "Java", "Typescript",],
  },
  {
    id: 2,
    name: "Website Ecommerce",
    image_path: "/image/macrame.png",
    deployed_url: "https://meshop-dhika.vercel.app/",
    github_url: "https://github.com/Dhika090/eshop",
    category: ["React Js",],
    description:
      "Tugas Akhir Menjual Kategori Macrame berbagai jenis (2022).",
    key_techs: ["ReactJs", "Website"],
  },
  {
    id: 3,
    name: "Game",
    image_path: "/image/mojak.jpg",
    deployed_url: "https://www.mojak.id/#/",
    github_url: "https://github.com/Dhika090/monopoly-pajak",
    category: ["React Js",],
    description:
      "This is a tax monopoly game (mojak), can be played with multiple users according to user needs. (2023).",
    key_techs: ["vite", "vue.js", "Website", "Game"],
  },
  {
    id: 4,
    name: "Website Ecommerce",
    image_path: "/image/pangandaranmart.jpg",
    deployed_url: "https://www.pengandaranmart.com/",
    github_url: "https://github.com/Dhika090/Pengandaran-Mart",
    category: ["React Js", "tailwind"],
    description:
      "This is an ecommerce freelancer on the sale of typical food, namely pangandaran, which is suitable for the needs of the regional market there (2023).",
    key_techs: ["ReactJs", "tailwind", "Website"],
  },
  {
    id: 5,
    name: "Website Classroom",
    image_path: "/image/kemendagri.jpg",
    deployed_url: "",
    github_url: "",
    category: ["PHP",],
    description:
      "this is a freelance with ministry people for learning learning p3k for with user needs, Coming Soon (2023).",
    key_techs: ["php", "Website"],
  },
]