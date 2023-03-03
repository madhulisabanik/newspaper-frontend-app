import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Modal from '../Modal/Modal';
import axios from 'axios';
import { useNavigate, NavLink } from "react-router-dom";

export default function Dashboard({userstate, setUserState}) {
    const navigate = useNavigate();
    const [newsList, setNewsList] = useState([]);
    const [basicModal, setBasicModal] = useState(false);
    const [newsObject, setNewsObject] = useState({
        title: "",
        description: "",
        newsCategory: "",
        url: ""
    });
    const [isEdit, setIsEdit] = useState(false);
    const editModal = (e) => {
        setIsEdit(true);
        setBasicModal(!basicModal);
        setNewsObject({...newsList.find((news) => news._id === e.target.id)})
    }
    useEffect(() => {
        axios.get("http://localhost:8080/api/news")
            .then((res) => {
                const allNewsData = res.data;
                setNewsList([...allNewsData]);
            })
            .catch(e => console.log(e));
    }, [])

    return (
        <>
            <header>
                <div className='p-5 text-center bg-light'>
                    <h1 className='mb-3'>Welcome to the admin dashboard!</h1>
                    <h4 className='mb-3'>where you can see the added news and manipulate them, Please click on the below button to add more news</h4>
                    <a className='btn btn-primary' role='button' style={{ color: "white" }} onClick={() => { setBasicModal(!basicModal); setIsEdit(false) }}>
                        Add new news
                    </a>
                    <a className='btn btn-danger' role='button' style={{ color: "white", float: 'right' }} onClick={() => {setUserState({}); navigate("/login", { replace: true });}}>
                        Logout
                    </a>
                </div>
            </header>
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>News Category</th>
                        <th scope='col'>URL</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {newsList.length > 0 ? newsList.map((news) => {
                        return <tr>
                            <td>
                                <p className='fw-bold mb-1'>{news.title}</p>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{news.description}</p>
                            </td>
                            <td>
                                <MDBBadge color='success' pill>
                                    {news.newsCategory}
                                </MDBBadge>
                            </td>
                            <td>{news.url}</td>
                            <td>
                                <button id={news._id} className="ripple ripple-surface ripple-surface-dark btn btn-link btn-rounded btn-sm" role="button" onClick={editModal}>Edit</button>
                                <button id={news._id} className="ripple ripple-surface ripple-surface-dark btn btn-link btn-rounded btn-sm" role="button" onClick={()=> {console.log("delete")}}>Delete</button>
                            </td>
                        </tr>
                    }) : ""}
                </MDBTableBody>
            </MDBTable>
            <Modal
                basicModal={basicModal} setBasicModal={setBasicModal}
                newsObject={newsObject} setNewsObject={setNewsObject}
                isEdit={isEdit} setIsEdit={setIsEdit}
                token={userstate.token}
                setNewsList={setNewsList} />
        </>

    );
}