import { Card, CardContent, Chip, Stack, Typography, IconButton } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Project } from "./homeContent";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => (
  <Card
    sx={{
      height: `100%`,
      bgcolor: `background.paper`,
      transition: `transform 0.2s ease, border-color 0.2s ease`,
      "&:hover": {
        transform: `translateY(-4px)`,
        borderColor: `rgba(99, 102, 241, 0.45)`,
      },
    }}
  >
    <CardContent sx={{ height: `100%`, display: `flex`, flexDirection: `column` }}>
      <Stack
        direction="row"
        sx={{ justifyContent: `space-between`, alignItems: `flex-start`, mb: 1 }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {project.name}
        </Typography>
        <IconButton
          size="small"
          href={project.url}
          target="_blank"
          rel="noreferrer"
          sx={{ color: `text.secondary` }}
        >
          <ArrowOutwardIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
        {project.description}
      </Typography>
      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: `wrap` }}>
        {project.tags.map((tag) => (
          <Chip key={tag} label={tag} size="small" sx={{ bgcolor: `rgba(99,102,241,0.12)`, color: `primary.light` }} />
        ))}
      </Stack>
    </CardContent>
  </Card>
);
