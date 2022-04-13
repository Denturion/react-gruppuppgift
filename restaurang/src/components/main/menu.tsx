import opsBurger from '../../images/opsburger.png'
import hitmeBurger from '../../images/hitmeburger.png'
import toxicBurger from '../../images/toxicburger.png'
import womanizerBurger from '../../images/womanburger.png'
import brittneybitchBurger from '../../images/brittneyBitchBurger.png'
import beer from '../../images/beer.png'
import cheesefries from '../../images/cheesefries.png'
import chilicheese from '../../images/chilicheese.png'
import dippingsause from '../../images/dippingsause.png'
import noalcoholbeer from '../../images/noalcoholbeer.png'
import onionrings from '../../images/onionsrings.png'
import pommes from '../../images/pommes.png'
import soda from '../../images/soda.png'
import sweetpotato from '../../images/sweetpotato.png'
import vodka from '../../images/vodka.png'
import wine from '../../images/wine.png'
import "./css/menu.css";

export function Menu() {


    //Vi har lagt in cataleya, cheeseburgare, pippi, dimegirl
    return (
        <>
            <h3>Burgare | Tillbehör | Dryck</h3>
            <div className='Burgers'>
                <div className="burgerMenuDiv">
                    <h4>Oops I did it again</h4>
                    <h5>135kr</h5>
                    <p>Bröd, kött, ost, avokadoröra, rökig majo, tomat, gurka, krispsallad och lök</p>
                    <img className="burgerImg" src={opsBurger} />
                </div>
                <div className="burgerMenuDiv">
                    <h4>Hit me baby one more time</h4>
                    <h5>120kr</h5>
                    <p>Bröd, kött, ost, hamburgerdressing, gurka, isbergssallad, tomat och lök</p>
                    <img className="burgerImg" src={hitmeBurger} />
                </div>
                <div className="burgerMenuDiv">
                    <h4>Toxic</h4>
                    <h5>135kr</h5>
                    <p>Bröd, kött, ost, pepperjackost, BBQ sås, chillimajo, chilicheese, tomat, krispsallad och Britneys rostade lök</p>
                    <img className="burgerImg" src={toxicBurger} />
                </div>
                <div className="burgerMenuDiv">
                    <h4>Womanizer</h4>
                    <h5>135kr</h5>
                    <p>Bröd, kött, ost, avokado, jalapeñomajo, färsk chili, krispsallad och Britneys rostade lök</p>
                    <img className="burgerImg" src={womanizerBurger} />
                </div>
                <div className="burgerMenuDiv">
                    <h4>I Brittney Bitch (Vegetarisk)</h4>
                    <h5>120kr</h5>
                    <p>Bröd, halloumi, chilimayo, soltorkade tomater, picklad lök,mixsallad, gurka och tomat.</p>
                    <img className="burgerImg" src={brittneybitchBurger} />
                </div>
            </div>
            <div className='sides'>
                <div className="sidesMenuDiv">
                    <h4>Lökringar (4st)</h4>
                    <h5>20kr</h5>
                    <img className="sidesImg" src={onionrings} />
                </div>
                <div className="sidesMenuDiv">
                    <h4>Chilicheese (3st)</h4>
                    <h5>20kr</h5>
                    <img className="sidesImg" src={chilicheese} />
                </div>
                <div className="sidesMenuDiv">
                    <h4>Cheesefries</h4>
                    <h5>49kr</h5>
                    <img className="sidesImg" src={cheesefries} />
                </div>
                <div className="sidesMenuDiv">
                    <h4>Sötpommes</h4>
                    <h5>35kr</h5>
                    <img className="sidesImg" src={sweetpotato} />
                </div>
                <div className="sidesMenuDiv">
                    <h4>Pommes</h4>
                    <h5>25kr</h5>
                    <img className="sidesImg" src={pommes} />
                </div>
                <div className="sidesMenuDiv">
                    <h4>Dippsåser</h4>
                    <h5>15kr</h5>
                    <ul>
                        <li>Chilimajo</li>
                        <li>Tryffelmajo</li>
                        <li>Vitlök</li>
                        <li>Cheddar</li>
                        <li>Bearnaise</li>
                        <li>Chilibea</li>
                        <li>Bbq</li>
                    </ul>
                    <img className="sidesImg" src={dippingsause} />
                </div>
            </div>
            <div className='drinksMenuDiv'>
                <div>
                    <h4>Im not a girl, Not yet a Woman</h4>
                    <h5>55kr</h5>
                    <p>Husets öl</p>
                    <img className="sidesImg" src={beer} />
                </div>
                <div>
                    <h4>Everytime</h4>
                    <h5>65kr</h5>
                    <p>Husets röda eller vita vin</p>
                    <img className="sidesImg" src={wine} />
                </div>
                <div>
                    <h4>Crazy</h4>
                    <h5>45kr</h5>
                    <p>4cl vodka</p>
                    <img className="sidesImg" src={vodka} />
                </div>
                <div>
                    <h4>Work Bitch</h4>
                    <h5>35kr</h5>
                    <p>Alkoholfri öl</p>
                    <img className="sidesImg" src={noalcoholbeer} />
                </div>
                <div>
                    <h4>Gimme more</h4>
                    <h5>25kr</h5>
                    <p>Läsk: CocaCola, Fanta, Sprite även i light</p>
                    <img className="sidesImg" src={soda} />
                </div>
            </div>
        </>
    )
}