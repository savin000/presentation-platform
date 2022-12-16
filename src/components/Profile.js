import React from 'react';
import "../styles/components/profile.css"

export default function Profile(props) {
    const buttonAction = props.action;
    const name = props.name
    const additionalInfo = props.additionalInfo;

    return (
        <div className="card">
            <div className="main-info">
                <div className="circle"></div>

                <div className="about">
                    <h1>{ name }</h1>
                    <span>{ additionalInfo }</span>
                </div>

                <button className="action-button">
                    { buttonAction }
                </button>
            </div>

            <div className="secondary-info">
                <div className="statistics">
                    <h2>
                        <span>85</span> подписчиков
                    </h2>
                    <h2>
                        <span>16</span> подписок
                    </h2>
                </div>

                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    )
}