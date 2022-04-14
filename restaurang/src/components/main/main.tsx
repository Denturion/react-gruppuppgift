import { Menu } from "./menu";
import mainburger from "../../images/mainpageBurger.png";
import { useNavigate } from "react-router-dom";
import "./css/main.css";

export function Main() {
  const navigate = useNavigate();

  function toBookingPage() {
    //Länka till bokningssidan
    navigate("/booking");
  }

  return (
    <>
      <div className="mainpage">
        <div className="text">
          <h1>BRITNEY BURGERS</h1>
          <h2>Burgare, drinkar och karaoke</h2>
          <div className="button">
            <button onClick={toBookingPage}>Boka bord</button>
          </div>
        </div>
        <div className="vertically">
          <div className="inner">
            <img className="mainPageHamburger" src={mainburger} />
          </div>
        </div>
      </div>
    </>
  );
}
