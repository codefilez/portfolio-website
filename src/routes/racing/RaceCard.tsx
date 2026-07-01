import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { RaceResult } from "../../Types";

const StyledCard = styled(Card)({
  opacity: `70%`,
  background: `transparent`,
  border: `none`,
  width: `50%`,
  marginBottom: `1rem`,
  textAlign: `left`,
});

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: `bold`,
  fontSize: `1.1rem`,
}));

const StyledSeries = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: `0.9rem`,
  marginBottom: `0.75rem`,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const StyledStoryline = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontStyle: `italic`,
  marginTop: `0.75rem`,
  lineHeight: 1.6,
}));

const MetaRow = styled(`div`)({
  display: `flex`,
  gap: `1.5rem`,
  flexWrap: `wrap`,
  marginBottom: `0.25rem`,
});

const MetaItem = styled(`div`)({
  display: `flex`,
  flexDirection: `column`,
});

const MetaLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: `0.75rem`,
  textTransform: `uppercase`,
  letterSpacing: `0.05em`,
}));

const MetaValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: `bold`,
}));

type RaceCardProps = {
  race: RaceResult;
};

const formatDate = (isoDate: string): string => {
  return new Date(isoDate).toLocaleDateString(`en-US`, {
    year: `numeric`,
    month: `long`,
    day: `numeric`,
  });
};

const formatIRatingChange = (change: number): string =>
  change >= 0 ? `+${change}` : `${change}`;

export const RaceCard: React.FC<RaceCardProps> = ({ race }) => (
  <StyledCard variant="outlined">
    <CardContent>
      <StyledTitle>{race.trackName}</StyledTitle>
      <StyledSeries>{race.seriesName}</StyledSeries>
      <MetaRow>
        <MetaItem>
          <MetaLabel>Finish</MetaLabel>
          <MetaValue>P{race.finishPosition}</MetaValue>
        </MetaItem>
        <MetaItem>
          <MetaLabel>Start</MetaLabel>
          <MetaValue>P{race.startPosition}</MetaValue>
        </MetaItem>
        <MetaItem>
          <MetaLabel>iRating</MetaLabel>
          <MetaValue>{formatIRatingChange(race.iRatingChange)}</MetaValue>
        </MetaItem>
        <MetaItem>
          <MetaLabel>Incidents</MetaLabel>
          <MetaValue>{race.incidents}x</MetaValue>
        </MetaItem>
        <MetaItem>
          <MetaLabel>Date</MetaLabel>
          <MetaValue>{formatDate(race.raceDate)}</MetaValue>
        </MetaItem>
      </MetaRow>
      <StyledStoryline>{race.storyline}</StyledStoryline>
    </CardContent>
  </StyledCard>
);
