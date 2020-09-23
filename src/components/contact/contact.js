import React from 'react';
import Email from './email'


export default function Contact() {
    return (
        
        <div className="contact-page">
            <h1>...contact &nbsp;</h1>
            
            <div className="links">
                <br /><br />
                <a href="https://www.linkedin.com/in/jennifer-osha-groetz-0318b16b/" target="_blank" rel="noopener noreferrer" title="LinkedIn" alt="linkedin"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/osha7" target="_blank" rel="noopener noreferrer"  title="Github" alt="github" ><i className="fa fa-github-square fa-3x" aria-hidden="true" ></i></a>&nbsp;&nbsp;&nbsp;
                {/* <a href="" target="_blank" rel="noopener noreferrer"  ><i class="fa fa-envelope fa-3x" aria-hidden="true"></i></a><br /><br />&nbsp;&nbsp; */}
                <a href="https://medium.com/@ogroetz" target="_blank" rel="noopener noreferrer"  title="Medium Blog" alt="medium-blog"><i className="fa fa-medium fa-3x" aria-hidden="true" ></i></a>&nbsp;&nbsp;&nbsp;
            </div>
            <Email />
            
            {/* <div className="contact-info">
                <p><strong>Osha Groetz</strong><br /> */}
                {/* <a href = "mailto: ogroetz@gmail.com">ogroetz@gmail.com</a> */}
                {/* ogroetz@gmail.com<br />
                917-477-9485</p>
            </div> */}
            
        </div>
    )
}