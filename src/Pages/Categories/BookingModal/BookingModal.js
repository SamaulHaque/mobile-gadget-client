import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({bookPhone, setBookPhone}) => {
    const { title, location, resale_price} = bookPhone;
    const {user} = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking ={
            name,
            email,
            title,
            phone,
            price,
            location
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                setBookPhone(null)
                toast.success('Booking Confirmed'); 
            }
            else{
                toast.error(data.message)
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form  onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" />

                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full" required/>

                        <input name='title' type="text" defaultValue={title} disabled placeholder="Title" className="input input-bordered w-full" required/>

                        <input name='price' type="text" defaultValue={resale_price} disabled placeholder="Price" className="input input-bordered w-full" required/>

                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />

                        <input name='location' type="text" defaultValue={location}  placeholder="Location" className="input input-bordered w-full" />

                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;