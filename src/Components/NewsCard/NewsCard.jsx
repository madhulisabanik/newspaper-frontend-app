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
            content.push(
                <MDBCard alignment='center'>
                    <MDBCardBody>
                        <MDBCardTitle><Link to={news.url} target="_blank">{news.title}</Link></MDBCardTitle>
                        <MDBCardText>{news.description}</MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className='text-muted'>{news.createdAt}</MDBCardFooter>
                </MDBCard>
            )
        }
        return content;
    }
    return (
        <div className='d-flex justify-content-center'>
            {newsData.length > 0 ? newsCardList() : "Loading..."}
        </div>
    );
}