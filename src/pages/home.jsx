
import { useEffect } from "react";
import {icon_list} from "./assets/icon-list.svg"
import {icon_success} from "./assets/icon-success.svg"

import Success from "./pages/success"
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate()
    const form = document.getElementById("my_form");
    const msg = document.getElementById("message");

    form.addEventListener("submit", function (event) {
            event.preventDefault(); 
            msg != null && navigate("/success") 
        }
    );

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
                
                <form id="my_form">
                    <small className="small-text">Email address</small>
                    <input id = "message" type="text" placeholder="email@company.com"></input>
                    <button classname="btn" type = "submit">Subscribe to monthly newsletter</button>
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