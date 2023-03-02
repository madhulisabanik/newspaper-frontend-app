import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function MapWidget() {
  return (
    <MDBRow className='w-100'>
      <MDBCol lg='6' className='my-4'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.293665055433!2d88.42522822733308!3d22.576357312891783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1677758891132!5m2!1sen!2sin'
          className='w-100'
          height='400'
          loading='lazy'
        ></iframe>
      </MDBCol>
      <MDBCol lg='6' className='my-4 d-flex align-items-center'>
        <div>
          <h6>Sector V, Bidhannagar, Kolkata</h6>
          <p>West Bengal</p>
          <p>Mobile: + 01 234 567 89</p>
          <p>Open Hours: Mon - Fri, 8:00-22:00</p>
          <p>Email: info@gmail.com / sale@gmail.com</p>
        </div>
      </MDBCol>
    </MDBRow>
  );
}