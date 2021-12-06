import { Breadcrumbs } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const openInNewTab = (url: string) => {
  return () => {
    window.open(url, `_blank`);
  };
};

const SocialBreadcrumbs = () => {
  return (
    <div style={{ display: `flex`, justifyContent: `center`, color: `white` }}>
      <Breadcrumbs style={{ color: `white`, fontSize: `2rem` }}>
        <LinkedInIcon
          onClick={openInNewTab(
            `https://www.linkedin.com/in/paul-robson-78a73a129`
          )}
          style={{ color: `white`, fontSize: `2rem` }}
        />

        <TwitterIcon
          onClick={openInNewTab(`https://twitter.com/run3wide`)}
          style={{ color: `white`, fontSize: `2rem` }}
        />
        <GitHubIcon
          onClick={openInNewTab(`https://github.com/run3wide`)}
          style={{ color: `white`, fontSize: `2rem` }}
        />
      </Breadcrumbs>
    </div>
  );
};

export default SocialBreadcrumbs;
