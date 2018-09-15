import React from 'react';

import { Switch, Route } from 'react-router-dom';

//pages
import MuiHome from './home';
import MuiThemePage from './theme';

/**
 * NESTED MUI route definitions including component object
 * NOTE! home route of nested MUI route needs to have exact false
 * PARENT Switch also needs to have MUI home defined
 */
export const routeDef = [
    { path:'/mui', label:'Home', component: MuiHome, 
        props:{ exact:true }
    },
    { path:'/mui/theme', label:'MUI themes', component: MuiThemePage, 
        props:{ exact:true }
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