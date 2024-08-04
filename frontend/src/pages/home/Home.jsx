import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex flex-col sm:flex-row rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 sm:h-[450px] md:h-[550px]'>
			<Sidebar />
      <MessageContainer/>
		
		</div>
  )
}

export default Home
