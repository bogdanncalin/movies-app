import { useEffect } from "react";
import PropTypes from "prop-types";

const ToggleVisibility = ({
  loginButtonRef,
  registerButtonRef,
  profileRef,
  nameRef,
  logoutButtonRef,
}) => {
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      loginButtonRef.current.style.display = "none";
      registerButtonRef.current.style.display = "none";
      logoutButtonRef.current.style.display = "block";
      profileRef.current.style.display = "block";
      nameRef.current.style.display = "block";
    } else {
      loginButtonRef.current.style.display = "block";
      registerButtonRef.current.style.display = "block";
      logoutButtonRef.current.style.display = "none";
      profileRef.current.style.display = "none";
      nameRef.current.style.display = "none";
    }

    // Optional: Handle token changes
    const intervalId = setInterval(() => {
      const currentToken = localStorage.getItem("accessToken");
      if (currentToken) {
        loginButtonRef.current.style.display = "none";
        registerButtonRef.current.style.display = "none";
        profileRef.current.style.display = "block";
        nameRef.current.style.display = "block";
        logoutButtonRef.current.style.display = "block";
      } else {
        loginButtonRef.current.style.display = "block";
        registerButtonRef.current.style.display = "block";
        profileRef.current.style.display = "none";
        nameRef.current.style.display = "none";
        logoutButtonRef.current.style.display = "none";
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [loginButtonRef, registerButtonRef, profileRef, nameRef]);

  return null; // This component doesn’t render anything
};

export default ToggleVisibility;

ToggleVisibility.propTypes = {
  loginButtonRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  registerButtonRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  profileRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  nameRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  logoutButtonRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};
