import React, { useState } from 'react';
import axios from 'axios';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput
} from 'mdb-react-ui-kit';

export default function Modal({ basicModal, setBasicModal, newsObject, setNewsObject, isEdit, setIsEdit }) {

    const toggleShow = () => setBasicModal(!basicModal);
    const handleInputs = (event) => {
        const newKeyValuepair = { [event.target.name]: event.target.value }
        setNewsObject((prev, newKeyValue) => {
            return { ...prev, ...newKeyValuepair }
        });
    };
    const handleSubmit = () => {
        console.log("submit", [newsObject, isEdit]);
        let axiosObject = {};
        if (isEdit) {
            const { id, ...editObj } = newsObject;
            axiosObject = {
                method: 'put',
                url: `http://localhost:8080/api/news/${id}`,
                data: { ...editObj }
            }
        }
        else {
            axiosObject = {
                method: 'post',
                url: "http://localhost:8080/api/news",
                data: { ...newsObject }
            }
        }
        axios(axiosObject)
            .then((response) => {
                console.log("response", response);
                setIsEdit(false);
                setNewsObject({
                    title: "",
                    description: "",
                    newsCategory: "",
                    url: ""
                })
            })
            .catch(e => console.log("error===>", e))
    }
    return (
        <>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Add a new News</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <MDBInput className='mb-4' name="title" id='title' label='Title' onChange={handleInputs} value={newsObject.title} />{dropDown(newsObject, handleInputs)}
                                <MDBInput className='mb-4' name="description" type='textbox' id='description' label='Description' onChange={handleInputs} value={newsObject.description} />
                                <MDBInput className='mb-4' name="url" type='textbox' id='url' label='News URL' onChange={handleInputs} value={newsObject.url} />
                            </form>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <a className='btn secondary' color='none' role='button' onClick={toggleShow}>
                                Close
                            </a>
                            <a className='btn btn-primary' color='none' role='button' onClick={handleSubmit}>
                                Create
                            </a>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}

const dropDown = (newsObject, handleInputs) => {
    return <>
        <div className='mb-4'>
            <label htmlFor="select1" >Choose news category</label>
            <select name="newsCategory" value={newsObject.newsCategory} onChange={handleInputs} className="form-control">
                <option value="select">Select an Option</option>
                <option value="SPORTS">Sports</option>
                <option value="CURRENT_AFFAIR">Current Affairs</option>
                <option value="POLITICS">Politics</option>
            </select>
        </div>
    </>
}