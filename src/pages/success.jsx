// import {icon_list} from "./icon_list.svg"
import { useLocation, useNavigate } from "react-router-dom";

function Success(){

    const navigate = useNavigate();
    const handleMain = (e) =>{
        e?.preventDefault();
        navigate('/')
    }

    const location = useLocation();

    // leer el dato pasado
    const message = location.state?.message ?? '(no message)';

    return(
            <div className="card-field">
                {/* <img className="icon-success" src={icon_list}></img> */}
                <h2>Thanks for subscribing!</h2>
                <p>
                    A confirmation email has been sent to <strong>{message}</strong>. 
                    Please open it and click the button inside
                    to confirm your subscription.
                </p>
                <button className="btn" type="button" onClick={handleMain}>Dismiss message</button>
            </div>
    )
}

export default Success;