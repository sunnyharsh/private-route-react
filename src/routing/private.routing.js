import React, {Fragment} from 'react'
import { Route, Redirect } from "react-router-dom";
import  auth  from "../auth/index"
const PrivateRoute =({Component: Component,component, ...rest})=> {
    let isAuth=auth.isAuthenticated()
    return (
      <Fragment>
        <Route {...rest} render={(props)=>{
          if(isAuth){
            return <Component {...props}/>
          }
          else{
            return <Redirect to={{
              pathname:"/",
              state:{
                from:props.location
              }
            }}
            />
          }
        }}/>
      </Fragment>
    )
}
// isAuthenticated
export default PrivateRoute