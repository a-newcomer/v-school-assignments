import React from 'react';

function Footer(props) {
    let d = new Date();
   let year = d.getFullYear()
    return (
        <footer>
            <p>Copyright Ann Newcomer ©{year}</p>
            <p>Icons by <a href="https://friconix.com/" rel="noopener noreferrer" target="_blank"><i className="fi-snsuxl-friconix"></i> Friconix</a></p>
        </footer>
    );
}

export default Footer;