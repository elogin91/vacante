
import React from "react";

function AuthItem({ children }) {
    if (localStorage.getItem("token") !== null) {
        return (
            <>
                {children}
            </>);
    }
}
export default AuthItem; 