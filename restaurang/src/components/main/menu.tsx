import opsBurger from '../../images/opsburger.png'
import hitmeBurger from '../../images/hitmeburger.png'
import toxicBurger from '../../images/toxicburger.png'
import womanizerBurger from '../../images/womanburger.png'
import "./css/menu.css";

export function Menu () {

    return (
    <>
    <h3>Burgare | Tillbehör | Dryck</h3>
        <div className="burgerMenuDiv">
            <h4>Oops I did it again</h4>
            <h5>135kr</h5>
            <p>Bröd, kött, ost, avokadoröra, rökig majo, tomat, gurka, krispsallad och lök</p>
            <img className="mainPageHamburger" src={opsBurger}/>
        </div>
        <div className="burgerMenuDiv">
            <h4>Hit me baby one more time</h4>
            <h5>120kr</h5>
            <p>Bröd, kött, ost, hamburgerdressing, gurka, isbergssallad, tomat och lök</p>
            <img className="mainPageHamburger" src={hitmeBurger}/>
        </div>
        <div className="burgerMenuDiv">
            <h4>Toxic</h4>
            <h5>135kr</h5>
            <p>Bröd, kött, ost, pepperjackost, BBQ sås, chillimajo, chilicheese, tomat, krispsallad och Britneys rostade lök</p>
            <img className="mainPageHamburger" src={toxicBurger}/>
        </div>
        <div className="burgerMenuDiv">
            <h4>Womanizer</h4>
            <h5>135kr</h5>
            <p>Bröd, kött, ost, avokado, jalapeñomajo, färsk chili, krispsallad och Britneys rostade lök</p>
            <img className="mainPageHamburger" src={womanizerBurger}/>
        </div>
    </>
    )
}