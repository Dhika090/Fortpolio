import { IProject, IServices, ISkill } from './type'
import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiOutlineAntDesign, AiOutlineApi,} from 'react-icons/ai'
import {BsCircleFill, BsCircleHalf} from 'react-icons/bs'

export const services:IServices[] = [
    {
       Icon: RiComputerLine,
       title: "Frotend Development",
       about: "I can build a beatiful and scable SPA using <b> HTML </b>,<b>CSS</b>,and <b>REACT.JS</b> ...",

    },
    {
        Icon: FaServer,
        title:"Backend Development",
        about:"Database, Server, API using <b>Express</b> & other populer framework ",
       
    },
    {
        Icon: AiOutlineApi,
        title:"Api Development",
        about:"I can  developer robust Api  using <b>API</b> & <b> Node </b>",
       
    },
    // {
    //     Icon: MdDeveloperMode,
    //     title:"Competitive Coder",
    //     about:"lorem ... ",
       
    // },
    {
        Icon: AiOutlineAntDesign,
        title:"UI / UX Design",
        about:"Stunning user interface designer using <b>Figma</b> and <b> Framer</b>",
       
    },
    // {
    //     Icon: RiComputerLine,
    //     title:"What Ever",
    //     about:"Lorem ....",
       
    // },
]

export const languages:ISkill[] = [
    {
        name:"Python",
        level: "65%",
        Icon: BsCircleHalf
    },
    {
        name:"TypeScript",
        level: "80%",
        Icon: BsCircleFill
    },
    {
        name:"Boostrap",
        level: "70%",
        Icon: BsCircleFill
    },
    {
        name:"Ionic",
        level: "80%",
        Icon: BsCircleHalf
    },
]

export const tools:ISkill[] = [
    {
        name:"Figma",
        level: "70%",
        Icon: BsCircleHalf
    },
    {
        name:"Framer",
        level: "60%",
        Icon: BsCircleHalf
    },
]

export const projects:IProject[] = [
    // { 
    //     name: "Database",
    //     description:
    //       "This my PortFolio",
    //     image_path: "/12.jpg",
    //     deployed_url: "",
    //     github_url: "",
    //     category: ["Database"],
    //     key_techs: ["React", "Tailwind", "Next.js"],
    // },
    // {
    //   name: "Protfolio",
    //   image_path: "/design.png",
    //   deployed_url: "",
    //   github_url: "",
    //   category: ["react"],
    //   description:
    //     "This my Portfolio",
    //   key_techs: ["React", "Next.js", "FramerMotion",'Tailwind'],
    // },
    {
        id:1,
      name: "Ionic",
      image_path: "/ionic1.png",
      deployed_url: "https://play.google.com/store/apps/details?id=com.kanze.reload.app",
      github_url: "",
      category: ["ionic",],
      description:
        "This my first  project Mobile",
      key_techs: ["ionic", "Angular", "Java", "Typescript",],
    },
]