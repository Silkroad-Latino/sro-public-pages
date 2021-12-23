import React from "react";

import NavbarComponent from "../../components/navbar";
import FooterComponent from "../../components/footer";

export default function MainLayout({ children }) {
    return (
        <>
            <NavbarComponent/>

            <div className="container">
                {children}
            </div>

            <FooterComponent/>

            <div className="goog-te-spinner-pos">
                <div className="goog-te-spinner-animation">
                    <svg xmlns="http://www.w3.org/2000/svg" className="goog-te-spinner" width="96px" height="96px"
                         viewBox="0 0 66 66">
                        <circle
                          className="goog-te-spinner-path"
                          fill="none"
                          strokeWidth="6" s
                          trokeLinecap="round"
                          cx="33"
                          cy="33" r="30"
                        />
                    </svg>
                </div>
            </div>
        </>
    )
}
