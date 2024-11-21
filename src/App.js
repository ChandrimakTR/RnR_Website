import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header/header.js';
import MainPage from './Components/MainPage/mainpage.js';
import SubmissionPage from './Components/SubmissionPage/submissionPage.js';

function App() {
  const [showMainPage, setShowMainPage] = useState(true);
  const [showSubmissionPage, setShowSubmissionPage] = useState(false);

  return (
    <div className="App">
      <Header setShowMainPage={setShowMainPage} setShowSubmissionPage={setShowSubmissionPage}/>
      {showMainPage && <MainPage />}
      {showSubmissionPage && <SubmissionPage />}
    </div>
  );
}

export default App;