import React, { useState, useEffect } from "react";
import newsStyle from "./News.module.css";
import Weather from "../Weather/Weather";
import axios from "axios";
import SimpleSlider from "../Slider/SimpleSlider";
import NewsCard from "../NewsCard/NewsCard";

const NewsPage = () => {
    return <div className={newsStyle.container}>
        <div className={newsStyle.header}>
            <div className={newsStyle["container-div"]}>Edureka News</div>
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
            <div className="p-2"><SimpleSlider /></div>
            <div className="p-2"><NewsCard /></div>
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
    </div>
}

export default NewsPage;