import React from 'react';
import { MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';

export default function ContactUs() {
  return (
    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }} onSubmit={e => e.preventDefault()}>
      <h2>Contact us</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      <MDBBtn color='primary' block className='my-4' onClick={() => alert("Thank you for contacting us!")}>Submit</MDBBtn>
    </form>
  );
}