import React from 'react';

export default function Contact() {
    return (
        <div className="contact-page">
            <h1>...contact &nbsp;</h1>
            <div className="links">
                <br /><br />
                <a href="https://www.linkedin.com/in/jennifer-osha-groetz-0318b16b/" target="_blank" title="LinkedIn" ><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/osha7" target="_blank" title="Github" ><i class="fa fa-github-square fa-3x" aria-hidden="true"></i></a>&nbsp;&nbsp;
                {/* <a href="" target="_blank" ><i class="fa fa-envelope fa-3x" aria-hidden="true"></i></a><br /><br />&nbsp;&nbsp; */}
                <a href="https://medium.com/@ogroetz" target="_blank" title="Medium Blog" ><i class="fa fa-medium fa-3x" aria-hidden="true"></i></a>&nbsp;&nbsp;
            </div>
            <div className="contact-info">
                <p><strong>Osha Groetz</strong><br />
                ogroetz@gmail.com<br />
                917-477-9485</p>
            </div>
        </div>
    )
}