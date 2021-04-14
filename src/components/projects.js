import React from "react";
import ExitIcon from "../subcomponents/exit";
function Portfolio() {

  const openSocial = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <div className="section-background portfolio">
        <div className="section-top" style={{}}>
          <h2 className="section-header">My Projects</h2>
          <ExitIcon />
        </div>

        <div className="projects">

          <div className="project">
              <div className="project-header">
                <h2
                  onClick={() =>
                    openSocial("https://flowbook.netlify.app/")
                  }
                  className="project-title middle"
                >
                  Flow Ecommerce Store
                </h2>
                <img
                  onClick={() =>
                    openSocial("https://github.com/pantojao/Flow-Ecommerce")
                  }
                  className="github-icon"
                  src={require("../media/github.png")}
                  alt=""
                />
              </div>
                <video preload="auto"  poster={require("../media/flow.PNG")} width="800px" controls>
                  <source  src={require("../media/flow-ecommerce.mp4")} type="video/mp4" />
                </video>
            </div>

          <div className="project">
            <div className="project-header">
              <h2
                onClick={() =>
                  openSocial("https://pantojao.github.io/nasa-app/#/")
                }
                className="project-title middle"
              >
                Nasa Image Generator
              </h2>
              <img
                onClick={() =>
                  openSocial("https://github.com/pantojao/nasa-app")
                }
                className="github-icon"
                src={require("../media/github.png")}
                alt=""
              />
            </div>
              <video preload="auto"  poster={require("../media/nasa-app-pic.PNG")} width="800px" controls>
                <source  src={require("../media/nasa.mp4")} type="video/mp4" />
              </video>
          </div>

          <div className="project">
            <div className="project-header">
              <h2
                onClick={() =>
                  openSocial("https://pantojao.github.io/Pac-Man-Search/")
                }
                className="project-title middle"
              >
                Pac-Man Search
              </h2>
              <img
                onClick={() =>
                  openSocial("https://github.com/pantojao/pac-man-search")
                }
                className="github-icon"
                src={require("../media/github.png")}
                alt=""
              />
            </div>

            <video preload="none" poster={require("../media/pac-man-image.PNG")} width="800px" controls>
                <source src={require("../media/pacman.mp4")} type="video/mp4" />
            </video>
          </div>
       

          <div className="project">
            <div className="project-header">
              <h2
                onClick={() =>
                  openSocial("https://pantojao.github.io/weather-app/")
                }
                className="project-title middle"
              >
                Current Weather Report
              </h2>
              <img
                onClick={() =>
                  openSocial("https://github.com/pantojao/weather-app")
                }
                className="github-icon"
                src={require("../media/github.png")}
                alt=""
              />
            </div>
            <video preload="none" poster={require("../media/weather-app-pic.PNG")} width="800px" controls>
                <source  src={require("../media/weather.mp4")} type="video/mp4" />
            </video>
          </div>

          <div className="project">
            <div className="project-header">
              <h2
                onClick={() =>
                  openSocial("https://pantojao.github.io/ipa-app/")
                }
                className="project-title middle"
              >
                IPA Finder
              </h2>
              <img
                onClick={() =>
                  openSocial("https://github.com/pantojao/ipa-app")
                }
                className="github-icon"
                src={require("../media/github.png")}
                alt=""
              />
            </div>
            <video preload="none" poster={require("../media/ipa-app-pic.PNG")} width="800px" controls>
                <source src={require("../media/ipa.mp4")} type="video/mp4" />
            </video>

          </div>

          <div className="project">
            <div className="project-header">
              <h2
                onClick={() =>
                  openSocial("https://gainz-trackerr.herokuapp.com/")
                }
                className="project-title middle"
              >
                Gainz Tracker
              </h2>
              <img
                onClick={() =>
                  openSocial("https://github.com/pantojao/gainz-tracker")
                }
                className="github-icon"
                src={require("../media/github.png")}
                alt=""
              />
            </div>
              <video preload="none" poster={require("../media/gainz-app-pic.PNG")} width="800px" controls>
                <source src={require("../media/gainz.mp4")} type="video/mp4" />
            </video>
          </div>
        </div>
        <p className="mock"><a target="_blank" rel="noopener noreferrer" href="https://www.frontendmentor.io/profile/pantojao">My Mockups</a> </p>
      </div>
    </>
  );
}

export default Portfolio;
