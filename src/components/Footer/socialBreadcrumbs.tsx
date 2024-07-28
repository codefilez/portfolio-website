import { Breadcrumbs } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";

const openInNewTab = (url: string) => {
  return () => {
    window.open(url, `_blank`);
  };
};

const styledIcon = (
  Component: OverridableComponent<SvgIconTypeMap>,
  url: string
) => (
  <Component
    onClick={openInNewTab(url)}
    style={{ color: `white`, fontSize: `2rem`, cursor: `pointer` }}
  />
);

export const SocialBreadcrumbs = () => (
  <div style={{ display: `flex`, justifyContent: `center`, color: `white` }}>
    <Breadcrumbs style={{ color: `white`, fontSize: `2rem` }}>
      {styledIcon(
        LinkedInIcon,
        `https://www.linkedin.com/in/paul-robson-78a73a129`
      )}
      {styledIcon(TwitterIcon, `https://twitter.com/run3wide`)}
      {styledIcon(GitHubIcon, `https://github.com/run3wide`)}
    </Breadcrumbs>
  </div>
);
