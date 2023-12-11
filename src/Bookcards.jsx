import { useState } from "react";


function Bookcards({book,likeList}) {
    const [hasFav,setFav] = useState(false)
    function likeHandler(){
        setFav((Fav) => !Fav)
        likeList(book,hasFav)
    }
    return ( 
        <div className="w-full bg-zinc-800 p-3 rounded-lg flex justify-between">
            <a  className="flex flex-row items-center text-white gap-4" href={book.link}>
            <img className="w-[4.5rem] rounded-md" src={book.image} alt={book.title} />
            <div className="flex flex-col h-full justify-between">
                <div className=" flex flex-col gap-5">
                    <h3 className="text-xl">{book.title}</h3>
                    <p className="text-md text-gray-200">{book.author}</p>
                </div>
                <div className="flex gap-10 text-xs text-gray-400">
                    <div>{book.language}
                    </div>
                <div className="flex gap-1 text-xs justify-self-end">
                    <span>{book.pages}</span>
                    <span>{book.country}</span>
                </div>
                </div>
            </div>
            </a>
            <span className="cursor-pointer" onClick={likeHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={hasFav ? "red" : "gainsboro"} className="w-7 h-7">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
            </span>
        </div>
     );
}

export default Bookcards;