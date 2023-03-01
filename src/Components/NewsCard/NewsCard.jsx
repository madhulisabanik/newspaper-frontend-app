import React from 'react';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default function NewsCard() {
    return (
        <>
            <MDBCard>
                <MDBCardBody>This is some text within a card body.</MDBCardBody>
            </MDBCard>
            <MDBCard>
                <MDBCardBody>This is some text within a card body.</MDBCardBody>
            </MDBCard>
        </>
    );
}