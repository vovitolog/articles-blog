import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import AppRouter from './providers/router/ui/AppRouter';

const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button type="button" onClick={() => setIsOpen(true)}>
                    Open popup
                </button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet, deleniti dignissimos eaque eius est, eum magnam molestias nobis, quam quisquam repellat sint sunt! Eligendi error ipsa possimus similique? Expedita.
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
