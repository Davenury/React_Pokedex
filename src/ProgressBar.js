import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        borderRadius: "10px",
        backgroundColor: "#e0e0de",
    }

    const fillerStyles = {
        borderRadius: "10px",
        padding: 2,
        width: `${completed}%`,
        backgroundColor: bgcolor,
    }

    const labelStyles = {
        padding: 5,
        color: 'white'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;