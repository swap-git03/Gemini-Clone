/* eslint-disable no-unused-vars */
import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'


const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">
          <div className="greet">
            <p><span>Hello, Developer</span></p>
            <p>How Can I help you today ?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest some beautiful places to see on an upcoming road trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Briefly summarize this concept: Urban planning</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Brainstorm team bonding activities for our work retreat</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Improve the readability of following code</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
              <div className="main-bottom">
                <div className="search-box">
                  <input type="text" placeholder='Enter a prompt here' />
                  <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                  </div>
                </div>
                <p className="bottom-info">
                It's essential to fact-check and verify the accuracy of the information provided by Gemini or any other AI model.
                </p>
              </div>
        </div>
     </div>
  )
}

export default Main