import React, { useState } from 'react'

const BookingForm = (props) => {
    const[date,setDate]=useState('');
    const[times,setTimes]=useState('');
    const[guests,setGuests]=useState('');
    const[occasion,setOccasion]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.submitForm(e);
    }
    const handleChange=(e)=>{
      setDate(e);
      props.dispatch(e);
    }
  return (
    <header>
        <section>~
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose Date</label>
                        <input type='date' id='book-date' value={date} onChange={(e)=>handleChange(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor='book-time'>Choose Time</label>
                        <select id='book-time' value={times} onChange={(e)=>{setTimes(e.target.value)}}>
                               <option value="">Select a time</option>
                               {
                                props.availableTimes.availableTimes.map((availableTimes)=>(
                                    <option key={availableTimes}>{props.availableTimes}</option>
                                ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor='book-guest'>Number of Guests:</label>
                        <input id='book-guest' value={guests} min='1' onChange={(e)=>setGuests(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor='occasion'>occasion</label>
                        <select id='occasion' key={occasion} value={occasion}onChange={(e)=>setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <div className='btn'>
                        <input type='submit' value={'Make Your Reservation'} aria-label='onClick'/>
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
  )
}

export default BookingForm;