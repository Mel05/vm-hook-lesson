import React, { useState, useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    const [textBlock, setTextBlock] = useState("Блок");
    const [widthBlock, setWidthBlock] = useState("60px");
    const [heightBlock, setHeightBlock] = useState("40px");

    const toggleTextBlock = () => {
        setTextBlock((text) => (text === "Блок" ? "text" : "Блок"));
    };

    const toggleSizeBlock = () => {
        setWidthBlock((width) => (width === "60px" ? "150px" : "60px"));
        setHeightBlock((height) => (height === "40px" ? "80px" : "40px"));
    };

    const handleClickWidth = () => {
        toggleSizeBlock();
        toggleTextBlock();
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: heightBlock, // 40
                    width: widthBlock, // 60
                    color: "white"
                }}
            >
                <small> {textBlock} </small>
            </div>
            <button
                className="btn btn-secondary mt-2"
                onClick={handleClickWidth}
            >
                Изменить блок
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
