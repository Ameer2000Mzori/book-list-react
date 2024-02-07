import React from 'react'
import Logo from '../icons/logo.png'

const Home = () => {
  return (
    <section className="flex flex-col h-[100vh] w-[100vw] text-center justify-center items-center bg-slate-600">
      <main className="flex flex-row h-[80%] w-[80%] text-center justify-center items-center bg-slate-300 rounded-md">
        <div>
          <img className="w-[4rem] h-[4rem]" src={Logo} alt="" />
          <input
            type="text"
            placeholder="please enter what you want to search"
          />
          <div>
            <button type="button">search</button>
            <button type="button">favoraties</button>
          </div>
        </div>

        <aside>
          <div>
            <p>A BOOK</p>
            <img src="" alt="" />
          </div>
        </aside>
        <aside>
          <img src="" alt="" />
          <p>A BOOK</p>
          <button type="button">save as favorat</button>
        </aside>
      </main>
    </section>
  )
}

export default Home
