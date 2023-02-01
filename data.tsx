import { IProject, IServices, ISkill } from './type'
import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiOutlineAntDesign, AiOutlineApi,} from 'react-icons/ai'
import {BsCircleFill, BsCircleHalf} from 'react-icons/bs'

export const services:IServices[] = [
    {
       Icon: RiComputerLine,
       title: "Frotend Development",
       about: "I can build a beatiful and scable SPA | MPA using  HTML ,Css/Sass, Typescript,and REACT.JS ...",

    },
    {
        Icon: FaServer,
        title:"Backend Development",
        about:"Database, Server, API & other populer framework ",
       
    },
    {
        Icon: AiOutlineApi,
        title:"Api Development",
        about:"I can developer Api using <b>API</b> & <b> Node </b>",
       
    },
    {
        Icon: AiOutlineAntDesign,
        title:"UI / UX Design",
        about:"Stunning user interface designer using <b>Figma</b> and <b> Framer</b>",
       
    },
]

export const languages:ISkill[] = [
    {
        name:"Python",
        level: "35%",
        Icon: BsCircleHalf
    },
    {
        name:"TypeScript",
        level: "73%",
        Icon: BsCircleFill
    },
    {
        name:"React Js",
        level: "72%",
        Icon: BsCircleHalf
    },
    {
        name:"Java",
        level: "35%",
        Icon:  BsCircleFill
    },
      {
        name:"Angular",
        level: "65%",
        Icon:  BsCircleHalf
    },
    {
        name:"Flutter",
        level: "54%",
        Icon: BsCircleFill
    },
]

export const tools:ISkill[] = [
    {
        name:"Figma",
        level: "70%",
        Icon: BsCircleHalf
    },
]

export const projects:IProject[] = [
    {
        id:1,
      name: "Mobile",
      image_path: "/image/ionic1.png",
      deployed_url: "https://play.google.com/store/apps/details?id=com.kanze.reload.app",
      github_url: "",
      category: ["ionic","angular"],
      description:
        "This my first  project Mobile",
      key_techs: ["ionic", "Angular", "Java", "Typescript",],
    },
    {
        id:2,
      name: "Website",
      image_path: "/image/macrame.png",
      deployed_url: "https://meshop-dhika.vercel.app/",
      github_url: "https://github.com/Dhika090/eshop",
      category: ["React Js",],
      description:
        "Menjual Kategori Macrame berbagai jenis",
      key_techs: ["ReactJs","Website"],
    },
]