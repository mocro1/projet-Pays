import './Navbar.css';

function Navbar(props) {
    return(
        <div className={props.darkmode? "navbardark": "navbar"}>
            <h1>Where in the world?</h1>
            <button className={props.darkmode? "darkModedark":"darkMode"} onClick={()=>{props.setDarkmode(props.darkmode===false)}}>{props.darkmode === false ? "darkmode " : props.darkmode === true ? "lightmode" :""}</button>
        </div>
    )
}
export default Navbar;