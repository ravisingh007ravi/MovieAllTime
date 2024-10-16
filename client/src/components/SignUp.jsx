import React from 'react'
import { Google, Facebook, Github } from 'lucide-react';

export default function SignUp() {
  return (
    <div>
      <div className="flex min-h-screen bg-black text-white">
      <div className="m-auto p-8 w-full max-w-md">
        <h1 className="text-5xl font-bold mb-4">Roll the Carpet.!</h1>
        <button className="border border-white px-4 py-2 mb-8">Skip the lag ?</button>
        
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-1">Signup</h2>
          <p className="text-gray-400 mb-4">Just some details to get you in.!</p>
          
          <form className="space-y-4">
            <input type="text" placeholder="Username" className="w-full p-3 bg-black rounded" />
            <input type="text" placeholder="Email / Phone" className="w-full p-3 bg-black rounded" />
            <input type="password" placeholder="Password" className="w-full p-3 bg-black rounded" />
            <input type="password" placeholder="Confirm Password" className="w-full p-3 bg-black rounded" />
            <button className="w-full p-3 bg-blue-600 rounded font-semibold">Signup</button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400 mb-4">Or</p>
            <div className="flex justify-center space-x-4">
              {/* <Google className="text-red-500" />
              <Facebook className="text-blue-500" />
              <Github className="text-white" /> */}
            </div>
          </div>
          
          <p className="mt-6 text-center text-gray-400">
            Already Registered? <a href="#/" className="text-blue-400">Login</a>
          </p>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <a href="#/" className="mr-4">Terms & Conditions</a>
            <a href="#/" className="mr-4">Support</a>
            <a href="#/">Customer Care</a>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
