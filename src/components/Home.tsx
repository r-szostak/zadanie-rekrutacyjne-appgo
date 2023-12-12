import { useEffect, useState } from "react"
import { MatchInfo } from "../types"
import EnglandFlag from "../assets/england-flag.png"
import { Link } from "react-router-dom"
import ArrowRight from "../assets/arrow-right-circle.png"
import RoundDetails from "./RoundDetails"
import ChevronLeft from "../assets/chevron-left-orange.png"
import ChevronRight from "../assets/chevron-right-orange.png"

const Home = () => {
  const [matches, setMatches] = useState<MatchInfo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://php74.appgo.pl/sport_api/api/public/api/games?page=${page}&onPage=15&orderDirection=desc&orderBy=round`
        )

        const data = await response.json()

        const sortedMatches = data.data.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        )

        setMatches(sortedMatches)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        throw new Error("Error fetching data.")
      }
    }

    fetchData()
  }, [page])

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
    <>
      {isLoading ? (
        <div className="flex items-center justify-center text-3xl h-full">
          Loading...
        </div>
      ) : (
        <div className="flex flex-col max-w-6xl w-full rounded-2xl shadow-xl bg-white mt-4 mb-16">
          <div className="p-4">
            <button className="py-4 px-5 text-white text-base leading-4 font-medium bg-[#1C336c] rounded-lg">
              Wszystkie
            </button>
          </div>
          <div className="flex justify-between p-4 border-y border-t-gray-200 border-b-gray-200">
            <div className="flex gap-4  flex-1">
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
      )}
      <div className="flex justify-between max-w-6xl w-full mb-16 font-medium text-lg leading-[18px] opacity-50">
        <button
          className="flex gap-2"
          onClick={() => page > 1 && setPage((prev) => prev - 1)}
        >
          <img src={ChevronLeft} alt="Arrow left" />
          <p>Wstecz</p>
        </button>

        <button
          className="flex gap-2"
          onClick={() => setPage((prev) => prev + 1)}
        >
          <p>Dalej</p>
          <img src={ChevronRight} alt="Arrow right" />
        </button>
      </div>
    </>
  )
}

export default Home
