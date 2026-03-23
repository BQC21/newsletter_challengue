import {icon_list} from "./assets/icon-list.svg"
import { useNavigate } from "react-router-dom";

function Success(){
    
    const navigate = useNavigate()

    const upload = (event) => {
	    event.preventDefault() 
        navigate("/Home") 
    };

    return(
        <>
            <img className="icon-success" ref={icon_list}></img>
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to {email}. 
                Please open it and click the button inside
                to confirm your subscription.</p>
            <button classname="btn" onClick={upload}>Dismiss message</button>
        </>
    )
}

export default Success;