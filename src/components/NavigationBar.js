import React from 'react';
import "../styles/components/navigation-bar.css"
import { Link } from "react-router-dom";

const makeSelected = event => {
    // todo: refactor this
    for (let i = 0; i < event.target.parentElement.parentElement.children.length; i++) {
        for (let j = 0; j < event.target.parentElement.parentElement.children.item(i).children.length; j++) {
            event.target.parentElement.parentElement.children.item(i).children.item(j).classList.remove("selected");
        }
    }

    event.target.classList.add("selected");
}

const restrictDrag = event => {
    return false;
}

export default function NavigationBar() {
    return (
        <nav className="menu">
            <ul onClick={makeSelected}>
                <li>
                    <Link to={`/home`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 12.7597C5 11.4019 5 10.723 5.27446 10.1263C5.54892 9.52956 6.06437 9.08775 7.09525 8.20413L8.09525 7.34699C9.95857 5.74986 10.8902 4.95129 12 4.95129C13.1098 4.95129 14.0414 5.74986 15.9047 7.34699L16.9047 8.20413C17.9356 9.08775 18.4511 9.52956 18.7255 10.1263C19 10.723 19 11.4019 19 12.7597V17.0001C19 18.8857 19 19.8285 18.4142 20.4143C17.8284 21.0001 16.8856 21.0001 15 21.0001H9C7.11438 21.0001 6.17157 21.0001 5.58579 20.4143C5 19.8285 5 18.8857 5 17.0001V12.7597Z"
                                stroke="#2F2F2F" stroke-width="1.5"/>
                            <path d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21"
                                  stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Главная
                    </Link>
                </li>
                <li>
                    <Link to={`/profile`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471"
                                stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round"/>
                            <circle cx="12" cy="8" r="4" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        Профиль
                    </Link>
                </li>
                <li>
                    <Link to={`/calendar`} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="6" width="18" height="15" rx="2" stroke="#2F2F2F" stroke-width="1.5"/>
                            <path
                                d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z"
                                fill="#2F2F2F"/>
                            <path d="M7 3L7 6" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M17 3L17 6" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round"/>
                            <rect x="7.5" y="12.1991" width="3" height="1.5" rx="0.5" fill="#2F2F2F"/>
                            <rect x="7.5" y="16.1991" width="3" height="1.5" rx="0.5" fill="#2F2F2F"/>
                            <rect x="13.5" y="12.1991" width="3" height="1.5" rx="0.5" fill="#2F2F2F"/>
                            <rect x="13.5" y="16.1991" width="3" height="1.5" rx="0.5" fill="#2F2F2F"/>
                        </svg>
                        События
                    </Link>
                </li>
                <li>
                    <Link to={`/subscriptions`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="8" r="4" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M14.3666 15.5C13.5993 15.3347 12.803 15.25 12.0001 15.25C10.1202 15.25 8.2772 15.7143 6.75589 16.5898C5.23501 17.4651 4.09309 18.7205 3.56639 20.1948C3.42703 20.5848 3.63027 21.014 4.02034 21.1534C4.4104 21.2927 4.83959 21.0895 4.97894 20.6994C5.36384 19.6221 6.23065 18.6228 7.50408 17.8899C8.73403 17.1821 10.2513 16.7779 11.8337 16.7514C12.2658 16.0034 13.0741 15.5 14.0001 15.5L14.3666 15.5Z"
                                  fill="#2F2F2F"/>
                            <path d="M18 14L18 22" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M22 18L14 18" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        Подписки
                    </Link>
                </li>
            </ul>
        </nav>
    )
}