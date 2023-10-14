import { ChangeEvent, useEffect, useState } from "react"
import { ListItem } from "./ListItem"
import { SearchBar } from "./SearchBar"
import axios from "axios"
import Paginator from "./Paginator"
import Loading from "./Loading"
import { useAppContext } from "../contexts/AppContext"

export function StarshipsList() {
  const [searchBarContent, setSearchBarContent] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)

  const {starships, setStarships} = useAppContext()

  function handleSearchBarChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setSearchBarContent(event.target.value)
  }

  function nextPage() {
    setCurrentPage((state) => state < totalPages ? state + 1 : state)
  }

  function previousPage() {
    setCurrentPage((state) => state > 1 ? state - 1 : state)
  }

  useEffect(() => {
    setLoading(true)

    axios
    .get(`https://swapi.dev/api/starships/?page=${currentPage}`)
    .then(({ data }) => {
      setTotalPages(data % 10 === 0 ? data / 10 : Math.floor(data.count / 10) + 1)
      setStarships(data.results)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [currentPage])

  return (
    <section className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-5">
        <SearchBar 
          handleSearchBarChange={handleSearchBarChange} 
          searchBarContent={searchBarContent} 
        />

        <Paginator 
          loading={loading}
          onPreviousPage={previousPage} 
          onNextPage={nextPage} 
          currentPage={currentPage} 
          lastPage={totalPages}
        />

        {loading 
          ? <Loading />
          : (
            <main className="grid gap-5 sm:grid-cols-2 h-full">
              {starships.map((starship) => (
                starship.name.includes(searchBarContent)
                  && (
                    <ListItem
                      key={starship.name}
                      itemTitle={starship.name}
                      itemSubtitle={starship.model}
                      to={`${starship.name}`}
                    />  
                  )              
              ))}
            </main>
          )
        }
      </div>
    </section>
  )
}
