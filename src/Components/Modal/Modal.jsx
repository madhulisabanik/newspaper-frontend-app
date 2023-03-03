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

export default function Modal({ basicModal, setBasicModal, newsObject, setNewsObject, isEdit, setIsEdit, token, setNewsList }) {

    const toggleShow = () => {
        setBasicModal(!basicModal); setNewsObject({
            title: "",
            description: "",
            newsCategory: "",
            url: ""
        })
    };
    const handleInputs = (event) => {
        const newKeyValuepair = { [event.target.name]: event.target.value }
        setNewsObject((prev, newKeyValue) => {
            return { ...prev, ...newKeyValuepair }
        });
    };
    const handleSubmit = () => {
        console.log("submit", [newsObject, isEdit]);
        let newCreated = {};
        let axiosObject = {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        };
        if (isEdit) {
            const { _id, ...editObj } = newsObject;
            axiosObject = {
                ...axiosObject,
                method: 'put',
                url: `http://localhost:8080/api/news/${_id}`,
                data: { ...editObj }
            }
        }
        else {
            axiosObject = {
                ...axiosObject,
                method: 'post',
                url: "http://localhost:8080/api/news",
                data: { ...newsObject }
            }
        }
        axios(axiosObject)
            .then((response) => {
                console.log("response", response);
                newCreated = response.data.data;
                // setIsEdit(false);
                // setNewsObject({
                //     title: "",
                //     description: "",
                //     newsCategory: "",
                //     url: ""
                // })
            })
            .catch(e => console.log("error===>", e))
            .finally(() => {
                if (isEdit) {
                    setNewsList((prev) => {
                        const index = prev.findIndex((el) => el._id === newsObject._id );
                        prev[index] = {...newsObject};
                        return [...prev];
                    })
                }
                else {
                    setNewsList((prev) => [newCreated, ...prev])
                }
                toggleShow();
            })
    }
    return (
        <>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>{isEdit ? "Edit News" : "Add a new News"}</MDBModalTitle>
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
                                {isEdit ? "Update" : "Create"}
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
                <option value="Current Affairs">Current Affairs</option>
                <option value="Politics">Politics</option>
            </select>
        </div>
    </>
}