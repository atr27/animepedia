export default function Pagination({page, setPage, lastPage}) {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top:0
        })
    }

    const handleNextPage = () => {
        setPage((prevState)=> prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState)=> prevState - 1)
        scrollTop()
    }

    return (
        <>
            <div className="flex justify-center items-center py-4 px-2 gap-2 text-warna-white text-xl">
                {page <=1 ? null : 
                    <button onClick={handlePrevPage} className="transition-all hover:text-warna-accent">Previous</button>
                }
                
                <p>{page} of {lastPage}</p>

                {page >= lastPage ? null :
                    <button onClick={handleNextPage} className="transition-all hover:text-warna-accent">Next</button>
                }
                
            </div>
        </>
    )
}
