import Header from "./Header";
import Presenter from "./Presenter";
import Searchbar from "./Searchbar";
import {books}  from "./constants/mockData";

export default function App() {
    return (
      <div className="container w-3/4 p-3 mx-auto ">
        <Header/>
        <Searchbar/>
        <Presenter books={books}/>
      </div>
    )
  }