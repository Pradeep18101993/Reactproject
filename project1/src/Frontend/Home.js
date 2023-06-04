import React from 'react'
import Topbar from './Layout/Topbar'
import Sidebar from './Layout/Sidebar'
import Mainpage from './Layout/Mainpage'

const Home = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <Mainpage />
      {/* <Footer /> */}
    </div>
  )
}

export default Home