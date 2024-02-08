import React from 'react'
import Logo from '../icons/logo.png'

const Home = () => {
  return (
    <section className="flex flex-col h-[100vh] w-[100vw] text-center justify-center items-center bg-slate-600">
      <main className="flex flex-col h-[80%] w-[80%] text-center justify-center items-center bg-slate-300 rounded-md">
        <div className="flex flex-row justify-evenly text-center items-center h-[10%] w-[100%] gap-4">
          <img className="w-[4rem] h-[4rem]" src={Logo} alt="" />
          <div className="gap-4 flex flex-row text-center items-center justify-center">
            <input
              type="text"
              placeholder="please enter what you want to search"
              className="w-[250px] h-[30px] border-2 border-slate-400 rounded-md text-[0.9rem]"
            />
            <button
              type="button"
              className="w-[150px] h-[30px] rounded-sm bg-white active:bg-slate-500 hover:bg-slate-400 hover:text-white"
            >
              search
            </button>
            <button
              type="button"
              className="w-[150px] h-[30px] rounded-sm bg-white active:bg-slate-500 hover:bg-slate-400 hover:text-white"
            >
              favoraties
            </button>
          </div>
        </div>
        <div className="h-[90%] w-[100%] flex flex-row ">
          <aside className="w-[30%] h-[100%] border-t-[1px] border-gray-400 flex flex-col text-ccenter items-center justify-start pt-4">
            <div className="h-[60px] w-[95%] flex flex-row text-center justify-between items-center pl-2 pr-2 bg-slate-900 rounded-md hover:bg-slate-700 text-white">
              <img
                className="w-[3rem] h-[3rem] rounded-full bg-white border-1 "
                src={Logo}
                alt=""
              />
              <p>A BOOK</p>
            </div>
          </aside>
          <aside className="w-[70%] h-[100%] border-l-[1px] border-t-[1px] border-gray-400">
            <img src="" alt="" />
            <div>
              <p>A BOOK</p>
              <button type="button">save as favorat</button>
            </div>
          </aside>
        </div>
      </main>
    </section>
  )
}

export default Home
