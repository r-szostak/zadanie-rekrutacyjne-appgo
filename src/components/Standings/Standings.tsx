import ChevronRight from "../../assets/chevron-right.png"
import EnglandFlag from "../../assets/england-flag.png"
import { Link } from "react-router-dom"
import ArrowRight from "../../assets/arrow-right-circle.png"
import Tableheader from "./Tableheader"
import useStandingData from "../../hooks/useStandingsData"

const Standings = () => {
  const { isLoading, standings } = useStandingData()

  const getPositionBackgroundColor = (index: number) => {
    return index + 1 < 5
      ? "bg-[#1C336C]"
      : index + 1 < 6
      ? "bg-[#C82D2D]"
      : index + 1 < 18
      ? "bg-[#a7a7a7]"
      : "bg-[#ff5f5f]"
  }

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center text-3xl h-full">
          Loading...
        </div>
      ) : (
        <>
          <div className="w-full bg-[#eeeff2] py-[10px] px-12 mt-[104px]">
            <div className="flex gap-4">
              <p className="font-medium text-base leading-4">Piłka nożna</p>
              <img src={ChevronRight} alt="Right chevron" />
              <p className="font-medium text-base leading-4 text-[#1C336C] opacity-50">
                Tabela
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-6xl w-full rounded-2xl shadow-xl bg-white mt-4 mb-16">
            <div className="flex justify-between items-center p-4 border-b border-b-gray-200">
              <div className="flex gap-4">
                <img src={EnglandFlag} alt="Flag of England" />
                <p className="font-medium text-xl leading-5">
                  Anglia: Premier League
                </p>
              </div>
              <Link to="/">
                <div className="flex gap-1">
                  <p className="font-medium text-base leading-4">Mecze</p>
                  <img src={ArrowRight} alt="Right arrow" />
                </div>
              </Link>
            </div>
            <div className="pt-4 px-4">
              <table className=" text-xs  text-left w-full ">
                <Tableheader />
                <tbody>
                  {standings.map((position, index) => (
                    <>
                      <tr className="w-full border-b border-b-gray-200">
                        <td className={"font-semibold pl-4 py-4 "}>
                          <p
                            className={`flex justify-center items-center rounded-md font-semibold w-6 h-6 text-white ${getPositionBackgroundColor(
                              index
                            )}`}
                          >
                            {index + 1}
                          </p>
                        </td>
                        <td className=" font-semibold ">
                          <div className="flex items-center gap-2">
                            <img
                              src={position.team.image}
                              alt={`${position.team} logo`}
                              className="w-6 h-6"
                            />
                            <p className="font-medium text-sm leading-[14px]">
                              {position.team.name}
                            </p>
                          </div>
                        </td>
                        <td className=" font-medium text-sm leading-[14px] text-center">
                          {position.games}
                        </td>
                        <td className=" font-medium text-sm leading-[14px] text-center">
                          {position.goals_scored}:{position.goals_conceded}
                        </td>
                        <td className=" font-medium text-sm leading-[14px] text-center">
                          {position.goals_ratio}
                        </td>
                        <td className=" font-medium text-sm leading-[14px] pr-4 text-right">
                          {position.points}
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
              <div className="my-6 font-normal text-xs leading-3 px-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#1c336c] w-4 h-4 rounded"></div>
                  <p>Awans - Liga Mistrzów (Runda grupowa)</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#C82D2D] w-4 h-4 rounded"></div>
                  <p>Awans - Liga Europy (Runda grupowa)</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#FF5F5F] w-4 h-4 rounded"></div>
                  <p>Spadek - Championship</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Standings
