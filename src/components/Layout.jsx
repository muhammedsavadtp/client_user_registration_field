import React, { Children } from 'react'

const Layout = () => {
  return (
      <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-lg p-6">
              <div className="md:w-1/2">
                  <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=740&t=st=1684135538~exp=1684136138~hmac=f12ebd7869b30d9bf1b12aae7c819013b8588a516688525ad98586029fcffe18" alt="Login Image" className="h-auto w-full" />
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 ml-3">
                  <h2 className="text-2xl mb-4 font-bold">Login</h2>
                  {/* <p className="mb-4"></p> */}
                
              </div>
          </div>
      </div>
  )
}

export default Layout