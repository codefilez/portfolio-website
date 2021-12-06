import { Breadcrumbs } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialBreadcrumbs = () => {
  return (
    <div style={{ display: `flex`, justifyContent: `center`, color: `white` }}>
      <Breadcrumbs style={{ color: `white` }}>
        <LinkedInIcon style={{ color: `white` }} />
        <TwitterIcon style={{ color: `white` }} />
        <GitHubIcon style={{ color: `white` }} />
      </Breadcrumbs>
    </div>
  );
};

export default SocialBreadcrumbs;
