import { createTheme, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import React from 'react';

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

const breakpoints = createBreakpoints({});

export default function MuiTheme({ children }: Props) {
  return (
    <ThemeProvider
      theme={createTheme({
        typography: {
          h1: {
            fontSize: `4.5rem`,
            [breakpoints.down(`sm`)]: {
              fontSize: `4.8rem`,
            },
          },
        },
        palette: {
          primary: {
            main: `#0097a7`,
          },
          secondary: {
            main: `#ff4081`,
          },
          text: {
            primary: `#fff`,
          },
          background: {
            default: `#000`,
          },
        },
        overrides: {
          MuiChip: {
            root: {
              backgroundColor: `rgb(72, 72, 72)`,
              color: `#FFF`,
            },
          },
          MuiTextField: {
            root: {
              borderColor: `rgba(255, 255, 255, 0.3)`,
            },
          },
          MuiInputBase: {
            root: {
              '&, &::before': {
                borderColor: `rgba(255, 255, 255, 0.3)`,
                borderBottomColor: `rgba(255, 255, 255, 0.3) !important`,
              },
            },
          },
          MuiFormLabel: {
            root: {
              color: `rgba(255, 255, 255, 0.3)`,
              '&': {},
            },
          },
          MuiButton: {
            root: {
              minHeight: `3.6rem`,
              minWidth: `8.8rem`,
            },
          },
        },
      })}
    >
      {children}
    </ThemeProvider>
  );
}