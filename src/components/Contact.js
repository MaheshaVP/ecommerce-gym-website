import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <div className='contact'>
        <div className='container'>
            <div className='form'>
                <h2>Contact Us</h2>
                <form method='POST'>
                    <div className='box'>
                        <div className='label'>
                            <h4>Name</h4>
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Name' value='' name='' ></input>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='label'>
                            <h4>E-mail</h4>
                        </div>
                        <div className='input'>
                            <input type='email' placeholder='E-mail' value='' name='' ></input>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='label'>
                            <h4>Subject</h4>
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Subject' value='' name='' ></input>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='label'>
                            <h4>Message</h4>
                        </div>
                        <div className='input'>
                            <textarea placeholder='Message' value='' name=''></textarea>
                        </div>
                    </div>
                    <button type='submit'>Send</button>

                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact