import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Wrapper from '../components/Wrapper'
import FacebookSvg from '../components/FacebookSvg'
import GithubSvg from '../components/GithubSvg'
import LinkedinSvg from '../components/LinkedinSvg'


function Home() {
    return (
        <div className="page-box">
            <Wrapper />
            <div className="content-homepage">
                <div className="there">Hi there!</div>
                <div className='image-box'>
                    {/* <img src="./assets/me-nbg.png" alt="" /> */}
                    <div className="img"></div>
                    <div className="icons-media">
                        <div>
                            <a href="https://www.facebook.com/cipssul">
                                <FacebookSvg/>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/Ciprian-hub">
                               <GithubSvg/>
                            </a>
                        </div>
                        <div>
                            <a href=""></a>
                            <LinkedinSvg/>
                        </div>
                    </div>
                </div>
                <div className="titlebtn">
                    <div className='title'>
                        <h1 className="hello">I`m <span className="name-color">Ciprian Valea,</span>  </h1>
                        <span className="subTitle">frontend-dev /
                        <a href="assets/me-nbg.png" download>
                            download resume
                        </a>
                        </span>
                    </div>
                    <div className='button'>
                        <Link to='/work'>
                            <button className="btn">See my work</button>
                        </Link>
                    </div>
                    <div className="arrow">
                        <svg width="139" height="134" viewBox="0 0 139 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M138.686 103.744L133.469 101.27L133.935 107.024L138.686 103.744ZM28.4176 0.847207C26.7306 26.7997 31.1412 46.3645 39.0758 61.0883C47.0112 75.8136 58.4524 85.6615 70.767 92.2096C95.3749 105.295 123.491 105.216 134.229 104.606L134.172 103.607C123.487 104.214 95.5971 104.28 71.2365 91.3267C59.0669 84.8556 47.7833 75.1385 39.9561 60.6139C32.128 46.0879 27.738 26.7181 29.4155 0.91207L28.4176 0.847207Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
