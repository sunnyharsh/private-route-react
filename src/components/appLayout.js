import React, { Fragment } from 'react'
import auth from "../auth/index"
import { withRouter } from 'react-router-dom'
const AppLayout = (props) => {
  
    return (
      <Fragment>
        <h1>public </h1>
        <button onClick={()=>{
            auth.login(()=>{
                props.history.push('/app')
            })
        }}>login</button>
      </Fragment>
    )
  
}
export default  withRouter(AppLayout)