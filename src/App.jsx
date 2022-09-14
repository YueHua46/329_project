import * as React from 'react'
import {useRoutes} from 'react-router-dom'
import routesObj from './routes'

export default (props) => {
  const routes = useRoutes(routesObj)
  return <div>{routes}</div>
}
