import React, { Fragment } from 'react'
import auth from "../auth/index"
import { Route, withRouter, Link } from 'react-router-dom'

const LandingPAge = (props)=> {
    return (
      <Fragment>
        <h1>this is private landing page</h1>
        <button onClick={()=>{
            auth.logout(()=>{
                props.history.push('/')
            })
        }}>logout</button>
        <Route>
         <Link to="/user">user</Link>
        </Route>
      </Fragment>
    )
}
export default  withRouter(LandingPAge)