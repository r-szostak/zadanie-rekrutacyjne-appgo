import { useEffect, useState } from "react"
import { MatchInfo } from "../types"

const useMatchesData = (page: number) => {
  const [matches, setMatches] = useState<MatchInfo[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          `https://php74.appgo.pl/sport_api/api/public/api/games?page=${page}&onPage=15&orderDirection=desc&orderBy=round`
        )

        const data = await response.json()

        const sortedMatches = data.data.sort((a: MatchInfo, b: MatchInfo) => {
          const dateA = new Date(a.date).getTime()
          const dateB = new Date(b.date).getTime()

          return dateA - dateB
        })

        setMatches(sortedMatches)
      } catch (error) {
        throw new Error("Error fetching data.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [page])

  return { isLoading, matches }
}

export default useMatchesData
