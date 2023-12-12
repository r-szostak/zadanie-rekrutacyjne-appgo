import { useEffect, useState } from "react"
import { StandingsInfo } from "../types"

const useStandingsData = () => {
  const [standings, setStandings] = useState<StandingsInfo[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://php74.appgo.pl/sport_api/api/public/api/table"
        )

        const data = await response.json()

        setStandings(data)
      } catch (error) {
        throw new Error("Error fetching data.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { isLoading, standings }
}
export default useStandingsData
