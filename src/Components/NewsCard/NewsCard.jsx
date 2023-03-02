import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardFooter, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

export default function NewsCard() {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <MDBCard alignment='center'>
                    <MDBCardHeader>Featured</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Special title treatment</MDBCardTitle>
                        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
                </MDBCard>
                <MDBCard alignment='center'>
                    <MDBCardHeader>Featured</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Special title treatment</MDBCardTitle>
                        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
                </MDBCard>
                <MDBCard alignment='center'>
                    <MDBCardHeader>Featured</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Special title treatment</MDBCardTitle>
                        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
                </MDBCard>
            </div>
        </>
    );
}