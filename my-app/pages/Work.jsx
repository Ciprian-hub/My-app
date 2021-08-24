import React from 'react'
import Wrapper from '../components/Wrapper'
import { Link } from 'react-router-dom'
import './Work.css'


function Work() {
    return (
        <div className="page-box">
            <Wrapper />
            <div className="content-work">
                <section className='java-projects'>
                    <h2>Javscrip</h2>
                    <div className="java-links">
                        <a href={'https://github.com/Ciprian-hub/My-Projects/tree/dad-jokes/DadJokes'}>
                            <div className="dad-jokes">Dad</div>
                            Dad Jokes
                        </a>
                        <div></div>
                        <div></div>
                    </div>
                </section>
                <section className='vue-projects'>
                    <h2>Vue</h2>
                    <div className="vue-links">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </section>
                <section className='react-projects'>
                    <h2>React</h2>
                    <div className="react-links">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Work
