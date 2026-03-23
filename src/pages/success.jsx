import {icon_list} from "./assets/icon-list.svg"
import { useLocation, useNavigate } from "react-router-dom";

function Success(){

    const navigate = useNavigate();
    const handleMain = (e) =>{
        e.preventDefault();
        navigate('/')
    }

    const location = useLocation();

    // leer el dato pasado
    const message = location.state?.message ?? '(no message)';

    return(
        <>
            <img className="icon-success" ref={icon_list}></img>
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to {message}. 
                Please open it and click the button inside
                to confirm your subscription.</p>
            <button className="btn" onClick={handleMain}>Dismiss message</button>
        </>
    )
}

export default Success;