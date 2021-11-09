import React, { useEffect, useState } from "react";
import SmallTitle from "../common/typografy/smallTitle";

const withAuth = (SimpleComponent) => (props) => {
    const value = "SuperMadMel";
    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        setIsAuth(localStorage.getItem("user") === value);
    }, []);

    const onLogin = () => {
        localStorage.setItem("user", value);
        setIsAuth(true);
    };

    const onLogOut = () => {
        localStorage.setItem("user", "");
        setIsAuth(false);
    };

    return (
        <>
            {isAuth ? (
                <>
                    <SmallTitle> Дратути </SmallTitle>
                    <SimpleComponent
                        {...props}
                        onLogin={onLogin}
                        onLogOut={onLogOut}
                        isAuth={isAuth}
                        value={value}
                    />
                </>
            ) : (
                <>
                    <SmallTitle> Авторизуйтесь </SmallTitle>
                    <SimpleComponent
                        {...props}
                        onLogin={onLogin}
                        onLogOut={onLogOut}
                        isAuth={isAuth}
                        value={value}
                    />
                </>
            )}
        </>
    );
};

export default withAuth;
