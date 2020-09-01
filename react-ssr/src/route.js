import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import App from './App';
import React from 'react';

export default [
    {
        path: '/',
        component:App,
        routes:[
            {
                path:'/',
                component:Home,
                exact:true,
            },
            {
                path:'/login',
                component:Login
            },
            {
                path:'/detail',
                component:Detail
            }
        ]
    }
]
