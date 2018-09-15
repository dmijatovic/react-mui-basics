import React from 'react';

import { Switch, Route } from 'react-router-dom';

//pages

import Home from './page/Home';
import Children from './page/children';
import Hoc from './page/hoc';
import Panel from './page/panel';
import Lifecycle from './page/lifecycle';
import ContextPage from './page/context';
//material UI section
import MuiHome from './page/mui';

//system pages
import { page404 } from './page/error';

/**
 * Route definitions including component object
 */
const routeDef = [
    { path:'/', label:'Home', component: Home, 
        props:{exact:true}
    },
    { path:'/children', label:'Passing children', component: Children, 
        props:{exact:true}
    },
    { path:'/hoc', label:'Higher Order Component (HOC)', component: Hoc, 
        props:{exact:true}
    },
    { path:'/panel', label:'Composition', component: Panel, 
        props:{exact:true}
    },
    { path:'/lifecycle', label:'Component lifecycle (class based)', component: Lifecycle, 
        props:{exact:true}
    },
    { path:'/mui', label:'Material UI', component: MuiHome, 
        props:{exact:false}
    },
    { path:'/context', label:'Context API', component: ContextPage, 
        props:{exact:false}
    },
    { path:null, label:'404', component: page404, 
        props:{}
    },
]


/**
 * Construct Routes based on informaton   
 */
const writeRoutes = (routeDef) => {
    return routeDef.map((route)=>{
        return (
            
            <Route
                key={route.path}
                path={route.path}  
                component={ route.component }
                {...route.props}/>
            
        )
    })
}

/**
 * Exported routes object in react-router-dom format
 * Note! Switch is used to show only ONE route at the time
 */
const Routes = () =>{
    return(
        <Switch>
            { writeRoutes(routeDef) }
        </Switch>
    )
}

export default Routes;