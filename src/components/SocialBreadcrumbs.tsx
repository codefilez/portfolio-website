import { Breadcrumbs } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialBreadcrumbs = () => {
  return (
    <div style={{ display: `flex`, justifyContent: `center`, color: `white` }}>
      <Breadcrumbs style={{ color: `white`, fontSize: `2rem` }}>
        <LinkedInIcon style={{ color: `white`, fontSize: `2rem` }} />
        <TwitterIcon style={{ color: `white`, fontSize: `2rem` }} />
        <GitHubIcon style={{ color: `white`, fontSize: `2rem` }} />
      </Breadcrumbs>
    </div>
  );
};

export default SocialBreadcrumbs;
