import React, { useState } from 'react'
import Logo from '../icons/logo.png'
import booksObject from './hooks/booksObject'
import SelectedBook, { favoList } from './SelectedBook'

const Home = () => {
  const [books, setBooks] = useState(null)
  const [changeBook, setChangeBook] = useState(true)

  const selectedBook = (book) => {
    setBooks(book)
  }

  // change book type
  const booksTypeChange = () => {
    setChangeBook(!changeBook)
  }

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
              onClick={booksTypeChange}
              type="button"
              className="w-[150px] h-[30px] rounded-sm bg-white active:bg-slate-500 hover:bg-slate-400 hover:text-white"
            >
              favoraties
            </button>
          </div>
        </div>
        <div className="h-[90%] w-[100%] flex flex-row">
          <aside className="w-[30%] h-[100%] border-t-[1px] border-gray-400 flex flex-col text-center items-center justify-start pt-4 gap-4 overflow-y-auto">
            {changeBook
              ? booksObject.map((book) => (
                  <div
                    onClick={() => selectedBook(book)}
                    key={book.id}
                    className="h-[60px] w-[95%] flex flex-row text-center justify-between items-center pl-2 pr-2 bg-slate-900 rounded-md hover:bg-slate-700 text-white"
                  >
                    <img
                      className="w-[3rem] h-[3rem] rounded-full bg-white border-1"
                      src={Logo}
                      alt=""
                    />
                    <p>{book.title}</p>
                  </div>
                ))
              : favoList.map((book) => (
                  <div
                    onClick={() => selectedBook(book)}
                    key={book.id}
                    className="h-[60px] w-[95%] flex flex-row text-center justify-between items-center pl-2 pr-2 bg-slate-900 rounded-md hover:bg-slate-700 text-white"
                  >
                    <img
                      className="w-[3rem] h-[3rem] rounded-full bg-white border-1"
                      src={Logo}
                      alt=""
                    />
                    <p>{book.title}</p>
                  </div>
                ))}
          </aside>
          <aside className="w-[70%] h-[100%] border-l-[1px] border-t-[1px] border-gray-400 relative overflow-hidden">
            {books && <SelectedBook title={books.title} />}
          </aside>
        </div>
      </main>
    </section>
  )
}

export default Home
