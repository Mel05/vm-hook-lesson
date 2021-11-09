import React from "react";

const withOnLogin = (SimpleComponent) => (props) => {
    let onLogin = "Войти";
    console.log(props);

    const handleChange = () => {
        const onLogOut = "Выйти";
        if (onLogin === "Войти") {
            onLogin = onLogOut;
        } else if (onLogin === "Выйти") {
            onLogin = "Войти";
        }
        console.log(onLogin);
        return onLogin;
    };

    return (
        <SimpleComponent {...props} onChange={handleChange} onLogin={onLogin} />
    );
};

export default withOnLogin;
