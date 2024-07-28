import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: string;
      secondary: string;
      light: string;
    };
    typography: {
      font: {
        size: {
          small: number;
          medium: number;
          large: number;
        };
      };
    };
  }
}
