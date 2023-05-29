import './styles/index.scss'
import {UseTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import AppRouter from "./providers/router/ui/AppRouter";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme} = UseTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>

    );
};

export default App;