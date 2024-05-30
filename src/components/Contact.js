import React , {Component} from 'react'

const Contact = () =>{

    const handleSubmit=(e)=>{
        e.preventDefault();
        const name = e.target.username.value;
        const mail = e.target.email.value;
        const number = e.target.phone.value;
        const msg = e.target.message.value;
        console.log("name : " +name, "\n",
                    "email : " +mail, "\n",
                    "phone : " +number, "\n",
                    "message: " +msg 
        );
    }
    return (
        
            <div className='contact'>
                <div className='form-text'>
                    <h1>Contact Us</h1> <br/>
                    <p>We're here to help! Send us a message and we'll do our best to get back to you within 24 hours.</p>
                </div>
                <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <p>Name</p>
                    <input type='text' 
                    placeholder='Your name'
                    name='username' required/><br/><br/>
                    <p>Email</p>
                    <input type='email' placeholder='Your email'
                    name='email' required/><br/><br/>
                    <p>Phone (optional)</p>
                    <input type='number' placeholder='Your phone number'
                    name='phone'/><br/><br/>
                    <p>Message</p>
                    <textarea placeholder='Your message'
                    name='message'/><br/><br/>
                    <button className='button'>Send Message</button>
                </form> 
                </div>        
            </div>
    )
  
}

export default Contact