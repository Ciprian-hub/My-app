import React from 'react'
import Wrapper from '../components/Wrapper'
import './About.css'


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
                        <h2> <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0002 7.78L15.6872 7.875L3.18721 12.063L0.345215 13L2.00021 13.53V22.28C1.40321 22.627 1.00021 23.26 1.00021 24C1.00021 24.5304 1.21093 25.0391 1.586 25.4142C1.96107 25.7893 2.46978 26 3.00021 26C3.53065 26 4.03936 25.7893 4.41443 25.4142C4.7895 25.0391 5.00022 24.5304 5.00022 24C5.00022 23.26 4.59721 22.627 4.00021 22.28V14.22L6.00022 14.875V20C6.00022 20.82 6.50021 21.5 7.09421 21.97C7.68821 22.437 8.42621 22.767 9.31221 23.063C11.0862 23.653 13.4242 24 16.0002 24C18.5762 24 20.9142 23.654 22.6882 23.062C23.5742 22.767 24.3122 22.437 24.9062 21.969C25.5002 21.5 26.0002 20.82 26.0002 20V14.875L28.8132 13.937L31.6552 13L28.8122 12.062L16.3122 7.875L16.0002 7.78ZM16.0002 9.875L25.3752 13L16.0002 16.125L6.62522 13L16.0002 9.875ZM8.00022 15.563L15.6882 18.125L16.0002 18.219L16.3132 18.124L24.0002 15.562V20C24.0002 20.01 24.0042 20.126 23.6872 20.375C23.3712 20.625 22.8042 20.94 22.0622 21.188C20.5802 21.681 18.3952 22 16.0002 22C13.6052 22 11.4202 21.682 9.93721 21.187C9.19721 20.94 8.62921 20.624 8.31321 20.375C7.99521 20.125 8.00022 20.01 8.00022 20V15.562V15.563Z" fill="white" />
                        </svg>
                        </span> Education</h2>
                        <ul className="ul-education">
                            <div className="step-bar">
                                <svg id='smallSteper' width="11" height="191" viewBox="0 0 11 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 11L5.49999 67" stroke="white" />
                                    <path d="M5.5 145L5.5 191" stroke="white" />
                                    <circle cx="5.5" cy="5.5" r="5.5" fill="#FF9900" fill-opacity="0.87" />
                                    <path d="M11 72.5C11 75.5376 8.53757 78 5.5 78C2.46243 78 0 75.5376 0 72.5C0 69.4624 2.46243 67 5.5 67C8.53757 67 11 69.4624 11 72.5Z" fill="#FF9900" fill-opacity="0.87" />
                                    <circle cx="5.5" cy="139.5" r="5" stroke="#FF9900" stroke-opacity="0.87" />
                                    <path d="M5.49935 78L5.49895 134" stroke="white" />
                                </svg>
                                <svg id='bigSteper' width="18" height="313" viewBox="0 0 18 313" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 17.9999L8.99998 109.636" stroke="white" />
                                    <path d="M9 237.273L9 312.545" stroke="white" />
                                    <circle cx="9" cy="9" r="9" fill="#FF9900" fill-opacity="0.87" />
                                    <path d="M18 118.636C18 123.607 13.9706 127.636 9 127.636C4.02944 127.636 0 123.607 0 118.636C0 113.666 4.02944 109.636 9 109.636C13.9706 109.636 18 113.666 18 118.636Z" fill="#FF9900" fill-opacity="0.87" />
                                    <circle cx="9" cy="228.273" r="8.5" stroke="#FF9900" stroke-opacity="0.87" />
                                    <path d="M8.9992 127.636L8.99855 219.273" stroke="white" />
                                </svg>

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
                        <h2> <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.541 6.19621L29.8112 5.80578L25.1364 10.2534L22.4885 7.67308L27.048 3.09607L26.6488 1.4155C25.6853 1.10708 24.6776 0.943861 23.6616 0.931699C22.5534 0.915393 21.4535 1.11764 20.4305 1.52584C19.4427 1.95364 18.5499 2.55871 17.8003 3.30826C16.9659 4.06455 16.3051 4.97867 15.8599 5.99251C15.0026 8.01022 15.0026 10.2685 15.8599 12.2862C11.2365 16.6382 6.67293 21.048 2.17018 25.5143C1.70447 26.0978 1.4827 26.8256 1.54036 27.5577C1.5858 28.3451 1.95588 29.083 2.56936 29.6096C2.84435 29.8961 3.17257 30.1337 3.53848 30.3056C3.91549 30.4648 4.32132 30.556 4.73159 30.5751C5.43237 30.5624 6.10433 30.3077 6.62548 29.86C10.0584 26.7684 16.6361 20.4174 20.3728 16.6955C21.3863 17.1072 22.4752 17.3194 23.5751 17.3173C24.6824 17.3164 25.7782 17.1033 26.7979 16.6903C27.8176 16.2774 28.7404 15.6731 29.5119 14.9131C31.0965 13.3668 31.9815 11.2859 31.9757 9.12024C32.0013 8.12924 31.8544 7.14107 31.541 6.19621V6.19621ZM5.28379 28.3556C5.19843 28.4281 5.09554 28.4791 4.98441 28.5041C4.87507 28.5222 4.7633 28.5222 4.65397 28.5041C4.53934 28.4874 4.43016 28.446 4.33463 28.3831C4.23212 28.3257 4.14544 28.2457 4.08181 28.1497C3.77134 27.8463 3.48082 27.2691 3.77134 26.9445C6.80955 23.8528 13.0656 17.8096 16.9776 14.1153C17.1993 14.3954 17.4433 14.6627 17.705 14.9131C17.9667 15.1741 18.2483 15.416 18.5477 15.6367C14.7643 19.3501 8.59477 25.3212 5.28601 28.3556H5.28379ZM29.9399 9.12024C29.9443 10.7435 29.2834 12.3031 28.0948 13.466C26.9086 14.5793 25.3133 15.203 23.6517 15.203C21.99 15.203 20.3947 14.5793 19.2086 13.466C18.3392 12.5979 17.7453 11.5114 17.496 10.333C17.2467 9.15462 17.3522 7.93271 17.8003 6.80945C18.0986 6.04499 18.5612 5.34894 19.1583 4.76631C19.7554 4.18367 20.4736 3.72744 21.2666 3.42709C22.0194 3.12558 22.8277 2.97119 23.6439 2.973H24.2072L20.1777 6.94738V8.42424L24.3802 12.4262H25.8438L29.9399 8.57278V9.12024V9.12024ZM5.96462 12.9928H9.35987L10.9233 14.5142L12.4269 13.084L10.9522 11.6453V11.5541L11.0786 8.05503L10.5907 7.12774L4.24814 3.13427L2.93749 3.27431L1.09461 5.07583L0.948242 6.34687L5.02432 12.5387L5.96462 12.9949V12.9928ZM3.86892 5.28591L9.00061 8.51973L8.91412 10.9027H6.5279L3.21914 5.89066L3.86892 5.28591V5.28591ZM19.6255 20.0546L21.1202 18.6265L28.0083 25.3849C28.5885 25.9683 28.912 26.7428 28.912 27.5482C28.912 28.3535 28.5885 29.128 28.0083 29.7115C27.572 30.14 27.011 30.433 26.3983 30.5522C25.7856 30.6714 25.1496 30.6114 24.5731 30.3799C24.2052 30.2237 23.8751 29.9961 23.604 29.7115L16.6361 22.9149L18.1419 21.4763L25.0876 28.2537C25.181 28.3523 25.2972 28.4286 25.4269 28.4765C25.6822 28.5757 25.9678 28.5757 26.223 28.4765C26.3527 28.4285 26.4689 28.3522 26.5624 28.2537C26.6594 28.1617 26.735 28.051 26.7841 27.9291C26.835 27.8045 26.862 27.6723 26.864 27.5386C26.8617 27.4052 26.8355 27.2731 26.7863 27.1482C26.7372 27.0262 26.6616 26.9155 26.5646 26.8235L19.6255 20.0546Z" fill="white" />
                        </svg>
                        </span> Skills</h2>
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
