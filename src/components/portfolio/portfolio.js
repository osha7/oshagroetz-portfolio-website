import React from 'react';
import Video from './project-video'
import '../../css/portfolio.css'

export default function Portfolio() {
    return (
        <div>
            <div className="portfolio">
                <Video className="wtc-video" url="https://youtu.be/DLSmIAWm7AU" header={"Women Connect Tech - React.JS/Rails"} githubFrontend={"https://github.com/osha7/women-connect-tech-frontend"} githubBackend={"https://github.com/osha7/women-connect-tech-api"}
                moreInfo={"With the percentage of women in technology being aprox 25% & only 12% in SE, this app was created as a way for women to connect and support each-other."} />
                <Video className="cart-video" url="https://youtu.be/XCvosJsfCvU" header={"Simulated Cart - Vanilla Javascript/Rails"} githubFrontend={"https://github.com/osha7/checkout-frontend"} githubBackend={"https://github.com/osha7/checkout-api"} 
                moreInfo={"Ware is a vanilla Javascript app showing two backend models and how they interact with frontend code. This single page application uses async fetches while also tying in Object Oriented JS. "} />
                <Video className="sjevents-video" url="https://youtu.be/y1kREjN5X-0" header={"Social Justice Events - Ruby on Rails"} github={"https://github.com/osha7/Social-Justice-Events"}
                moreInfo={"In Spring of 2020 I realized that with all of the social justice movements taking place, there was no central app for ppl to find out more information on protests, meetings, etc.  This app was built as a way to connect people and information."} />
                <Video className="change-video" url="https://youtu.be/UOxASnISdFk" header={"Institutional Change - Ruby/Sinatra"} github={"https://github.com/osha7/app-institutional_change"}
                moreInfo={"Program written in response to 2020’s social movement for change.  Platform for education and conversation."}  />
                <Video className="cli-video" url="https://youtu.be/RxG3ljNT3ro" header={"CLI Gem - Denver Vegan"} github={"https://github.com/osha7/denver_vegan"}
                moreInfo={"First Flatiron Project! CLI-GEM incorporating a Nokogiri scrape of a Conde Nast Traveler article on the Denver vegan scene.  And no, I'm not 'that' kind of vegan: Eat what makes you happy!"} />

            </div>
        </div>
    )
}