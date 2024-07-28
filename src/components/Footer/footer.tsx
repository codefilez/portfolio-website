import { SocialBreadcrumbs } from "./socialBreadcrumbs";

export const Footer = () => {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
      }}
    >
      <SocialBreadcrumbs />
      <p style={{ color: `white`, fontSize: `.8rem` }}>
        Copyright © 2020 run3wide (Paul Robson) All rights reserved.
      </p>
    </div>
  );
};
