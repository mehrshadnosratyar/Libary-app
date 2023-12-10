import Bookcards from "./Bookcards";

function Presenter({books}) {
    return ( 
        <div className="flex">
            <div className="flex flex-col gap-6 w-full overflow-hidden">
                {books.map((book) => (
                    <Bookcards key={books.id} book={book} />
                ))}
            </div>
            <div></div>
        </div>
     );
}

export default Presenter;