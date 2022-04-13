import { Menu } from "./menu";
import mainburger from "../../images/mainpageBurger.png";
import { useNavigate } from "react-router-dom";

export function Main() {
  const navigate = useNavigate();

  function toBookingPage() {
    //Länka till bokningssidan
    navigate("/booking");
  }

  return (
    <>
      <div className="mainpage">
        <h1>BRITNEY BURGERS</h1>
        <h2>Burgare, drinkar och karaoke</h2>
        <img className="mainPageHamburger" src={mainburger} />
        <button onClick={toBookingPage}>Boka bord</button>
      </div>
      <h3>Burgare | Tillbehör | Dryck</h3>
      <Menu></Menu>
    </>
  );
}
