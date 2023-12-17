import "./App.css";
import logo from "./assets/img/logo.png";
import pfp from "./assets/img/pfp.png";
import project1 from "./assets/img/Project1.png";
import docker from "./assets/img/docker.png";
import firebase from "./assets/img/firebase.png";
import laravel from "./assets/img/laravel.png";
function App() {
  return (
    <div className="Desktop">
      <div className="content">
        <nav>
          <div className="navLeft">
            <p>Home</p>
            <p>Projects</p>
            <p>About</p>
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
              Greetings and welcome! Your presence on my page, brings
              <mark>me joy as I share a glimpse of my world with you.</mark>
            </h2>
            <button className="whiteButton">Contact</button>
          </div>
          <div className="footer">
            <h3>Trusted programming languages</h3>
            <div className="logos">
              <div>
                <img alt="docker" src={docker}></img>
                <img alt="docker" src={firebase}></img>
                <img alt="docker" src={laravel}></img>
              </div>
            </div>
          </div>
        </main>
        <div className="aside">
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
              <h2>“Do more than just exist, live with purpose”</h2>
            </div>
          </div>
          <div className="asideButton">
            <button className="blackButton">Contact</button>
          </div>
        </div>
        <aside>
          <h1>Projects</h1>
          <div className="projects">
            <div className="project">
              <img alt="Project1" src={project1}></img>
              <h3>First</h3>
            </div>
            <div className="project">
              <img alt="Project1" src={project1}></img>
              <h3>First</h3>
            </div>
            <div className="project">
              <img alt="Project1" src={project1}></img>
              <h3>First</h3>
            </div>
          </div>
        </aside>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
