import { useEffect, useState } from "react"
import { MatchInfo } from "../types"
import EnglandFlag from "../assets/england-flag.png"
import { Link } from "react-router-dom"
import ArrowRight from "../assets/arrow-right-circle.png"
import RoundDetails from "./RoundDetails"

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

  const getMatchesByGroup = (matches: MatchInfo[]) => {
    const groupedMatches: Record<number, MatchInfo[]> = {}
    matches.forEach((match) => {
      const roundNumber = match.round

      if (!groupedMatches[roundNumber]) {
        groupedMatches[roundNumber] = []
      }

      groupedMatches[roundNumber].push(match)
    })
    return groupedMatches
  }

  const groupedMatches = getMatchesByGroup(matches)

  return (
    <div className="flex flex-col max-w-6xl w-full rounded-2xl shadow-xl bg-white mt-4">
      <div className="p-4">
        <button className="py-4 px-5 text-white text-base leading-4 font-medium bg-[#1C336c] rounded-lg">
          Wszystkie
        </button>
      </div>
      <div className="flex justify-between p-4 border-y border-t-gray-200 border-b-gray-200">
        <div className="flex gap-4">
          <img src={EnglandFlag} alt="Flag of England" />
          <p className="font-medium text-xl leading-5">
            Anglia: Premier League
          </p>
        </div>
        <Link to="/standings">
          <div className="flex gap-1">
            <p className="font-medium text-base leading-4">Tabela</p>
            <img src={ArrowRight} alt="Right arrow" />
          </div>
        </Link>
      </div>
      {Object.keys(groupedMatches).map((roundNumber, index) => (
        <RoundDetails
          key={index}
          roundNumber={parseInt(roundNumber, 10)}
          details={groupedMatches[parseInt(roundNumber, 10)]}
        />
      ))}
    </div>
  )
}

export default Home
