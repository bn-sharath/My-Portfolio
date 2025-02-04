import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import python from "../../assets/python.svg";
import react from "../../assets/reactjs.svg";
import node from "../../assets/nodejs.svg";
import express from "../../assets/express.svg";
import next from "../../assets/next-js.svg";
import responsive from "../../assets/responsive-design.svg";
import api from "../../assets/rest-api.svg";
import git from "../../assets/git.svg";
import flask from "../../assets/flask.svg";
import github from "../../assets/github.svg";
import docker from "../../assets/docker.svg";
import azure from "../../assets/azure.svg";
import mySQL from "../../assets/mysql.svg";
import mongoDB from "../../assets/mongodb.svg";

export const skills = {
  frontend: [
    { name: "React Js", icon: react },
    { name: "Next Js", icon: next },
    { name: "Responsive design", icon: responsive },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
  ],
  backend: [
    { name: "Node Js", icon: node },
    { name: "Express Js", icon: express },
    { name: "Rest API", icon: api },
    { name: "Python", icon: python },
    { name: "Flask", icon: flask },
    { name: "Git", icon: git },
  ],

  tools: [
    { name: "GitHub", icon: github },
    { name: "Docker", icon: docker },
    { name: "Azure cloud", icon: azure },
    { name: "MySQL", icon: mySQL },
    { name: "MongoDB", icon: mongoDB },
  ],
};
