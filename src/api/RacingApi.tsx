import { CareerStats, RaceResult } from "../Types";

const BASE_URL = `https://traditional-fantasy-api.run3wide.com/racing`;

// TODO: Remove mock data and enable real fetch calls once backend is live

const MOCK_CAREER_STATS: CareerStats = {
  currentIRating: 2143,
  iRatingChange30Days: 187,
  wins: 3,
  top5s: 14,
  top10s: 28,
  totalRaces: 47,
};

const MOCK_RACE_RESULTS: Array<RaceResult> = [
  {
    id: `1`,
    trackName: `Daytona International Speedway`,
    seriesName: `iRacing Oval Series`,
    finishPosition: 2,
    startPosition: 6,
    incidents: 2,
    iRatingChange: 48,
    raceDate: `2026-06-15T18:30:00Z`,
    storyline: `Starting sixth on the grid at Daytona, the early laps were a tactical chess match. A shrewd pit strategy under the lap-22 caution vaulted us from eighth to third, and a daring three-wide pass into Turn 1 with five to go locked up a hard-fought P2. The iRating gain reflects a clean, incident-light run against a deep field.`,
  },
  {
    id: `2`,
    trackName: `Watkins Glen International`,
    seriesName: `iRacing Road Racing Series`,
    finishPosition: 1,
    startPosition: 3,
    incidents: 0,
    iRatingChange: 92,
    raceDate: `2026-06-08T20:00:00Z`,
    storyline: `A flawless run at the Glen. Zero incidents from lights-out to chequered flag — the kind of race where everything clicks. We got the undercut on the leader during the sole pit stop and never looked back, pulling a 4-second gap over the final stint. A perfect score on the incident meter rewarded with a 92-point iRating haul.`,
  },
  {
    id: `3`,
    trackName: `Bristol Motor Speedway`,
    seriesName: `iRacing Oval Series`,
    finishPosition: 8,
    startPosition: 2,
    incidents: 6,
    iRatingChange: -24,
    raceDate: `2026-06-01T19:00:00Z`,
    storyline: `Bristol giveth and Bristol taketh away. Contact in the closing laps while battling for fifth triggered a spin that dropped us to eighth and left a dent in the iRating. The pace was there — three laps led in the middle stages — but Bristol's short-track chaos proved unforgiving tonight.`,
  },
];

export async function getRaceResults(): Promise<Array<RaceResult>> {
  // TODO: Replace with real API call when backend is live:
  // return fetch(`${BASE_URL}/results`).then((response) => response.json());
  void BASE_URL;
  return Promise.resolve(MOCK_RACE_RESULTS);
}

export async function getCareerStats(): Promise<CareerStats> {
  // TODO: Replace with real API call when backend is live:
  // return fetch(`${BASE_URL}/career-stats`).then((response) => response.json());
  void BASE_URL;
  return Promise.resolve(MOCK_CAREER_STATS);
}
