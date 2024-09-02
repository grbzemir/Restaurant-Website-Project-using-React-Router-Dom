import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div style={{ backgroundColor: "#242424", padding: "20px 0", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <a href="https://www.instagram.com/grbzemir/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon style={{ color: "white", fontSize: "30px" }} />
                </a>
                <a href="https://www.facebook.com/emircan.gurbuz.3/" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon style={{ color: "white", fontSize: "30px" }} />
                </a>
                <a href="https://x.com/grbzemirr" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon style={{ color: "white", fontSize: "30px" }} />
                </a>
                <a href="https://www.linkedin.com/in/grbzemir/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon style={{ color: "white", fontSize: "30px" }} />
                </a>
                <a href="https://github.com/grbzemir" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon style={{ color: "white", fontSize: "30px" }} />
                </a>
            </div>
            <p style={{ color: "white", marginTop: "10px" }}>© 2024 Your Website. All Rights Reserved.</p>
        </div>
    );
}

export default Footer;
