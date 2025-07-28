import React from "react";
import headerlogo from "./assets/Group 20.png";
import lupa from "./assets/iconsLupa.png";
const App = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-wrapper">
            <a href="">
              <img src={headerlogo} alt="" />
            </a>
            <nav>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Menu</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Offers</a>
                </li>
              </ul>
            </nav>

            <div>
              <img src={lupa} alt="" />
              <button></button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default App;
