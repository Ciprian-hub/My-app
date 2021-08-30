import React from 'react'
import Wrapper from '../components/Wrapper'
import './About.css'
import SmallStepBar from '../components/SmallStepBar'
import BigStepBar from '../components/BigStepBar'
import EducationSvg from '../components/EducationSvg'
import SkillsSvg from '../components/SkillsSvg'


function About() {
    return (
        <div className="page-box">
            <Wrapper />
            <div className="content-about">
                <div className="top-page">
                    {/* <h1>About me</h1> */}
                    <p>Passionate about technology and self improvement. I am willing to learn new things constantly and develop my personal and professional skills.</p>
                </div>
                <div className="education-skills">
                    <section className="education">
                        <h2>
                            <span>
                                <EducationSvg />
                            </span>
                            Education
                        </h2>
                        <ul className="ul-education">
                            <div className="step-bar">
                                <SmallStepBar />
                                <BigStepBar />
                            </div>
                            <div className="li-education">
                                <li><h3> INFOEL TECHNICAL HIGH SCHOOL</h3> <br />
                                    Year: (2009-2013) <br />
                                    Study program: Computer Science</li>
                                <li><h3> UNIVERSITY OF TELEVISON AND THEATRE</h3> <br />
                                    Year: (2013 - 2016) <br />
                                    The art of Performance,
                                    Study program: Acting</li>
                                <li><h3>INFORMAL SCHOOL OF IT</h3> <br />
                                    Year: (2021-In progress) <br />
                                    Study program: Web Development
                                    HTML5, CSS, CSS3, Javascript, jQuery, ReactJS.</li>
                            </div>
                        </ul>
                    </section>
                    <section className="skills">
                        <h2>
                            <span>
                                <SkillsSvg />
                            </span>
                            Skills
                        </h2>
                        <div className="skills-pagination" >
                            <ul className="ul-skills">
                                <li> HTML5</li>
                                <li>Css</li>
                                <li>Javascript</li>
                                <li>Vue Js</li>
                                <li>React Js </li>
                                <li>Figma</li>
                            </ul>
                            <ul className='ul-level'>
                                <li>
                                    <svg width="398" height="11" viewBox="0 0 398 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.25" y="0.25" width="397.5" height="9.57895" rx="4.78947" stroke="white" stroke-opacity="0.91" stroke-width="0.5" />
                                        <path d="M5 5H347.868" stroke="#FF9900" stroke-opacity="0.87" stroke-width="8" stroke-linecap="round" />
                                    </svg>
                                    <span>92%</span>
                                </li>
                                <li>
                                    <svg width="398" height="11" viewBox="0 0 398 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.25" y="0.25" width="397.5" height="9.57895" rx="4.78947" stroke="white" stroke-opacity="0.91" stroke-width="0.5" />
                                        <path d="M5 5H339" stroke="#FF9900" stroke-opacity="0.87" stroke-width="8" stroke-linecap="round" />
                                    </svg>
                                    <span>87%</span>
                                </li>
                                <li>
                                    <svg width="398" height="11" viewBox="0 0 398 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.25" y="0.25" width="397.5" height="9.57895" rx="4.78947" stroke="white" stroke-opacity="0.91" stroke-width="0.5" />
                                        <path d="M5 5H263.7" stroke="#FF9900" stroke-opacity="0.87" stroke-width="8" stroke-linecap="round" />
                                    </svg>
                                    <span>65%</span>
                                </li>
                                <li>
                                    <svg width="398" height="11" viewBox="0 0 398 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.25" y="0.25" width="397.5" height="9.57895" rx="4.78947" stroke="white" stroke-opacity="0.91" stroke-width="0.5" />
                                        <path d="M5 5H176.14" stroke="#FF9900" stroke-opacity="0.87" stroke-width="8" stroke-linecap="round" />
                                    </svg>
                                    <span>40%</span>
                                </li>
                                <li>
                                    <svg width="398" height="11" viewBox="0 0 398 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.25" y="0.25" width="397.5" height="9.57895" rx="4.78947" stroke="white" stroke-opacity="0.91" stroke-width="0.5" />
                                        <path d="M5 5H211.96" stroke="#FF9900" stroke-opacity="0.87" stroke-width="8" stroke-linecap="round" />
                                    </svg>
                                    <span>52%</span>
                                </li>
                                <li>
                                    <svg width="398" height="11" viewBox="0 0 398 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.25" y="0.25" width="397.5" height="9.57895" rx="4.78947" stroke="white" stroke-opacity="0.91" stroke-width="0.5" />
                                        <path d="M5 5H343.3" stroke="#FF9900" stroke-opacity="0.87" stroke-width="8" stroke-linecap="round" />
                                    </svg>
                                    <span>85%</span>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    )
}

export default About
