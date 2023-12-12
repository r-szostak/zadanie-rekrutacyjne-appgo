import { MatchInfo } from "../types"
import MatchDetails from "./MatchDetails"

interface RoundDetailsProps {
  roundNumber: number
  details: MatchInfo[]
}

const RoundDetails = ({ roundNumber, details }: RoundDetailsProps) => {
  return (
    <div className="pt-4 px-4">
      <div className="uppercase bg-[#EAEBED] rounded font-medium text-xs leading-3 py-2 px-4">
        runda {roundNumber}
      </div>
      {details.map((matchDetails) => (
        <MatchDetails details={matchDetails} />
      ))}
    </div>
  )
}

export default RoundDetails
