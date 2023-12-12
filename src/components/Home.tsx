import { useEffect, useState } from "react"
import { MatchInfo } from "../types"

const Home = () => {
  const [matches, setMatches] = useState<MatchInfo[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(
      "https://php74.appgo.pl/sport_api/api/public/api/games?page=1&onPage=5&orderDirection=desc&orderBy=round"
    )
      .then((response) => response.json())
      .then((data) => setMatches(data.data))

    setIsLoading(false)
  }, [])

  return <div>Home</div>
}

export default Home
