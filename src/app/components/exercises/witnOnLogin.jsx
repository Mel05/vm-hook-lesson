import React from "react";

const withOnLogin = (SimpleComponent) => (props) => {
    const onLogin = true;
    const handleChange = () => {
        const onLogOut = !onLogin;
        console.log(onLogOut);
    };

    return <SimpleComponent {...props} onChange={handleChange} />;
};

export default withOnLogin;
