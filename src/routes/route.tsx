

import type { ComponentType, ReactNode } from 'react';
import config from '../configs';

import Home from '../pages/Home/Home';
import Notes from '../pages/Notes/Notes';
import Settings from '../pages/Settings/Settings';

interface LayoutProps {
    children: ReactNode;
}

export interface AppRoute {
    path: string;

    component: ComponentType;

    layout?: ComponentType<LayoutProps> | null;
}

const publicRoutes: AppRoute[] = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.notes,
        component: Notes,
    },
    {
        path: config.routes.settings,
        component: Settings,
    },
];

const privateRoutes: AppRoute[] = [];

export {
    publicRoutes,
    privateRoutes,
};