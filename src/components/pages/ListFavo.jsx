import React from 'react'
import { favoList } from './SelectedBook'
import Logo from '../icons/logo.png' // changed

const ListFavo = () => {
  console.log('this is favo list in list favo', favoList)
  return favoList.map((book) => (
    <div
      key={book.id}
      className="h-[60px] w-[95%] flex flex-row text-center justify-between items-center pl-2 pr-2 bg-slate-900 rounded-md hover:bg-slate-700 text-white"
    >
      <img
        className="w-[3rem] h-[3rem] rounded-full bg-white border-1 "
        src={Logo}
        alt=""
      />
      <p>{book.title}</p>
    </div>
  ))
}

export default ListFavo
