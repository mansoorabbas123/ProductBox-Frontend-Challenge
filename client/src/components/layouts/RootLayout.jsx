import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header'
import classes from './RootLayout.module.css';

const RootLayout = () => {
  return (
    <div className={classes.root_container}>
      <Header />
      <Outlet />
    </div>
  )
}

export default RootLayout