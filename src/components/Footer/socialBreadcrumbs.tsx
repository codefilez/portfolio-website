import { Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

const openInNewTab = (url: string) => {
  return () => {
    window.open(url, `_blank`);
  };
};

const styledIcon = (
  Component: OverridableComponent<SvgIconTypeMap>,
  url: string,
) => (
  <Component
    onClick={openInNewTab(url)}
    sx={{
      color: `text.secondary`,
      fontSize: `1.4rem`,
      cursor: `pointer`,
      transition: `color 0.15s ease`,
      "&:hover": { color: `text.primary` },
    }}
  />
);

export const SocialBreadcrumbs = () => (
  <Stack direction="row" spacing={2.5}>
    {styledIcon(
      LinkedInIcon,
      `https://www.linkedin.com/in/paul-robson-78a73a129`,
    )}
    {styledIcon(TwitterIcon, `https://twitter.com/run3wide`)}
    {styledIcon(GitHubIcon, `https://github.com/run3wide`)}
  </Stack>
);
