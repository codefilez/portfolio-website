import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { CareerStats } from "../../Types";

const StyledCard = styled(Card)({
  opacity: `70%`,
  background: `transparent`,
  border: `none`,
  width: `50%`,
  marginBottom: `2rem`,
});

const StyledLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: `0.85rem`,
  textTransform: `uppercase`,
  letterSpacing: `0.05em`,
}));

const StyledValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: `bold`,
  fontSize: `1.5rem`,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: `bold`,
  fontSize: `1.25rem`,
  marginBottom: `1rem`,
}));

const StatsGrid = styled(`div`)({
  display: `grid`,
  gridTemplateColumns: `repeat(3, 1fr)`,
  gap: `1rem`,
});

const StatItem = styled(`div`)({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  textAlign: `center`,
});

type CareerStatsCardProps = {
  stats: CareerStats;
};

export const CareerStatsCard: React.FC<CareerStatsCardProps> = ({ stats }) => {
  const iRatingTrend =
    stats.iRatingChange30Days >= 0
      ? `+${stats.iRatingChange30Days}`
      : `${stats.iRatingChange30Days}`;

  return (
    <StyledCard variant="outlined">
      <CardContent>
        <StyledTitle>Career Stats</StyledTitle>
        <StatsGrid>
          <StatItem>
            <StyledValue>{stats.currentIRating}</StyledValue>
            <StyledLabel>iRating</StyledLabel>
          </StatItem>
          <StatItem>
            <StyledValue>{iRatingTrend}</StyledValue>
            <StyledLabel>30-Day Change</StyledLabel>
          </StatItem>
          <StatItem>
            <StyledValue>{stats.totalRaces}</StyledValue>
            <StyledLabel>Races</StyledLabel>
          </StatItem>
          <StatItem>
            <StyledValue>{stats.wins}</StyledValue>
            <StyledLabel>Wins</StyledLabel>
          </StatItem>
          <StatItem>
            <StyledValue>{stats.top5s}</StyledValue>
            <StyledLabel>Top 5s</StyledLabel>
          </StatItem>
          <StatItem>
            <StyledValue>{stats.top10s}</StyledValue>
            <StyledLabel>Top 10s</StyledLabel>
          </StatItem>
        </StatsGrid>
      </CardContent>
    </StyledCard>
  );
};
