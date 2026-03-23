
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as IconList } from './assets/icon-list.svg'
// import {icon_list} from "./assets/icon-list.svg"
import {icon_success} from "./assets/icon-success.svg"

function Home() {

    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()){ // mensaje vacio
            setError('Valid email required');
            return;
        }
        // caso de exito
        navigate('/Success', {state: {noteText: message}}) // pasar contenido
    }

    return (
    <>
        <div className="card-field">
            <div className="row-container">
                <div className="col-md-6">
                    <h1> Stay updated! </h1>
                    <p> Join 60,000+ product managers receiving monthly updates on: </p>
                    {/* <p><img src={icon_list} alt="icon"></img> Product discovery and building what matters </p>
                    <p><img src={icon_list} alt="icon"></img> Measuring to ensure updates are a success </p>
                    <p><img src={icon_list} alt="icon"></img> and much more! </p> */}
                    <p><IconList /> Product discovery and building what matters </p>
                    <p><IconList /> Measuring to ensure updates are a success </p>
                    <p><IconList /> and much more! </p>        
                    <form onSubmit={handleSubmit}>
                        <label className="small-text">
                            Email address
                            <input type = "email"
                                    value={message} 
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                        setError(null);
                                    }}
                                    placeholder="email@company.com">
                            </input>
                        </label>
                        {error && <div className="error">{error}</div>}
                        <button className="btn" type = "submit">Subscribe to monthly newsletter</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <img ref={icon_success}></img>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home;