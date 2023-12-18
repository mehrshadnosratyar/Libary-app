

function Favbooks({book}) {
    if(book){
        return (
            <div>
                <div className="flex items-center  gap-3 bg-purple-500 p-2 rounded-lg">
                    <img className="w-16 rounded-md" src={book.image} alt={book.title} />
                    <h4>{book.title}</h4>
                </div>
            </div>
        )
    }
}

export default Favbooks;