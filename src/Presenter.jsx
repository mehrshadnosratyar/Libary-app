import { useState } from "react";
import Bookcards from "./Bookcards";
import Favbooks from "./Favbooks";


function Presenter({books}) {
    const [likedList,setLikeList] = useState([])

    function likeList(book,status){
        if(status){
            const newLikeList = likedList.filter(i => i.id!== book.id)
            setLikeList(newLikeList)
        } else{
            setLikeList(likedList => [...likedList,book])
        }
    }
    return ( 
        <div className="flex gap-10 flex-col md:flex-row-reverse">
            {!!likedList.length && <div className="w-full md:w-96 text-white bg-purple-400 py-2 h-max px-4 rounded-xl flex flex-col gap-4">
                <h2 className="text-3xl text-fuchsia-100">Favorite List</h2>
                {likedList.map((book) => ( <Favbooks key={book.id} book={book} /> ))}
            </div>}
            <div className={"flex flex-col gap-6 w-full overflow-hidden"}>
                {books.map((book) => (
                    <Bookcards key={book.id} book={book} likeList={likeList} />
                ))}
            </div>
        
        </div>
     );
}

export default Presenter;