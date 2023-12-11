import Header from "./Header";
import Presenter from "./Presenter";
import Searchbar from "./Searchbar";
import {books as bookData}  from "./constants/mockData";
import { useState } from "react";
export default function App() {
  const [search,setSearch] = useState("")
  const [books,setBooks] = useState(bookData)

  function searchHandler() {
    if(search){
    const selectedBooks = books.filter((book)=> (book.title.toLowerCase().includes(search)))
    setBooks(selectedBooks)
    } else setBooks(bookData)
  }



    return (
      <div className="container w-3/4 p-3 mx-auto ">
        <Header/>
        <Searchbar search={search} setSearch={setSearch} searchHandler={searchHandler}/>
        <Presenter books={books}/>
      </div>
    )
  }