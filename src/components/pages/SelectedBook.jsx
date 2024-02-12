import React from 'react'
import PropTypes from 'prop-types' // Make sure this line is added
import Logo from '../icons/logo.png'

export const favoList = [
  {
    id: 1,
    title: 'test',
  },
]

const SelectedBook = ({ title }) => {
  const foundBook = favoList.some((book) => book.title === title)
  const saveFavo = () => {
    if (foundBook) {
      console.log('this book is already in your favourites')
    } else {
      console.log('saved', title)
      favoList.push({
        title,
      })
      console.log('this is our favolist afer :', favoList)
    }
  }

  const removeFavo = () => {
    const index = favoList.findIndex((book) => book.title === title)
    favoList.splice(index, 1)
    console.log('this is our favolist afer :', favoList)
  }

  return (
    <div>
      <img
        className="w-[100%] h-[100%] bg-white border-1 object-cover "
        src={Logo}
        alt=""
      />
      <div className="absolute bottom-5 w-[100%] h-[60px] bg-slate-400 flex flex-row justify-evenly items-center">
        <p className="flex flex-col justify-evenly text-center item-center h-[40px] w-[160px] bg-slate-300 rounded-mg">
          {title}
        </p>
        {foundBook ? (
          <button
            onClick={() => removeFavo(title)}
            type="button"
            className="h-[40px] w-[160px] bg-slate-500 rounded-mg hover:bg-slate-200 active:bg-slate-600"
          >
            remove this book
          </button>
        ) : (
          <button
            onClick={() => saveFavo(title)}
            type="button"
            className="h-[40px] w-[160px] bg-slate-500 rounded-mg hover:bg-slate-200 active:bg-slate-600"
          >
            save as favorat
          </button>
        )}
      </div>
    </div>
  )
}

SelectedBook.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SelectedBook
