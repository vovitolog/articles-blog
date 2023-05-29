import {Link} from 'react-router-dom';
import './styles/index.scss'
import {UseTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import AppRouter from "./providers/router/ui/AppRouter";

const App = () => {
    const {theme, toggleTheme} = UseTheme();

    return (
        <div className={classNames('app',{}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/'}>Главная </Link>
            <Link to={'/about'}>О сайте </Link>
            <AppRouter/>
        </div>

    );
};

export default App;