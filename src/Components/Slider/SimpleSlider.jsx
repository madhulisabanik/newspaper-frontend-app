import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function SimpleSlider() {
  return (
    <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='../images/banner-1.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='../images/banner-2.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='../images/banner-3.jpg'
        alt='...'
      />
    </MDBCarousel>
  );
}
