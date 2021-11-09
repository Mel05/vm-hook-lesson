import React from "react";

import PropTypes from "prop-types";
import Subtitle from "../common/typografy/subtitle";

const SimpleComponent = ({ name, onChange, onLogin }) => {
    return (
        <>
            <Subtitle>{name || "SimpleComponent"}</Subtitle>
            <button className="btn btn-primary" onClick={onChange}>
                {onLogin}
            </button>
        </>
    );
};
SimpleComponent.propTypes = {
    name: PropTypes.string,
    onLogin: PropTypes.string,
    onChange: PropTypes.func.isRequired
};
export default SimpleComponent;
