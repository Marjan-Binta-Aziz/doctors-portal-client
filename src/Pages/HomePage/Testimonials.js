import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'
import Reviews from './Reviews';

const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name:'Winson Herry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people1,
            location:"USA",
        },
        {
            _id:2,
            name:'Winson Herry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people2,
            location:"USA",
        },
        {
            _id:3,
            name:'Winson Herry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people3,
            location:"USA",
        },
    ]
    return (
        <section className='my-28 p-5'>
           <div className='flex justify-between'>
           <div >
                <h4 className='text-primary text-3xl'>Tesimonial</h4>
                <h3 className='text-4xl'>What Our Patiants Say</h3>
            </div>
            <div>
                <img src={quote} alt="" />
            </div>
           </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9'>
        {
            reviews.map(review => 
            <Reviews
                key = {review._id}
                review = {review}
            ></Reviews>)
        }
            </div>
        </section>
    );
};

export default Testimonials;