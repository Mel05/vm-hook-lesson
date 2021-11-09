import React from "react";
import SmallTitle from "../common/typografy/smallTitle";

const withAuth = (SimpleComponent) => (props) => {
    const isLogin = localStorage.getItem("auth");
    console.log(isLogin);
    return (
        <>
            {isLogin ? (
                <>
                    <SmallTitle> Дратути </SmallTitle>
                    <SimpleComponent {...props} isLogin={isLogin} />
                </>
            ) : (
                <>
                    <SmallTitle> Авторизуйтесь </SmallTitle>
                    <SimpleComponent {...props} isLogin={isLogin} />
                </>
            )}
        </>
    );
};

export default withAuth;
