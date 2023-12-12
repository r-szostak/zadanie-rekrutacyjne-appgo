export type MatchInfo = {
  id: number
  round: number
  date: string
  home_team: string
  away_team: string
  home_score: string
  away_score: string
  created_at: Date
  updated_at: Date
  home_team_object: {
    id: number
    name: string
    image: string
    created_at: Date
    updated_at: Date
  }
  away_team_object: {
    id: number
    name: string
    image: string
    created_at: Date
    updated_at: Date
  }
}

export type StandingsInfo = {
  team: {
    id: number
    name: string
    image: string
    created_at: Date
    updated_at: Date
  }
  points: number
  goals_scored: number
  goals_conceded: number
  goals_ratio: number
  games: number
}
