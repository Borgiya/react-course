import React, { useReducer } from 'react'
import {Routes,Route, useNavigate} from 'react-router-dom'
import Header from './Header'
import ConfirmBooking from './ConfirmBooking'
import Booking from './Booking'

const Main = () =>{
    const seedRandom=function(seed){
        var m =2**35 -31;
        var a =185852;
        var s =seed % m;
        return function(){
            return(s= (s * a) % m)/m;
        };
    };
    const submitAPI=function(formData){
        return true;
    }
    const fetchAPI=function(date){
        let result = [];
        let random =seedRandom(date.getDate());
         for(let i=17; i<=23; i++){
            if(random()<0.5){
                result.push(i + ":00")
            }
            if(random()>0.5){
                result.push(i + ":30")
            }
         }
         return result;
        };
        const initialState={available:fetchAPI(new Date())};
        const[state,dispatch]=useReducer(updateTimes,initialState);

        function updateTimes(state, date){
            return {available:fetchAPI(new Date())}
        }
        const navigate=useNavigate();
        function submitForm(formData){
            if(submitAPI(formData));
            navigate ("/confirmed");
        }
  return (
    <main>
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/Booking' element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
            <Route path='/ConfirmBooking' element={<ConfirmBooking/>}/>
        </Routes>
    </main>
  )

  }
export default Main