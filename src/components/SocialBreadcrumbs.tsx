import { Breadcrumbs } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialBreadcrumbs = () => {
  return (
    <div style={{ display: `flex`, justifyContent: `center`, color: `white` }}>
      <Breadcrumbs style={{ color: `white`, fontSize: `2rem` }}>
        <LinkedInIcon
          onClick={() => {
            window.open(
              `https://www.linkedin.com/in/paul-robson-78a73a129`,
              `_blank`
            );
          }}
          style={{ color: `white`, fontSize: `2rem` }}
        />

        <TwitterIcon
          onClick={() => {
            window.open(`https://twitter.com/run3wide`, `_blank`);
          }}
          style={{ color: `white`, fontSize: `2rem` }}
        />
        <GitHubIcon
          onClick={() => {
            window.open(`https://github.com/run3wide`, `_blank`);
          }}
          style={{ color: `white`, fontSize: `2rem` }}
        />
      </Breadcrumbs>
    </div>
  );
};

export default SocialBreadcrumbs;
