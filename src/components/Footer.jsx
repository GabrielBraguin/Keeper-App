import React from 'react';

var currentYear = new Date().getFullYear();

function Footer() {
    return <footer id="footer">

        <div class="container-fluid">
            <p>© Copyright {currentYear} Keeper</p>
        </div>
    </footer>
}

export default Footer;