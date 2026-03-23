
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {icon_list} from "./assets/icon-list.svg"
import {icon_success} from "./assets/icon-success.svg"

function Home() {

    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()){ // caso de error
            setError('Valid email required');
            return;
        }
        // caso de exito
        navigate('/success', {state: {noteText: message}}) // pasar contenido
    }

    return (
    <>
        <card className="card-field">
        <div className="row-container">
            <div className="col-md-6">
                <h1> Stay updated! </h1>
                <p> Join 60,000+ product managers receiving monthly updates on: </p>
                <p><a ref={icon_list}></a> Product discovery and building what matters </p>
                <p><a ref={icon_list}></a> Measuring to ensure updates are a success </p>
                <p><a ref={icon_list}></a> and much more! </p>
                
                <form onSubmit={handleSubmit}>
                    <label className="small-text">
                        Email address
                        <input value={message} 
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    setError(null) && (error);
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
        </card>
    </>
    )
}

export default Home;