



function Searchbar({search,setSearch,searchHandler}) {

    const changeHandler = (e) =>{
        setSearch(e.target.value.toLowerCase())
    }
    return(
    <div className="flex gap-2 items-center my-14 p-5">
        <input type="text" value={search} onChange={changeHandler} name="serachbar" placeholder="Search title" className=" pl-4 h-10 w-64 rounded-md bg-purple-50 border-purple-900" />
        <span onClick={searchHandler} className="text-white cursor-pointer bg-purple-400 w-10 h-10 flex items-center justify-center rounded-md transition-all">
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </span>
    </div>
    )
}





export default Searchbar;