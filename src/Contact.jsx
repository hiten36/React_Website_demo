import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import i3 from '../src/images/i3.svg';

function Contact() {
    let [s1,s2]=useState({
        name:'',
        email:'',
        phone:'',
        desc:''
    })
    let run=useRef(true);
    useEffect(()=>{
        if(run.current)
        {
            run.current=false;
            return;
        }
        alert(`Name: ${s1.name}\nEmail: ${s1.email}\nPhone: ${s1.phone}\nMessage: ${s1.desc}`);
    })
    function f1(e)
    {
        e.preventDefault();
        s2((val)=>{
            return{
                name:document.getElementById('name').value,
                email:document.getElementById('cemail').value,
                phone:document.getElementById('phone').value,
                desc:document.getElementById('message').value,
            }
        })
    }
    return (
        <>
            <Footer cn='foot2' />
            <div className='con'>
                <div className='con1'>
                    <img src={i3} alt="image" />
                </div>
                <div className="con2">
                    <h2>Contact Us!</h2>
                    <form>
                        <div class="form-group con_form">
                            <label for="name">Your Name</label>
                            <input type="name" class="form-control" id="name" placeholder="Enter your Name" name="name" />
                        </div>
                        <div class="form-group con_form">
                            <label for="email">Your Email</label>
                            <input type="email" class="form-control" id="cemail" placeholder="Enter your Email" name="email" />
                        </div>
                        <div class="form-group con_form">
                            <label for="phone">Your Phone Number (with country code)</label>
                            <input type="text" class="form-control" id="phone" placeholder="Enter your Phone Number"
                                name="phone" />
                        </div>
                        <div class="form-group con_form">
                            <label for="description">Describe what you want to contact me for here</label>
                            <textarea type="text" class="form-control" id="message" placeholder="Your message" name="message"></textarea>
                        </div>
                        <button onClick={f1} class="btn btn-danger mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact;