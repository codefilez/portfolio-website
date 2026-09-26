import { Box, Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CodeIcon from "@mui/icons-material/Code";
import { projects, skills } from "./homeContent";
import { ProjectCard } from "./ProjectCard";

export const WelcomePage = () => {
  return (
    <Box>
      <Container maxWidth="md" sx={{ pt: { xs: 10, md: 14 }, pb: 8, textAlign: `center` }}>
        <Chip
          icon={<CodeIcon sx={{ fontSize: `1rem !important` }} />}
          label="Software Engineer · Sim Racer · Reader"
          size="small"
          sx={{
            mb: 3,
            color: `secondary.main`,
            borderColor: `rgba(34, 211, 238, 0.35)`,
            bgcolor: `rgba(34, 211, 238, 0.08)`,
          }}
          variant="outlined"
        />
        <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: `2.4rem`, md: `3.4rem` } }}>
          Hi, I&apos;m Paul.
          <br />I build software that stays out of the way.
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 5, fontWeight: 400, maxWidth: 640, mx: `auto` }}>
          I write backend systems and the occasional frontend, read a lot of
          engineering books, and spend evenings chasing tenths of a second
          around virtual race tracks.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ justifyContent: `center` }}>
          <Button
            component={RouterLink}
            to="/blog"
            variant="contained"
            size="large"
            endIcon={<ArrowOutwardIcon />}
          >
            Read the blog
          </Button>
          <Button
            component={RouterLink}
            to="/books"
            variant="outlined"
            size="large"
            color="inherit"
            sx={{ borderColor: `rgba(148,163,184,0.35)`, color: `text.primary` }}
          >
            See my bookshelf
          </Button>
        </Stack>
      </Container>

      <Container maxWidth="md" sx={{ pb: 8 }}>
        <Stack
          direction="row"
          spacing={1.25}
          useFlexGap
          sx={{ flexWrap: `wrap`, justifyContent: `center` }}
        >
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{ bgcolor: `background.paper`, color: `text.secondary`, mb: 1 }}
            />
          ))}
        </Stack>
      </Container>

      <Container maxWidth="lg" sx={{ pb: 12 }}>
        <Typography variant="h4" sx={{ mb: 1, textAlign: `center` }}>
          Things I&apos;ve been building
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 5, textAlign: `center`, maxWidth: 560, mx: `auto` }}
        >
          A mix of side projects, experiments, and tools I built because I
          wanted them to exist.
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid key={project.name} size={{ xs: 12, md: 4 }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
