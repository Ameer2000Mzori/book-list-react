import React from 'react'
import Logo from '../icons/logo.png'

const Home = () => {
  return (
    <section>
      <main>
        <aside>
          <div>
            <p>A BOOK</p>
            <img src="" alt="" />
          </div>
        </aside>
        <aside>
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
          <div>
            <img src="" alt="" />
            <p>A BOOK</p>
            <button type="button">save as favorat</button>
          </div>
        </aside>
      </main>
    </section>
  )
}

export default Home
