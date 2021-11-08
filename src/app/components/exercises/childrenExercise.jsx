import React, { useState } from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});

    console.log(data, setData);

    React.Children.map(children, (child, index) => {
        return (
            <>
                {index + 1} {child}
            </>
        );
    });

    console.log("children", children);
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как
                <code>React.Children.map</code> так и
                <code>React.Children.toArray</code>
            </p>

            <Component name="email" label="email" />
            <Component name="2" />
            <Component name="3" />
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
