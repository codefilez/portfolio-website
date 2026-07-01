export type BlogPost = {
  id: string;
  text: string;
  title: string;
  timestamp: string;
};

export type RaceResult = {
  id: string;
  trackName: string;
  seriesName: string;
  finishPosition: number;
  startPosition: number;
  incidents: number;
  iRatingChange: number;
  raceDate: string; // ISO-8601
  storyline: string; // AI-generated narrative
};

export type CareerStats = {
  currentIRating: number;
  iRatingChange30Days: number;
  wins: number;
  top5s: number;
  top10s: number;
  totalRaces: number;
};
