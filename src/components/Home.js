import "../css/Home.css"
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div class="centerPanel">
            <img src="/img/hero-image.png"/>
            <div class="leftSide">
                <h1>Dear Future Self,</h1>
                <h2>Ready to create your time capsule letter?</h2>
                <p>Create a time capsule letter to yourself in the future!
                    Write a message or upload photos, videos, and audio files
                    to add to your time capsule. Then set a date and time and
                    send it to yourself!</p>
                <Link to="/add_content">
                    <Button variant="primary">Let's get started</Button>{' '}
                </Link>
            </div>
        </div>
    );
}
