import React, { useState, useEffect } from "react";
import 'react-chat-widget/lib/styles.css';
import newsStyle from "./News.module.css";
import Weather from "../Weather/Weather";
import SimpleSlider from "../Slider/SimpleSlider";
import NewsCard from "../NewsCard/NewsCard";
import { Widget, addResponseMessage } from 'react-chat-widget';
import MapWidget from "../MapWidget/MapWidget";
import ContactUs from "../ContactUs/ContactUs";

const NewsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [currentPage, setCurrentPage] = useState("HOME");

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
            <div className={newsStyle["container-div"]}>Update 24x7</div>
            <div class={newsStyle.menu}>
                <ul>
                    <li onClick={() => { setSelectedCategory("ALL"); setCurrentPage("HOME"); }}>Home</li>
                    <li onClick={() => { setSelectedCategory("SPORTS"); setCurrentPage("HOME"); }}>Sports</li>
                    <li onClick={() => setCurrentPage("ABOUTUS")}>About Us</li>
                    <li onClick={() => setCurrentPage("CONTACTUS")}>Contact Us</li>
                </ul>
            </div>
        </div>

        <div className={newsStyle.sidebar}>
            <div className={newsStyle["side-content"]}>
                <Weather />
            </div>
        </div>

        {currentPage === "HOME" ? <>
            <div className="d-flex flex-column mb-3">
                <div className="p-2">{selectedCategory === "SPORTS" ? "" : <SimpleSlider />}</div>
                <div className="p-2"><NewsCard newsMetaInfo={{ category: selectedCategory }} /></div>
            </div>
        </> : ""}

        {currentPage === "ABOUTUS" ? <>
            <div className="d-flex flex-column mb-3">
                <div className="p-2">
                    <MapWidget />
                </div>
            </div>
        </> : ""}

        {currentPage === "CONTACTUS" ? <>
            <div className="d-flex flex-column mb-3">
                <div className="p-2">
                    <ContactUs />
                </div>
            </div>
        </> : ""}

        <div className={newsStyle.footer}>
            <p>Copyright © Update 24X7 News, {new Date().getFullYear()}</p>
        </div>
    </div>
        <Widget handleNewUserMessage={handleNewUserMessage} />
    </>
}

export default NewsPage;