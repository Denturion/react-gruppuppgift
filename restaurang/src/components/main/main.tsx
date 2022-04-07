import { Menu } from "./menu";
import mainburger from '../../images/mainpageBurger.png'

export function Main () {

    function toBookingPage(){
        //Länka till bokningssidan
    }

    return (
    <>
        <div className="mainpage">
            <h1>BRITNEY BURGERS</h1>
            <h2>Burgare, drinkar och karaoke</h2>
            <img className="mainPageHamburger" src={mainburger}/>
            <button onClick={toBookingPage}>Boka bord</button>
        </div>
        <h3>Burgare | Tillbehör | Dryck</h3>
        <Menu></Menu>
    </>
    )
}