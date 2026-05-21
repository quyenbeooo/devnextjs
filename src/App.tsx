import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import {
    Fragment,
    type ComponentType,
    type ReactNode,

} from 'react';

import { publicRoutes } from './routes';

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';

interface LayoutProps {
    children: ReactNode;
}

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout: ComponentType<LayoutProps> =
                            DefaultLayout;

                        // Có layout custom
                        if (route.layout) {
                            Layout = route.layout;
                        }

                        // Không dùng layout
                        else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;