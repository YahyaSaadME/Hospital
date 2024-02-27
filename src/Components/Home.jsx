import React, { useState } from 'react'
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [inNav, setinNav] = useState(0)
  return (
    <>
      <div className='bg-main'>
        <div style={{ position: "absolute", top: 0, zIndex: 1, left: 0, width: "100%", height: "80vh" }}>
          <div className='flex justify-center' style={{ width: "100%", marginTop: 50 }}>
            <div className='absolte' style={{ width: "80vw", paddingTop: "15vh" }}>
              <h2 className='text-4xl font-bold text-white text-center'>Your Home for Heath</h2>
              <p className='font-medium text-center text-white mb-10'>Find and book from any where.</p>
              <div className='flex justify-center items-center border-2 rounded-md bg-white mb-10'>
                <div className='flex justify-center items-center'>
                  <button className="p-2.5 mx-2 text-sm font-medium h-full text-white bg-gray-700 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-fill" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411" />
                    </svg>
                  </button>
                  <p className='font-semibold cursor-pointer'>
                    Potheri
                  </p>
                </div>
                <p className='font-semibold pl-5 ' style={{ marginTop: -4 }}>
                  |
                </p>
                <input style={{ width: "100%", border: "none", outline: "none" }} type="text" className='text-sm p-4 outline-none' placeholder='Search Doctors, Medicals, Surgens, etc,..' />
                <button className="p-2.5 mx-2 text-sm font-medium h-full text-white bg-gray-700 rounded-md">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", top: "50vh", zIndex: 1, width: "100%" }}>
        <div className=''>
          <ul className='flex justify-center' style={{ marginTop: 60 }}>
            <li className='m-2 cursor-pointer rounded-md border p-2 px-5' style={inNav == 0 ? { backgroundColor: "black", color: "white" } : null} onClick={e => setinNav(0)}>Hospital</li>
            <li className='m-2 cursor-pointer rounded-md border p-2 px-5' style={inNav == 1 ? { backgroundColor: "black", color: "white" } : null} onClick={e => setinNav(1)}>Pharmacy</li>
            <li className='m-2 cursor-pointer rounded-md border p-2 px-5' style={inNav == 2 ? { backgroundColor: "black", color: "white" } : null} onClick={e => setinNav(2)}>Test Labs</li>
          </ul>
        </div>
        <h1 className='font-bold text-2xl text-center'>{inNav == 0 ? "Hospitas" : inNav == 1 ? "Pharmacy" : "Labs"} Near You</h1>
        <div className='flex items-center justify-center'>
          <div>
            {
              inNav == 0 ?
                <div className='grid cards'>
                  <Link to="/location?hospitals">
                    <Card
                      className="max-w-sm m-2"
                      imgAlt="Meaningful alt text for an image that is not purely decorative"
                      imgSrc="https://plus.unsplash.com/premium_photo-1681995326134-cdc947934015?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    >
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Hospital technology acquisitions 2021
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                      </p>
                    </Card>
                  </Link>
                  <Link to="/location?hospitals">
                    <Card
                      className="max-w-sm m-2"
                      imgAlt="Meaningful alt text for an image that is not purely decorative"
                      imgSrc="https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    >

                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                      </p>
                    </Card>
                  </Link>
                  <Link to="/location?hospitals">
                    <Card
                      className="max-w-sm m-2"
                      imgAlt="Meaningful alt text for an image that is not purely decorative"
                      imgSrc="https://plus.unsplash.com/premium_photo-1675686363504-ba2df7786f16?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    >
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                      </p>
                    </Card>
                  </Link>
                </div> :
                inNav == 1 ? <div className='grid cards'>
                  <Card
                    className="max-w-sm m-2"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  >
                    <Link to="/location?pharmacy">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Medical technology acquisitions 2021
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                      </p></Link>
                  </Card>
                  <Card
                    className="max-w-sm m-2"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://images.unsplash.com/photo-1583607264434-2d8e199b3a17?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  >
                    <Link to="/location?pharmacy">

                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                      </p></Link>
                  </Card>
                  <Card
                    className="max-w-sm m-2"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  >
                    <Link to="/location?pharmacy">

                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                      </p></Link>
                  </Card>
                </div> : <div className='grid cards'>
                  <Link to="/location?labs">
                    <Card
                      className="max-w-sm m-2"
                      imgAlt="Meaningful alt text for an image that is not purely decorative"
                      imgSrc="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    >
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Labs technology acquisitions 2021
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                      </p>
                    </Card>
                  </Link>
                  <Link to="/location?pharmacy">
                    <Card
                      className="max-w-sm m-2"
                      imgAlt="Meaningful alt text for an image that is not purely decorative"
                      imgSrc="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    >
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                      </p>
                    </Card>
                  </Link>
                  <Link to="/location?pharmacy">
                    <Card
                      className="max-w-sm m-2"
                      imgAlt="Meaningful alt text for an image that is not purely decorative"
                      imgSrc="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    >
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                      </p>
                    </Card>
                  </Link>
                </div>
            }
          </div>
        </div>
      </div>
    </>

  )
}
