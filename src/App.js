import "./App.css";
import React, { useState, useEffect } from "react";
import logo from "./assets/img/logo.png";
import pfp from "./assets/img/pfp.png";
import project1 from "./assets/img/Project1.png";
import project2 from "./assets/img/Project2.png";
import project3 from "./assets/img/Project3.png";
import project0 from "./assets/img/Project0.png";
import docker from "./assets/img/docker.png";
import firebase from "./assets/img/firebase.png";
import laravel from "./assets/img/laravel.png";
import react from "./assets/img/react.png";
import php from "./assets/img/php.png";
import Projects from "./components/Projects";
import Arrow from "./assets/img/arrow.png";
import Modal from "react-modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };
  useEffect(() => {
    Modal.setAppElement(".Desktop");
    const handleKeyPress = (event) => {
      if (event.key.toLowerCase() === "c") {
        openEmailClient();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  const openEmailClient = () => {
    const email = "ilhankurultay@student.ehb.be";
    const subject = "Regarding Your Portfolio";
    const body = "Hi, I would like to get in touch with you.";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  const projects = [
    {
      id: 1,
      title: "Flutter App",
      description:
        "Ontdek mijn nieuwste Flutter-app, naadloos geïntegreerd met een krachtige PHP Laravel REST API. Van strak design tot real-time data-interactie, deze app biedt een vloeiende gebruikerservaring. Flutter zorgt voor responsiviteit, terwijl de Laravel API efficiënte gegevensuitwisseling mogelijk maakt. Ervaar de toekomst van mobiliteit in deze innovatieve creatie!",
      img: project0,
      technologie: ["Flutter", "PHP"],
    },
    {
      id: 2,
      title: "Movement Tracking",
      description:
        "In mijn recente project, genaamd “Prototype Movement Tracking,” heb ik met succes YoloV5 toegepast om bewegende beelden te tracken en het onderwerp nauwkeurig te benoemen. Dit prototype demonstreert effectieve real-time objectdetectie en tracking, met een sterke focus op de precisie van objectbenoeming. Bovendien is het vermogen van YoloV5 om mensen als objecten te scannen terwijl ze in beweging zijn een opvallende eigenschap, waardoor het project geschikt is voor uiteenlopende toepassingen waarbij het volgen van bewegende personen van essentieel belang is.",
      img: project2,
      technologie: ["Python"],
    },
    {
      id: 3,
      title: "New Era of Login",
      description:
        "IIn mijn recent ontwikkelde project, genaamd “New Era of Login,” heb ik een geavanceerde login-pagina gebouwd met Firebase Authentication en Storage. Deze moderne inlogfunctionaliteit biedt gebruikers de keuze om veilig in te loggen met hun e-mail en wachtwoord, of moeiteloos via hun Google-account. Hiermee creëer ik een flexibele en beveiligde gebruikerservaring in een nieuwe fase van inlogmethoden. Bovendien is de frontend van het project ontwikkeld met behulp van React, waardoor de gebruikersinterface responsief en dynamisch is.",
      img: project1,
      technologie: ["Firebase", "React"],
    },
    {
      id: 4,
      title: "3d model viewer",
      description:
        "In mijn recente project heb ik three.js gebruikt voor het renderen van 3D-modellen en een server opgezet met vue.js in combinatie met vanilla JavaScript. De kracht van three. js maakte het mogelijk gedetailleerde 3D-modellen vloeiend te renderen, terwijl de serverarchitectuur met vue.js een solide backend bood voor effectieve communicatie tussen de gebruikersinterface en de 3D-modellen",
      img: project3,
      technologie: ["Three.js", "Vue.js"],
    },
  ];
  return (
    <div className="Desktop">
      <div className="content">
        <nav>
          <div className="navLeft">
            <p>
              <a href="#head">Home</a>
            </p>
            <p>
              {" "}
              <a href="#project">Projects</a>
            </p>
            <p>
              {" "}
              <a href="#about">About</a>
            </p>
          </div>
          <div className="navMiddle">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navRight">
            <div>
              <p>
                Press to <strong>C</strong> to contact
              </p>
            </div>
          </div>
        </nav>
        <main>
          <div className="pfp">
            <div>
              <h1>Code Wizard, Design Maestro: Bridging Brilliance</h1>
            </div>
            <div>
              <img src={pfp} alt="pfp" />
            </div>
          </div>
          <div className="startText">
            <h2>
              Greetings and welcome! Your presence on my page, brings{" "}
              <mark> me joy as I share a glimpse of my world with you.</mark>
            </h2>
            <button onClick={openEmailClient} className="whiteButton">
              Contact
            </button>
          </div>
          <div className="footer">
            <h3>Trusted programming languages</h3>
            <div className="logos">
              <div>
                <img alt="php" src={php}></img>
                <img alt="docker" src={docker}></img>
                <img alt="firebase" src={firebase}></img>
                <img alt="laravel" src={laravel}></img>
                <img alt="react" src={react}></img>
              </div>
            </div>
          </div>
        </main>
        <div className="aside" id="about">
          <div className="header">
            <div className="aboutme">
              <h1>Ilhan Kurultay</h1>
              <p>
                Ilhan Kurultay, a 21-year-old passionate backend developer, also
                possesses a knack for design, creating a unique blend of
                technical expertise and creative flair.
              </p>
            </div>
            <div className="quote">
              <img alt="arrow" src={Arrow}></img>
              <h2>“Do more than just exist, live with purpose”</h2>
            </div>
          </div>
          <div className="asideButton">
            <button onClick={openEmailClient} className="blackButton">
              Contact
            </button>
          </div>
        </div>
        <aside id="project">
          <h1>Projects</h1>
          <div className="projects">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project"
                onClick={() => openModal(project)}
              >
                <img alt={project.title} src={project.img}></img>
                <h3>{project.title}</h3>
                <p>Technologies: {project.technologie.join(", ")}</p>
              </div>
            ))}
          </div>
        </aside>
        <footer></footer>
      </div>
      {isModalOpen && (
        <Projects
          isOpen={isModalOpen}
          closeModal={closeModal}
          projectDetails={selectedProject}
          ariaHideApp={false}
        />
      )}
    </div>
  );
}

export default App;
