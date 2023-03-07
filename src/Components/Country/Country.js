import { Link, useLocation} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState , useEffect } from "react";
import './Country.css'


function Country(props) {
    let poto = useLocation();
    let { el } = poto.state;
    console.log(el.name);

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => { setData(data) })
        .catch((error) => console.error(error))
        console.error("ok")
    }, [])


    
    let propCurr;
    for (let key in el.currencies) {
        propCurr = key;
        console.log(propCurr);
    }

    
    let propLang;
    for (const key in el.languages) {
        propLang = key;
        console.log(propLang);
    }

    function compare_border(e, i, eldia) {
        if (e === i) {
            return eldia.name.common;
        }
        return;
    }
    
    return (
        <div>

            <Navbar darkmode={props.darkmode} setDarkmode={props.setDarkmode}/>
            <div className={props.darkmode?"country HomeDark" : "country"}>
                    <Link to={"/"}>
                <button className="back">
                    Back
                </button>
                    </Link>

                <div className="section3">
                    <div className="imgpays">
                        <img src={el.flags.svg} alt="" />
                    </div>


                    <div className={props.darkmode?"detail detailDark" : "detail"}>
                        <h2>{el.name.common}</h2>
                        <div className="details">
                            <div className="left">
                                <h4>Native name  : <span className={props.darkmode?"span spanDark" : "span"}>{el.name.official}</span></h4>
                                <h4>Population   : <span className={props.darkmode?"span spanDark" : "span"}>{el.population}</span></h4>
                                <h4>Region       : <span className={props.darkmode?"span spanDark" : "span"}>{el.region}</span></h4>
                                <h4>Sub Region   : <span className={props.darkmode?"span spanDark" : "span"}>{el.subregion}</span></h4>
                                <h4>Capital      : <span className={props.darkmode?"span spanDark" : "span"}>{el.capital}</span></h4>
                            </div>
                            <div className="right">
                                <h4>Top Level Domain :  <span className={props.darkmode?"span spanDark" : "span"}>{el.tld}</span> </h4>
                                <h4>Currencies       :  <span className={props.darkmode?"span spanDark" : "span"}>{propCurr}</span></h4>
                                <h4>Languages        :  <span className={props.darkmode?"span spanDark" : "span"}>{el.languages[propLang]}</span></h4>
                            </div>
                        </div>
                        <div className="bordercountry">
                            <h4>Border Countries : <span>{el.borders ? el.borders.map((ele, index) => {return <button>{data.map((eldente, indexos) => {return compare_border(ele, eldente.cca3, eldente)})} </button>}) : ""}</span></h4>
                        </div>


                        
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Country