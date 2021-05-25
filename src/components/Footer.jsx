import React from 'react';

var currentYear = new Date().getFullYear();

function Footer() {
    return <footer id="footer">

        <div class="container-fluid">
            {/* <i class="icon-footer fab fa-twitter"></i>
            <i class="icon-footer fab fa-facebook-f"></i>
            <i class="icon-footer fab fa-instagram"></i>
            <i class="icon-footer fas fa-envelope"></i> */}
            <p>© Copyright {currentYear} Keeper</p>
        </div>
    </footer>
}

export default Footer;