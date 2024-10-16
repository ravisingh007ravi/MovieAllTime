import React from 'react'

export default function Dropdown() {
  return (
    <div>
      <div className="flex w-full items-center justify-center bg-white py-20 drop-shadow-none">
    <div className="group relative cursor-pointer py-2">

        <div className="flex items-center justify-between space-x-5 bg-white px-4">
            <a href='#/' className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4" >
                Choose Day
            </a>
            <i className="fa-solid fa-angle-down"/>
        </div>

        <div
            className="invisible absolute z-50 flex w-full flex-col bg-white py-1 px-4 text-gray-800  group-hover:visible">

            <a href='#/' className="my-2 block border-b border-white py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Top Rating
            </a>

            <a href='#/' className="my-2 block border-b border-white py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Monday
            </a>

            <a href='#/' className="my-2 block border-b border-white py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Tuesday
            </a>
        </div>

    </div>
</div>
    </div>
  )
}
