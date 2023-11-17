import './App.css';
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div>
            <h1>Contact page</h1>
            <p><Link to="/">Home</Link> | <Link to="/about">About Us</Link></p>
        </div>
    );
}

export default Contact;