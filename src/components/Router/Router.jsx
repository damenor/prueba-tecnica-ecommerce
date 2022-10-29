import { Routes, Route, useLocation } from 'react-router-dom'

export const Router = ({ routes }) => {
  const location = useLocation()

  return (
    <Routes key={location.pathname} location={location}>
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  )
}
