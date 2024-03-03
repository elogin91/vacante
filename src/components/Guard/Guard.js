
import React from "react";

const Guard = ({ requiredRoles, children }) => {

    const hasRole = (roles) => {
        let perfil = localStorage.getItem('perfil');
        
        if (perfil === null) {
            perfil = ["Anonymous"];
        };
        let found = roles.find(s => perfil == s);
        return found !== undefined;
    }

    if (hasRole(requiredRoles)) {
        return (
            <>
                {children}
            </>
        );
    } else {
        return <></>;
    }

};

export default Guard; 