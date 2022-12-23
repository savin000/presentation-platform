import React from 'react';
import "../styles/components/subscription-card.css"

export default function SubscriptionCard(props) {
    return (
        <div className="subscription-card">
            <div className="circle"></div>

            <div className="about">
                <h1>{ props.name }</h1>
                <span>{ props.about }</span>
            </div>
        </div>
    )
}