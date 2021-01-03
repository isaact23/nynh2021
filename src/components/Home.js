import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import hero_image from "../img/hero-image.png"

export default function Home() {
    return (
        <div class="centerPanel">
            <div class="leftSide">
                <h1>Dear Future Self,</h1>
                <h2>Ready to create your time capsule letter?</h2>
                <p>Create a time capsule letter to yourself in the future!
                    Write a message or upload photos, videos, and audio files
                    to add to your time capsule. Then set a date and time and
                    send it to yourself!</p>
                <Link to="/add_message">
                    <Button color="primary">Let's get started</Button>{' '}
                </Link>
            </div>
            <div className="rightSide">
                <img src={hero_image}/>
            </div>
        </div>
    );
}
