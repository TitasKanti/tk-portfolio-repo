import React from 'react';
import Typewriter from 'typewriter-effect';
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.facebook.com/tkpondit/" target="_blank" rel="noreferrer">
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href="https://github.com/TitasKanti" target="_blank" rel="noreferrer">
                                <i className='fa fa-github'></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCYLyRjr7mCGBA4MK-3yBJJg" target="_blank" rel="noreferrer">
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href="https://twitter.com/AdvocateTitas" target="_blank" rel="noreferrer">
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className='primary-text'>
                            {""}
                            Hello, I'M <span className='highlighted-text'>Titas Kanti Pondit</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className='primary-text'>
                            {""}
                            <h2>
                                {""}
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter.typeString('MERN Stack Developer')
                                            .callFunction(() => {
                                                console.log('String typed out!');
                                            })
                                            .pauseFor(2500)
                                            .deleteAll()
                                            .callFunction(() => {
                                                console.log('All strings were deleted');
                                            })
                                        typewriter.typeString('React Front End Dev')
                                            .callFunction(() => {
                                                console.log('String typed out!');
                                            })
                                            .pauseFor(2500)
                                            .deleteAll()
                                            .callFunction(() => {
                                                console.log('All strings were deleted');
                                            })
                                            .start();
                                    }}
                                />
                            </h2>
                            <span className='profile-role-tagline'>
                                Building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className='button-hire'>
                            Hire Me
                        </button>
                        <a href="Resume.pdf" target="_blank">
                            <button className='button-resume'>
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;