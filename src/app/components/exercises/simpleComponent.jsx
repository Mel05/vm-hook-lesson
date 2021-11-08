import React from "react";

import PropTypes from "prop-types";
import Subtitle from "../common/typografy/subtitle";

const SimpleComponent = ({ name, onChange }) => {
    return (
        <>
            <Subtitle>{name || "SimpleComponent"}</Subtitle>
            <button className="btn btn-primary" onClick={onChange}>
                1
            </button>
        </>
    );
};
SimpleComponent.propTypes = {
    name: PropTypes.string
};
export default SimpleComponent;
