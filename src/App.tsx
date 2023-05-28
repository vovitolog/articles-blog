import React, {MouseEventHandler, Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.asyc";
import {UseTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = UseTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/'}>Главная </Link>
            <Link to={'/about'}>О сайте </Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>

    );
};

export default App;