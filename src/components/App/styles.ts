import { styled } from "@mui/system";

export const StyledDiv = styled(`div`)({
  minHeight: `100vh`,
  background: `
    radial-gradient(1200px circle at 15% -10%, rgba(99, 102, 241, 0.18), transparent 60%),
    radial-gradient(900px circle at 90% 10%, rgba(34, 211, 238, 0.12), transparent 55%),
    #0A0E1A
  `,
  display: `flex`,
  flexDirection: `column`,
});
