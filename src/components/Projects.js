import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import comingSoon from '../assets/img/coming-soon.jpg'
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Winter Is Coming..",
      description: "Simple beautiful landing page built with HTML, CSS",
      imgUrl: projImg1,
    },
    {
      title: "React Responsive Ecommerce Website",
      description: "I used my knowledge of Reactjs framework, along with my new skills  React hooks, modern CSS, framer motion, and many more. I used the Swiper js library for the slider to make this site more functional and practical.",
      imgUrl: projImg2,
    },
    {
      title: "React Dictionary App",
      description: "highly-demanded framework to build a working dictionary app incorporating coding best practices, along with the most popular tools and technologies.",
      imgUrl: projImg3,
    },
    {
      title: "Weather App",
      description: "Building upon my previously-gained knowledge, I also became skilled in Bootstrap, API’s, real-life development workflow, hosting, and advanced  JavaScript. I combined all of these skills to create a fully-functioning weather app.",
      imgUrl: projImg4,
    },
    {
      title: "Crypto React App",
      description: "I used hooks such as useState and useEffect while using Axios to interact with the Coin Gecko API. I also be used React Router Dom v6 to have dynamic routes. ",
      imgUrl: projImg5,
    },
    {
      title: "Coming Soon ...",
      description: "",
      imgUrl: comingSoon,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
