
import React from "react";

function NoAuthBtn({ children }) {
  if (localStorage.getItem("token") == null) {
    return (<>
      {children}
    </>);
  }
}
export default NoAuthBtn; 