import React from "react";
import PropTypes from "prop-types";
import Subtitle from "../common/typografy/subtitle";

const SimpleComponent = ({ onLogin, onLogOut, isAuth, value }) => {
    return (
        <>
            <Subtitle>{isAuth ? value : "SimpleComponent"}</Subtitle>
            <button
                onClick={isAuth ? onLogOut : onLogin}
                className={`btn btn-${isAuth ? "danger" : "primary"}`}
            >
                {isAuth ? "Выйти из системы" : "Войти"}
            </button>
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    value: PropTypes.string,
    isAuth: PropTypes.bool
};
export default SimpleComponent;
