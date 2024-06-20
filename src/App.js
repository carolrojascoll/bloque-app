//CAROLINA ROJAS COLLANTE
import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

function App() {
    return (
        <div className="app">
            <div className="container">
                <Header />
                <div className="content">
                    <Navigation />
                    <Main>
                        <SubContents />
                        <SubContents />
                        <SubContents />
                        <Advertisement />
                    </Main>
                </div>
            </div>
        </div>
    );
}

export default App;