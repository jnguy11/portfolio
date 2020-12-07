import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { HeaderCon } from '../components/HeaderCon';
import { HeaderBody } from '../components/HeaderBody';
import { HeaderSub } from '../components/HeaderSub';
import { CustomModal } from '../components/CustomModal';
import LinkTag from '../components/LinkTag';
import ImagePreview from '../components/ImagePreview';
import Modal from 'react-modal';

export default function Projects() {

    const [selectedModal, setSelectedModal] = useState("");
    const [defaultModalstate, setDefaultModalState] = useState(false);
    const [windowSize, setWindowSize] = useState(1440);

    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    }, [])

    const body = `
    Hello! Below are some of the projects that I've completed by myself and in teams. I've hand-selected some projects \
    that I thought were a good representation of my skills and the different technologies I've used throughout my current \
    path as a developer. For a full list of my projects, \
    you can visit my GitHub ${<LinkTag link={{text: "here", link: "https://unsplash.com/", type: "inline", width: "5em" }} />}.
    `;
    
    console.log(selectedModal);
    console.log(defaultModalstate);
    return (
        <Container id="projects">
            <BodyCon>
                <Body>
                    <HeaderCon details={{name: "PROJECTS"}}/>
                    <div style={{lineHeight: 1.75}}>
                        <TextBody>Hello! Below are some of the projects that I've completed by myself and in teams. I've hand-selected some projects 
                        that I thought were a good representation of my skills and the different technologies I've used throughout my current
                        path as a developer. For a full list of my projects, 
                        you can visit my GitHub  <LinkTag link={{text: "here", link: "https://github.com/jnguy11", type: "inline", width: "5em" }} />.
                        </TextBody>
                    </div>
                    <ProjectContainer
                        style={{width: windowSize > 1440 ? "90%" : "90%"}}
                    >
                        <ImagePreview image={{src: "/anete-lusina-zwsHjakE_iI-unsplash.jpg", title: "PORTFOLIO", tech: "REACT", modal: 1, submit: setSelectedModal, setModal: setDefaultModalState}}/>
                        <ImagePreview image={{src: "/scott-graham-OQMZwNd3ThU-unsplash.jpg", title: "INSTRUCTION GUIDE", tech: "DOCUMENTATION / GUIDE / MARKDOWN / JUST-THE-DOCS ", modal: 2, submit: setSelectedModal, setModal: setDefaultModalState}}/>
                        <ImagePreview image={{src: "/portfolio-noot.png", title: "NOOT", tech: "REACT NATIVE / MYSQL / NODEJS / EXPO", modal: 3, submit: setSelectedModal, setModal: setDefaultModalState}}/>
                        <ImagePreview image={{src: "/audiology-portfolio.png", title: "AUDIOLOGY", tech: "PYTHON / FLASK / SQLALCHEMY / AWS S3 / JINJA", modal: 4, submit: setSelectedModal, setModal: setDefaultModalState}}/>
                        <ImagePreview image={{src: "/noot-api-portfolio.png", title: "NOOT API", tech: "DOCUMENTATION / API ", modal: 5, submit: setSelectedModal, setModal: setDefaultModalState}}/>
                        <ImagePreview image={{src: "/craigslist-portfolio.png", title: "CRAIGSLIST REMAKE", tech: "ECOMMERCE / JAVASCRIPT / MYSQL / EJS / NODEJS", modal: 6, submit: setSelectedModal, setModal: setDefaultModalState}}/>
                    </ProjectContainer>
                    <CustomModal 
                        details={{
                            src: "/modal/halacious-tZc3vjPCk-Q-unsplash.jpg",
                            selectedModal,
                            defaultModalstate: defaultModalstate,
                            setModal: setSelectedModal,
                            modal: 1,
                            name: "PORTFOLIO WEBSITE",
                            desc: "PORTFOLIO WEBSITE TO SHOWCASE PAST PROJECTS",
                            tech: ["REACT","PARTICLES.JS","NETLIFY"],
                            type: "PERSONAL PROJECT",
                            position: "FRONTEND DEVELOPER",
                        }}
                    />
                    <CustomModal 
                        details={{
                            src: "/modal/greg-bakker-0BDxXONmsbk-unsplash.jpg",
                            selectedModal,
                            defaultModalstate: defaultModalstate,
                            setModal: setSelectedModal,
                            modal: 2,
                            name: "INSTRUCTION GUIDE",
                            desc: "INSTRUCTION GUIDE ON HOW TO USE LINUX. CREATED FOR COMMUNICATIONS COURSE.",
                            tech: ["DOCUMENTATION", "GUIDE", "MARKDOWN", "JUST-THE-DOCS", "GNOME STYLEGUIDE" ],
                            type: "TEAM-BASED",
                            position: "N/A",
                            codeLink: "https://github.com/dl90/linux-basics",
                            projectLink: "https://dl90.github.io/linux-basics/"
                        }}
                    />
                    <CustomModal 
                        details={{
                            src: "/modal/jonathan-kemper-t6Wmvbw_MdI-unsplash.jpg",
                            selectedModal,
                            defaultModalstate: defaultModalstate,
                            setModal: setSelectedModal,
                            modal: 3,
                            name: "NOOT APP",
                            desc: "BACK TO SCHOOL BULLETIN APP FOR PARENTS AND TEACHERS",
                            tech: ["REACT NATIVE","EXPO", "API","GOOGLE PLAY STORE"],
                            type: "TEAM-BASED",
                            position: "FRONT & BACKEND DEVELOPER",
                            codeLink: "https://github.com/jnguy11/personal-noot",
                            projectLink: "https://play.google.com/store/apps/details?id=com.Noot.Noot"
                        }}
                    />
                    <CustomModal 
                        details={{
                            src: "/modal/ryan-quintal-zm42KtKcn9c-unsplash.jpg",
                            selectedModal,
                            defaultModalstate: defaultModalstate,
                            setModal: setSelectedModal,
                            modal: 4,
                            name: "AUDIOLOGY",
                            desc: "COMMUNITY-STYLE MUSIC UPLOAD AND LISTENING APP BUILT USING PYTHON",
                            tech: ["PYTHON", "FLASK", "SQLALCHEMY", "AWS S3", "JINJA"],
                            type: "TEAM-BASED",
                            position: "FRONT & BACKEND DEVELOPER",
                            codeLink: "https://github.com/jnguy11/audiology-remake",
                        }}
                    />
                    <CustomModal 
                        details={{
                            src: "/modal/mika-baumeister-Zk4QPB3-5NY-unsplash.jpg",
                            selectedModal,
                            defaultModalstate: defaultModalstate,
                            setModal: setSelectedModal,
                            modal: 5,
                            name: "NOOT API",
                            desc: "API FOR NOOT APP BUILT BUILT USING NODE.JS. HOSTED ON EC2 INSTANCES AND INCLUDES LOAD BALANCER.",
                            tech: ["NODE.JS", "API", "MYSQL", "FIREBASE", "AWS EC2", "CHEERIO.JS", "CRON JOBS", "DOCUMENTATION"],
                            type: "PERSONAL",
                            position: "BACKEND DEVELOPER",
                            codeLink: "https://github.com/jnguy11/personal-noot",
                            projectLink: "https://play.google.com/store/apps/details?id=com.Noot.Noot"
                        }}
                    />
                    <CustomModal 
                        details={{
                            src: "/modal/lisheng-chang-M2524ncJQ40-unsplash.jpg",
                            selectedModal,
                            defaultModalstate: defaultModalstate,
                            setModal: setSelectedModal,
                            modal: 6,
                            name: "CRAIGSLIST REMAKE",
                            desc: "CRAIGSLIST REMAKE FOR END OF FIRST YEAR PROJECT BUILT ON DESIGNS OF TEAM MATES",
                            tech: ["ECOMMERCE", "JAVASCRIPT", "MYSQL", "EJS", "NODEJS"],
                            type: "TEAM-BASED",
                            position: "FRONT & BACKEND DEVELOPER",
                            codeLink: "https://github.com/jnguy11/idsp-john",
                        }}
                    />
                    {/* <ModalContainer 
                        style={{
                            display: modal === true ? "flex" : "none",
                            overflow: modal === true ? "unset" : "unset"
                        }}
                        onClick={() => {setModal(false)}}
                    >
                        <CustomModal />
                    </ModalContainer> */}
                </Body>
            </BodyCon>
        </Container>
    )
}

const BodyCon = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`;

const TextBody = styled.p`
    height: auto;
    padding-bottom: 1.5%;
    width: 90%;
`;
const Container = styled.div`
    padding-top: 7.5%;
    min-width: 75rem;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 12.5%;
    
`;

const ModalContainer = styled.div`
    z-index: 1000000;
    width: 100vw;
    height: 100vh;
    background-color: "red";
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    background-color: rgba(0,0,0,0.6);
    transform: translate(-50%, -50%);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;