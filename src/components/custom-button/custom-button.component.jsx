import React from "react";
import './custom-button.component.styles.scss';
import { FaGoogle  } from "react-icons/fa";

const CustomButton = ({children,isGoogleSignIn ,...otherProps}) => (
    <button  className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {isGoogleSignIn &&   <FaGoogle style={{marginRight: "5px"}}/> } {children}
    </button>
)

export default CustomButton;