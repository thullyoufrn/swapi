import { ChangeEvent, useEffect, useState } from "react"
import { ListItem } from "./ListItem"
import { SearchBar } from "./SearchBar"
import axios from "axios"
import Paginator from "./Paginator"
import Loading from "./Loading"
import { useAppContext } from "../AppContext"

export function PeopleList() {
  const [searchBarContent, setSearchBarContent] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)

  const {people, setPeople} = useAppContext()

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
    .get(`https://swapi.dev/api/people/?page=${currentPage}`)
    .then(({ data }) => {
      setTotalPages(data % 10 === 0 ? data / 10 : Math.floor(82 / 10) + 1)
      setPeople(data.results)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [currentPage])

  return (
    <section className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-10">
        <SearchBar 
          handleSearchBarChange={handleSearchBarChange} 
          searchBarContent={searchBarContent} 
        />

          {loading 
            ? <Loading />
            : (
              <main className="grid gap-5 sm:grid-cols-2 h-full">
                {people.map((person) => (
                  person.name.includes(searchBarContent)
                  && (
                    <ListItem
                      key={person.name}
                      itemTitle={person.name}
                      itemSubtitle={person.birth_year}
                      to={`${person.name}`}
                    />
                  )
                ))}
              </main>
            )
          }
      </div>
      
      <Paginator 
        loading={loading}
        onPreviousPage={previousPage} 
        onNextPage={nextPage} 
        currentPage={currentPage} 
        lastPage={totalPages}
      />
    </section>
  )
}
