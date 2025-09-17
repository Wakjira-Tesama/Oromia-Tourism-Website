import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/backgrounds/flag3.gif";
import "../styles/Header.css";
import "../styles/FIxedheader.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export function NavHeader() {
  const [showDestinations, setShowDestinations] = useState(false);
  const [showThingsToDo, setShowThingsToDo] = useState(false);
  const [showAdditionals, setShowAdditionals] = useState(false);
  const [showSubCategories, setShowSubCategories] = useState({});

  const handleMouseEnter = (setFunction) => {
    setFunction(true);
  };

  const handleMouseLeave = (setFunction) => {
    setFunction(false);
  };

  const handleSubCategoryMouseEnter = (category) => {
    setShowSubCategories((prevState) => ({ ...prevState, [category]: true }));
  };

  const handleSubCategoryMouseLeave = (category) => {
    setShowSubCategories((prevState) => ({ ...prevState, [category]: false }));
  };

  return (
    <>
      <div className="myHeader">
        <nav style={{ display: "flex", justifyContent: "end" }}>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter(setShowDestinations)}
              onMouseLeave={() => handleMouseLeave(setShowDestinations)}
            >
              <span className="dropdown-text">
                <Link to="/">
                  Destinations{" "}
                  <i
                    className={`fas fa-chevron-${
                      showDestinations ? "up" : "down"
                    }`}
                  ></i>
                </Link>
              </span>
              {showDestinations && (
                <div className="dropdown-content">
                  <ul className="headerDestinationsLists">
                    <li
                      onMouseEnter={() => handleSubCategoryMouseEnter("Park")}
                      onMouseLeave={() => handleSubCategoryMouseLeave("Park")}
                    >
                      <span>Parks and Wild Life Sanctuary</span>
                      {showSubCategories.Park && (
                        <div className="sub-dropdown-content">
                          <ul>
                            <li>
                              <Link to="/destination/bale">Bale Mountains</Link>
                            </li>
                            <li>
                              <Link to="/destination/awash">Awash NP</Link>
                            </li>
                            <li>
                              <Link to="/destination/abijata">Abijata</Link>
                            </li>
                            <li>
                              <Link to="/destination/borena">Borena</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li
                      onMouseEnter={() => handleSubCategoryMouseEnter("lakes")}
                      onMouseLeave={() => handleSubCategoryMouseLeave("lakes")}
                    >
                      <span>Lakes</span>
                      {showSubCategories.lakes && (
                        <div className="sub-dropdown-content">
                          <ul>
                            <li>
                              <Link to="/destination/langano">
                                Lake Langano
                              </Link>
                            </li>
                            <li>
                              <Link to="/destination/haramaya">
                                Lake Haramaya
                              </Link>
                            </li>
                            <li>
                              <Link to="/destination/wenchi">
                                Wenchi Crater Lake
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li
                      onMouseEnter={() => handleSubCategoryMouseEnter("caves")}
                      onMouseLeave={() => handleSubCategoryMouseLeave("caves")}
                    >
                      <span>Caves</span>
                      {showSubCategories.caves && (
                        <div className="sub-dropdown-content">
                          <ul>
                            <li>
                              <Link to="/destination/sof-omar">
                                Sof Omar Cave
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li
                      onMouseEnter={() =>
                        handleSubCategoryMouseEnter("Culture")
                      }
                      onMouseLeave={() =>
                        handleSubCategoryMouseLeave("Culture")
                      }
                    >
                      <span>Culture</span>
                      {showSubCategories.Culture && (
                        <div className="sub-dropdown-content">
                          <ul>
                            <li>
                              <Link to="/destination/irreecha">Irrecha</Link>
                            </li>
                            <li>
                              <Link to="/destination/gadaa">Gadaa System</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter(setShowThingsToDo)}
              onMouseLeave={() => handleMouseLeave(setShowThingsToDo)}
            >
              <span className="dropdown-text">
                <Link to="/">
                  Things to do{" "}
                  <i
                    className={`fas fa-chevron-${
                      showThingsToDo ? "up" : "down"
                    }`}
                  ></i>
                </Link>
              </span>
              {showThingsToDo && (
                <div className="dropdown-content">
                  <ul className="headerDestinationsLists">
                    <li>
                      <Link to="/todo/Hiking">Hiking</Link>
                    </li>

                    <li>
                      <Link to="/todo/Wildlife">Wildlife</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter(setShowAdditionals)}
              onMouseLeave={() => handleMouseLeave(setShowAdditionals)}
            >
              <span className="dropdown-text">
                <Link to="/additionals/Musics">
                  Additionals{" "}
                  <i
                    className={`fas fa-chevron-${
                      showAdditionals ? "up" : "down"
                    }`}
                  ></i>
                </Link>
              </span>
              {showAdditionals && (
                <div className="dropdown-content">
                  <ul className="headerDestinationsLists">
                    <li>
                      <Link to="/additionals/foods">Foods</Link>
                    </li>
                    <li>
                      <Link to="/additionals/dressings">Dressings</Link>
                    </li>
                    <li>
                      <Link to="/additionals/musics">Musics</Link>
                    </li>
                    <li>
                      <Link to="/additionals/films">Films</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default function FixedHeader() {
  return (
    <div className="fixed-header-container">
      <div className="belowFixed">
        <div className="wanderethio" style={{ color: "green" }}>
          <span className="highlight">O</span>romia
          <span className="highlight">T</span>ourism
          <div className="line-below"></div>
        </div>
        <div className="fixed-header-bottom">
          <NavHeader />
        </div>
      </div>
    </div>
  );
}
