import React from 'react'
import Header from '../Header/page'
import "@fortawesome/fontawesome-free/css/all.min.css";
 import Footer from '../Footer/page';

const Contact = () => {
  return (
    <div>
      <Header/>
      <div className="flex items-center justify-evenly mt-[200px]">
        <form action=""className="flex flex-col items-start gap-10">
          <div>
            <h2 className="text-[40px] font-semibold text-[#0d47a1] -mt-5">Get in touch</h2>
            <hr className="w-28 h-1 bg-[#0d47a1] rounded-lg"/>
          </div>
          <input type="text" name='name'placeholder='Your Name' className="w-[300px] h-12 pl-6 font-medium rounded-[50px] " required />
          <input type="email"name='email'placeholder='Your Email'className="w-[300px] h-12 pl-6 font-medium rounded-[50px] " required />
          <textarea name="message" placeholder='Your Message'className="h-[140px]  rounded-[20px] w-[300px] pl-6 " required></textarea>
          <button type='submit' className="flex items-center p-3  text-[16px] text-white gap-2 bg-[#00b0ff] rounded-[50px]">Submit</button>
        </form>
      </div>
      <div>
        <p className="flex gap-4 -mt-28 ml-5 text-white">Email:kanwal0155@gmail.com</p>
        <p className="text-2xl ml-5 mt-7 font-semibold text-white">connect with me:</p>
        <div className="text-2xl font-medium ml-6 text-white">
          <div className="w-2 ml-12">
          <i className='fab fa-linkedin'></i>
          <a href="https://www.linkedin.com/in/saniya-kanwal-72582a250/" target='_blank'>LinkedIn</a>
           <i className='fab fa-instagram'></i>
          <a href="https://www.instagram.com/saniya_kanwal_/"target='_blank'>Instagram</a>
          <i className='fab fa-github'></i>
          <a href="https://github.com/Saniyakanwal" target='_blank'>github</a>
        </div>
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default Contact
