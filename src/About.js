import './App.css';
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>About page</h1>
            <p><Link to="/">Home</Link> | <Link to="/contact">Contact</Link></p>
        </div>
    );
}

export default About;