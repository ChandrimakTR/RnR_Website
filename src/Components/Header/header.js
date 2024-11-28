import React from 'react';
import './styles.css';

const Header = ({setShowMainPage, setShowSubmissionPage, showMainPage, showSubmissionPage}) => {

    const onClickHome = () => {
        setShowMainPage(true);
        setShowSubmissionPage(false);
    };

    const onClickSubmission = () => {
        setShowMainPage(false);
        setShowSubmissionPage(true);
    };

  return (
    <>
      <div className="header-top"
      style={{
        backgroundImage: 'url(./header.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <img src="./tr_pri_logo_rgb_color.png" alt="TR Icon" className="tr-icon" />
        <div className="header-title">
          <span className="header-submission">RnR Website</span>
        </div>
        <nav className="header-nav">
          <ul>
            <li><a href="#about">User Name</a></li>
            <img src="./Profileicon.svg" alt="Profile Icon" className="profile-icon" />
          </ul>
        </nav>
      </div>
      <div className="header">
        <div className="header-logo">
          <button className={showMainPage === true ?"selected-button" : "no-button"} onClick={() => onClickHome()}>
            <img src="./home.png" alt="Home Icon" className="icon-home" />
            <span className="header-submission">Home</span>
          </button>
          <button className={showSubmissionPage === true ?"selected-button" : "no-button"} onClick={() => onClickSubmission()}>
            <img src="./file1.png" alt="File Icon" className="icon-file" />
            <span className="header-submission">Submit Nominations</span>
          </button>
          <button className="no-button">
            <img src="./crown.png" alt="Crown Icon" className="icon-crown" />
            <span className="header-submission">Past Leaderboards</span>
          </button>
        </div>
        <nav className="header-nav">
        </nav>
      </div>
    </>
  );
};

export default Header;