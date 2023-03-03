import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardFooter, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function NewsCard({ newsMetaInfo }) {

    const [newsData, setNewsData] = useState([]);
    useEffect(() => {
        console.log(newsMetaInfo.category);

        axios.get("http://localhost:8080/api/news")
            .then((res) => {
                const allNewsData = res.data;
                const filtered = [...allNewsData.filter((news) => news.newsCategory.toUpperCase() === "SPORTS")];
                console.log("checking--", filtered);
                setNewsData(newsMetaInfo.category === "SPORTS" ? filtered : [...allNewsData]);
            })
    }, [newsMetaInfo]);

    const newsCardList = () => {
        let content = [];
        console.log("inside newsCardList")
        //To show latest 3 news
        const newsDataLimit = newsData.length < 3 ? newsData.length : 3;

        for (let index = 0; index < newsDataLimit; index++) {
            const news = newsData[index];
            const dateDiffindays = date_diff_indays(news.createdAt);
            const newsCreated = dateDiffindays === 0 ? "Today" : dateDiffindays + " days ago";
            content.push(
                <MDBCard alignment='center'>
                    <MDBCardBody>
                        <MDBCardTitle><Link to={news.url} target="_blank">{news.title}</Link></MDBCardTitle>
                        <MDBCardText>{news.description}</MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className='text-muted'>{newsCreated}</MDBCardFooter>
                </MDBCard>
            )
        }
        return content;
    }

    const date_diff_indays = function (getDate) {
        const dt1 = new Date(getDate);
        const dt2 = new Date();
        return Math.floor(
            (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
                Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
            (1000 * 60 * 60 * 24)
        );
    };

    return (
        <div className='d-flex justify-content-center'>
            {newsData.length > 0 ? newsCardList() : "Loading..."}
        </div>
    );
}