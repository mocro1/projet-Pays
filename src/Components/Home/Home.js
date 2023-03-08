import './Home.css';
import { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";

function Home(props) {
    const [data, setData] = useState([])
    const [filtre, setFiltre] = useState(data);
    const [searchValue, setSearchValue] = useState('')
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => { setData(data) })
        .catch((error) => console.error(error))
        console.error("ok")
    }, [])

    // filtrer bar de recherche___________________
    useEffect(() => {

        let filtrePays = data.filter(pays => pays.name.common.toLowerCase().startsWith(searchValue.toLowerCase())
        );

        setFiltre(filtrePays);
    }, [data, searchValue]);


    //  ordre alphabitique _______________________
    const items = data;
    items.sort((a, b) => {
        const nameA = a.name.common; // ignore upper and lowercase
        const nameB = b.name.common; // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // console.log(items);
        return 0;
    });


    // filter region____________________________

    const [region, setRegion] = useState("All regions");

    useEffect(() => {

        if (region == "All regions") {
            setFiltre(data)
        }
        else if(region != "All regions"){
            const filtreRegion = data.filter(pays => pays.region.includes(region))
            setFiltre(filtreRegion);
        }

    }, [region]);

    return(
        <div className={props.darkmode?"Home HomeDark" : "Home"}>
        <Navbar darkmode={props.darkmode} setDarkmode={props.setDarkmode}/>
            <div className="home">
                <div className='barSearch'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input onChange={(e)=>{setSearchValue(e.target.value)}} type="text" placeholder='Search for a county' />
                </div>
                <div className='rightInput'>
                        <p>{region}</p>
                        <div className="dropdown-content">
                            <p onClick={() => { setRegion("All regions")}}>All regions</p>
                            <p onClick={() => { setRegion("Africa") }}>Africa</p>
                            <p onClick={() => { setRegion("America") }}>America</p>
                            <p onClick={() => { setRegion("Asia") }}>Asia</p>
                            <p onClick={() => { setRegion("Europe") }}>Europa</p>
                            <p onClick={() => { setRegion("Oceania") }}>Oceania</p>
                        </div>
                </div>
            </div>
            <div className='section2'>
            
            {filtre.map((element, index) => {
            return(

        <div key={index} className={props.darkmode?"carte carteDark":"carte"}  >
    
                <Link to={`/${element.name.common}`} state={{el: element}}>
                <div className='img' onClick={()=>{}}>
                    <img src={element.flags.png} alt="" />
                </div>
                </Link>
                <div className='information'>
                    <h2>{element.name.common}</h2>
                    <h4>Population : <span>{element.population}</span></h4>
                    <h4>Region : <span>{element.region}</span></h4>
                    
                    <h4>Capital : <span>{element.capital}</span></h4>


                </div>
            </div>
                            
                        ) 

                    })}
                {/* })} */}
            </div> 

        </div>
    )
}
export default Home;