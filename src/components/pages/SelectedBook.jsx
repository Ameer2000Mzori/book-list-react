import React from 'react'
import PropTypes from 'prop-types' // Make sure this line is added
import Logo from '../icons/logo.png'

const SelectedBook = ({ title }) => {
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
            type="button"
            className="h-[40px] w-[160px] bg-slate-500 rounded-mg hover:bg-slate-200 active:bg-slate-600"
          >
            remove this book
          </button>
        ) : (
          <button
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
