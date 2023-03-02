import React, { useState, useEffect } from "react";
import 'react-chat-widget/lib/styles.css';
import newsStyle from "./News.module.css";
import Weather from "../Weather/Weather";
import axios from "axios";
import SimpleSlider from "../Slider/SimpleSlider";
import NewsCard from "../NewsCard/NewsCard";
import { Widget, addResponseMessage } from 'react-chat-widget';

const NewsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    useEffect(() => {
        addResponseMessage('Welcome to this awesome chat!');
    }, []);

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        addResponseMessage(newMessage);
    };
    return <><div className={newsStyle.container}>
        <div className={newsStyle.header}>
            <div className={newsStyle["container-div"]}>Edureka News</div>
            <div class={newsStyle.menu}>
                <ul>
                    <li onClick={() => setSelectedCategory("CURRENT_AFFAIR")}>Current Affairs</li>
                    <li onClick={() => setSelectedCategory("SPORTS")}>Sports</li>
                    <li onClick={() => setSelectedCategory("POLITICS")}>About Us</li>
                    <li onClick={() => setSelectedCategory("POLITICS")}>Contact Us</li>
                </ul>
            </div>
        </div>
        <div className={newsStyle.sidebar}>
            <div className={newsStyle["side-content"]}>
                <Weather />
            </div>
        </div>
        {/* <div className={newsStyle.nav}>
            <ul>
                <li>Latest News</li>
            </ul>
            
        </div> */}
        <div className="d-flex flex-column mb-3">
            <div className="p-2">{selectedCategory === "SPORTS" ? "" : <SimpleSlider />}</div>
            <div className="p-2"><NewsCard newsMetaInfo={{ category: selectedCategory }} /></div>
        </div>

        {/* <div className={newsStyle.article}>
            <div className={newsStyle["slider-div"]}>
                SLIDER
            </div>
            <div className={newsStyle.card}>
                <p className={newsStyle.title}>Article Title</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
            </div>
            <div className={newsStyle.card}>
                <p className={newsStyle.title}>Article Title</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
            </div>
            <div className={newsStyle.card}>
                <p className={newsStyle.title}>Article Title</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
            </div>
        </div> */}
        <div className={newsStyle.footer}>
            <p>Copyright © Edureka News Frontend Project 2023</p>
        </div>
    </div>
    <Widget handleNewUserMessage={handleNewUserMessage} />
    </>
}

export default NewsPage;