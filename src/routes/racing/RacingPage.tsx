import React, { useEffect, useState } from "react";
import { CareerStats, RaceResult } from "../../Types";
import { getCareerStats, getRaceResults } from "../../api/RacingApi";
import { CareerStatsCard } from "./CareerStatsCard";
import { RaceCard } from "./RaceCard";
import { CenteredDiv } from "../../styling/CenteredDiv";
import { StyledH1 } from "../../styling/StyledH1";

export const RacingPage: React.FC = () => {
  const [careerStats, setCareerStats] = useState<CareerStats | null>(null);
  const [raceResults, setRaceResults] = useState<Array<RaceResult>>([]);

  useEffect(() => {
    getCareerStats().then((data) => setCareerStats(data));
    getRaceResults().then((data) => setRaceResults(data));
  }, []);

  return (
    <CenteredDiv>
      <StyledH1>Racing</StyledH1>
      {careerStats !== null && <CareerStatsCard stats={careerStats} />}
      {raceResults.map((race) => (
        <RaceCard key={race.id} race={race} />
      ))}
    </CenteredDiv>
  );
};
