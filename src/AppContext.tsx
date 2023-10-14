import { createContext, useContext, useState, ReactNode } from 'react'
import { PeopleData, StarshipsData } from './@types/swapi'

interface AppContextType {
  people: PeopleData[]
  setPeople: (newPeopleData: PeopleData[]) => void
  starships: StarshipsData[]
  setStarships: (newPeopleData: StarshipsData[]) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function useAppContext() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider')
  }

  return context
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [people, setPeople] = useState<PeopleData[]>([])
  const [starships, setStarships] = useState<StarshipsData[]>([])

  return (
    <AppContext.Provider value={{ people, setPeople, starships, setStarships }}>
      {children}
    </AppContext.Provider>
  )
}
