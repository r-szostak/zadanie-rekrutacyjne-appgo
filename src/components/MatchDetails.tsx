import { MatchInfo } from "../types"
import Monitor from "../assets/monitor.png"
import ArrowRight from "../assets/arrow-right-circle.png"
interface MatchDetailsProps {
  details: MatchInfo
}

const MatchDetails = ({ details }: MatchDetailsProps) => {
  return (
    <div className="p-4 flex justify-between items-center w-full border-b border-b-gray-200 last:border-b-0 gap-16">
      <div className="flex gap-8 items-center max-w-2xl w-full">
        <div className="font-normal text-base leading-4 opacity-50">
          {details.date}
        </div>
        <div className="flex flex-col gap-2 border-l-2 border-l-[#61AEE4] px-2">
          <div className="flex gap-3">
            <img
              src={details.home_team_object.image}
              alt="Home team logo"
              className="w-4 h-4"
            />
            <p className="font-medium text-base leading-4">
              {details.home_team}
            </p>
          </div>
          <div className="flex gap-3">
            <img
              src={details.away_team_object.image}
              alt="Away team logo"
              className="w-4 h-4"
            />
            <p className="font-medium text-base leading-4">
              {details.away_team}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center gap-2 font-medium text-base leading-4 opacity-50">
        <p>{details.home_score}</p>
        <p>{details.away_score}</p>
      </div>

      <div className="flex gap-2">
        <button className="rounded-lg border-[1.5px] border-[#d5E0E8] py-3 px-3">
          <img src={Monitor} alt="TV icon" />
        </button>
        <button className="rounded-lg border-[1.5px] border-[#d5E0E8] py-3 px-4">
          <div className="flex gap-1">
            <p className="font-medium text-base leading-4">Szczegóły</p>
            <img src={ArrowRight} alt="Right arrow" />
          </div>
        </button>
      </div>
    </div>
  )
}

export default MatchDetails
