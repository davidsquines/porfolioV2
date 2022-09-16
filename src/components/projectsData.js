import chorosX from "../assets/images/chorosx.jpg"
import eureqa from "../assets/images/eureqa.png"
import gotgains from "../assets/images/gotgains.png"
import dictAttack from "../assets/images/dictattack.png"

export const projectsData =[
    {
        id: 0,
        projectName: "Got Gains",
        projectDescription: "A mobile application designed to help users on their fitness journey. Users are able to select their fitness goals and have generated workout plans based on their goals. The app provides full workouts including exercises, sets, and reps. The application helps the user stay on track with their workouts with a stopwatch and progress reports.",
        projectDate: "May 2020",
        projectUrl: "https://github.com/davidsquines/GotGainz",
        technologies: ["Flutter"],
        projectImg: gotgains


    },
    {
        id: 1,
        projectName: "ChorosX",
        projectDescription: "A web application that shows the live position of different satelites in Earth's orbit. The app shows a three dimensional model of Earth and users can pan around the Earth to see different satelites in motion. The project was made during the 2021 MataHacks Hackathon and won first place. ",
        projectDate: "April 2021",
        projectUrl:"https://github.com/ChorosX",
        technologies: ["Flask", "React.js", "Cloud Firestore"],
        projectImg: chorosX
        
    },
    {
        id: 2,
        projectName: "EureQa",
        projectDescription: "A mobile application designed to help users get answers from other users. The users can ask questions that pertains to lifestyle, education, technology, and general questions. Users can then answer other questions that have been provided. The application also has a chat system that users can use to get quick answers.",
        projectDate: "May 2021",
        projectUrl:"https://github.com/ProjectEureka",
        technologies: ["Flutter", "Springboot", "Cloud Firestore", "MongoDB", "Amazon Web Services"],
        projectImg: eureqa
    },
    {
        id: 3,
        projectName: "Dictionary Attack",
        projectDescription: "A web application that allows players to find words from a given set of letters. The game mimics the popular game Scrabble and gives users the option to compete in score with other players.",
        projectDate: "December 2021",
        projectUrl:"https://github.com/Dictionary-Attack",
        technologies: ["React.js", "MongoDB", "Node.js"],
        projectImg: dictAttack
    },
    {
        id: 4,
        projectName: "Eleos",
        projectDescription: "A virtual desktop assistant made to help me with various task I might have. The bot can open certain applications on my machine, preform Google searches and return the current weather based on my location. ",
        projectDate: " August 2022",
        projectUrl:"https://github.com/davidsquines/Eleos",
        technologies: ["Speech Recognition", "Python"],
        projectImg: null
    }
]