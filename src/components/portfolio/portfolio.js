import React from 'react';
import Video from './project-video'

export default function Portfolio() {
    return (
        <div>
            <div className="portfolio">
                <Video className="wtc-video" url="https://youtu.be/DLSmIAWm7AU" header={"Women Connect Tech - React.JS/Rails"}/>
                <Video className="cart-video" url="https://youtu.be/XCvosJsfCvU" header={"Simulated Cart - Vanilla Javascript/Rails"}/>
                <Video className="sjevents-video" url="https://youtu.be/y1kREjN5X-0" header={"Social Justice Events - Ruby on Rails"}/>
                <Video className="change-video" url="https://youtu.be/UOxASnISdFk" header={"Institutional Change - Ruby/Sinatra"}/>
                <Video className="cli-video" url="https://youtu.be/RxG3ljNT3ro" header={"CLI Gem - Denver Vegan"}/>

            </div>
        </div>
    )
}