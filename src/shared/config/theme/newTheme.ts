import {
  createTheme,
  Palette,
  PaletteOptions,
  ThemeOptions,
} from '@mui/material/styles'
import localFont from 'next/font/local'
import { NextFont } from 'next/dist/compiled/@next/font'
import { CSSProperties } from 'react'

const ManropeMedium: NextFont = localFont({
  src: '../fonts/Manrope-Medium.ttf',
  display: 'swap',
})

const ManropeRegular: NextFont = localFont({
  src: '../fonts/Manrope-Regular.ttf',
  display: 'swap',
})

const ManropeSemiBold: NextFont = localFont({
  src: '../fonts/Manrope-SemiBold.ttf',
  display: 'swap',
})

interface MyPalette {
  gray: {
    700: string
    600: string
    500: string
    400: string
    300: string
    250: string
    200: string
  }
  general: {
    primary: string
    secondary: string
    black: string
    white: string
    red: string
    green: string
  }
  buttonPrimary: {
    hover: string
    clicked: string
    disabled: string
  }
  buttonSecondary: {
    hover: string
    clicked: string
    disabled: string
  }
}

declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Palette extends MyPalette {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteOptions extends Partial<MyPalette> {}
}

declare module '@mui/material/styles' {
  // interface Typography {
  //   xs: CSSProperties
  //   boldXs: CSSProperties
  // }

  interface TypographyVariants {
    xs: CSSProperties
    boldXs: CSSProperties
  }
  interface TypographyVariantsOptions {
    xs: CSSProperties
    boldXs: CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    xs: true
    boldXs: true
  }
}

declare module '@mui/material/Slider' {
  interface SliderPropsColorOverrides {
    filter: true
  }
  interface SliderClasses {
    filter: true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    black: true
    grey: true
  }

  interface ButtonClasses {
    black: string
    grey: string
  }
}

const designPaletteLight: {
  gray: Palette['gray']
  general: Palette['general']
  buttonPrimary: Palette['buttonPrimary']
  buttonSecondary: Palette['buttonSecondary']
} = {
  gray: {
    700: '#454545',
    600: '#6A6A6A',
    500: '#808080',
    400: '#BFBFBF',
    300: '#E0E0E0',
    250: '#F2F2F2',
    200: '#F5F5F5',
  },
  general: {
    primary: '#79856D',
    black: '#000000',
    white: '#FFFFFF',
    red: '#EE3D3D',
    secondary: '#EFF0ED',
    green: '#3DEE84',
  },
  buttonSecondary: {
    hover: '#E4E7E2',
    clicked: '#E9ECE8',
    disabled: '#F2F3F1',
  },
  buttonPrimary: {
    hover: '#9EAE8E',
    clicked: '#B1BEA5',
    disabled: '#BCC2B6',
  },
}

const designPaletteDark: {
  gray: Palette['gray']
  general: Palette['general']
  buttonPrimary: Palette['buttonPrimary']
  buttonSecondary: Palette['buttonSecondary']
} = {
  gray: {
    700: '#454545',
    600: '#6A6A6A',
    500: '#808080',
    400: '#363636',
    300: '#2B2B2B',
    250: '#1A1A1A',
    200: '#131313',
  },
  general: {
    primary: '#79856D',
    black: '#FFFFFF',
    white: '#0D0D0D',
    red: '#F05555',
    secondary: '#1E201B',
    green: '#55F093',
  },
  buttonSecondary: {
    hover: '#272B24',
    clicked: '#20251F',
    disabled: '#1A1A1A',
  },
  buttonPrimary: {
    hover: '#9EAE8E',
    clicked: '#B1BEA5',
    disabled: '#3F423C',
  },
}

const lightPalette: PaletteOptions = {
  mode: 'light',
  text: {
    primary: designPaletteLight.general.black,
    secondary: designPaletteLight.gray['500'],
  },
  background: {
    default: designPaletteLight.general.white,
    // paper: designPaletteLight.general.white,
  },
  primary: {
    main: designPaletteLight.general.primary,
    light: designPaletteLight.buttonPrimary.clicked,
    dark: designPaletteLight.buttonPrimary.hover,
  },
  secondary: {
    main: designPaletteLight.general.secondary,
    light: designPaletteLight.buttonSecondary.clicked,
    dark: designPaletteLight.buttonSecondary.hover,
  },
  error: {
    main: designPaletteLight.general.red,
  },
  gray: designPaletteLight.gray,
  general: designPaletteLight.general,
  buttonPrimary: designPaletteLight.buttonPrimary,
  buttonSecondary: designPaletteLight.buttonSecondary,
}

const darkPalette: PaletteOptions = {
  mode: 'dark',
  text: {
    primary: designPaletteDark.general.black,
    secondary: designPaletteDark.gray['500'],
  },
  background: {
    default: designPaletteDark.general.white,
    // paper: designPaletteLight.general.white,
  },
  primary: {
    main: designPaletteDark.general.primary,
    light: designPaletteDark.buttonPrimary.clicked,
    dark: designPaletteDark.buttonPrimary.hover,
  },
  secondary: {
    main: designPaletteDark.general.secondary,
    light: designPaletteDark.buttonSecondary.clicked,
    dark: designPaletteDark.buttonSecondary.hover,
  },
  error: {
    main: designPaletteDark.general.red,
  },
  gray: designPaletteDark.gray,
  general: designPaletteDark.general,
  buttonPrimary: designPaletteDark.buttonPrimary,
  buttonSecondary: designPaletteDark.buttonSecondary,
}

const baseThemeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 720,
      lg: 960,
      xl: 1240,
    },
  },
  typography: {
    fontFamily: "'Manrope', 'Helvetica', 'Arial', sans-serif",
    // XL: {
    //   fontFamily: "'Manrope', 'Helvetica', 'Arial', sans-serif",
    //   fontSize: "2.75rem",
    //   lineHeight: "48px",
    //   fontWeight: 700,
    // },
    h1: {
      fontFamily: "'Manrope', 'Helvetica', 'Arial', sans-serif",
      fontSize: '1.75rem',
      lineHeight: '34.72px',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: "'Manrope,' 'Helvetica', 'Arial', sans-serif",
      fontSize: '1.25rem',
      lineHeight: '24.8px',
      fontWeight: 500,
    },
    body1: {
      fontFamily: "'Manrope', 'Helvetica', 'Arial', sans-serif",
      fontSize: '1rem',
      lineHeight: '19.84px',
      fontWeight: 700,
    },
    button: {
      fontFamily: "'Manrope', 'Helvetica', 'Arial', sans-serif",
      fontSize: '0.75rem',
      lineHeight: '16.38px',
      textTransform: 'uppercase',
      fontWeight: 600,
    },
    caption: {
      fontFamily: "'Manrope', 'Helvetica', 'Arial', sans-serif",
      fontSize: '0.8125rem',
      lineHeight: '13px',
      fontWeight: 500,
    },
    xs: {
      fontFamily: "'Manrope', 'Helvetica', 'Arial', sans-serif",
      fontSize: '0.6875rem',
      lineHeight: '15px',
      fontWeight: 500,
    },
    boldXs: {
      fontFamily: "'Manrope', 'Helvetica', 'Arial', sans-serif",
      fontSize: '0.6875rem',
      lineHeight: '15px',
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `@font-face {
              font-family: 'Manrope';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Manrope'), local('Manrope-Regular'), url(${ManropeRegular}) format('truetype');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
            @font-face {
              font-family: 'Manrope';
              font-style: normal;
              font-display: swap;
              font-weight: 600;
              src: local('Manrope), local('Manrope-Medium'), url(${ManropeMedium}) format('truetype');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
            @font-face {
              font-family: 'Manrope';
              font-style: normal;
              font-display: swap;
              font-weight: 700;
              src: local('Manrope'), local('Manrope-SemiBold'), url(${ManropeSemiBold}) format('truetype');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }`,
    },
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ theme }) => theme.unstable_sx({}),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => theme.unstable_sx({}),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            fontSize: '1rem',
            borderRadius: '12px',
            padding: '8px 12px',
            '&:active': {
              boxShadow: 'none',
            },
          }),
        filled: ({ theme }) =>
          theme.unstable_sx({
            '&:hover': {
              backgroundColor: 'primary.main',
            },
          }),
        outlined: ({ theme }) =>
          theme.unstable_sx({
            color: 'text.primary',
            borderColor: 'secondary.main',
            '&:active': {
              '.MuiTouchRipple-root': {
                display: 'none',
              },
            },
          }),
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            color: 'gray.300',
            '& .MuiSlider-track': {
              backgroundColor: 'general.black',
            },
            '& .MuiSlider-thumb': {
              backgroundColor: 'general.white',
              borderRadius: '50%',
              border: `3px solid ${theme.palette.general.black}`,
              '&:active': {
                boxShadow: '0px 0px 0px 10px rgba(121, 133, 109, 0.16);',
              },
            },
          }),
      },
    },
    MuiButton: {
      defaultProps: {
        color: 'primary',
        disableRipple: true,
        variant: 'contained',
        disableElevation: true,
        size: 'large',
        fullWidth: true,
      },
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            fontFamily: '',
            width: '100%',
            '.MuiButton-endIcon svg': {
              fill: 'text.primary',
            },
            '.MuiButton-startIcon svg': {
              fill: 'text.primary',
            },
          }),
        sizeLarge: ({ theme }) =>
          theme.unstable_sx({
            height: '58px',
            fontSize: '0.75rem',
            borderRadius: 0,
          }),
        sizeMedium: ({ theme }) =>
          theme.unstable_sx({
            height: '42px',
            fontSize: '0.75rem',
            borderRadius: 0,
          }),
        sizeSmall: ({ theme }) =>
          theme.unstable_sx({
            height: '26px',
            fontSize: '0.75rem',
            borderRadius: 0,
          }),
        containedPrimary: ({ theme }) =>
          theme.unstable_sx({
            px: '18px',
            py: 1.5,
            color: 'white',
            backgroundColor: 'general.primary',
            '&:hover': {
              backgroundColor: 'buttonPrimary.hover',
            },
            '&:active': {
              backgroundColor: 'buttonPrimary.clicked',
            },
            '&:disabled': {
              color: 'white',
              backgroundColor: 'buttonPrimary.disabled',
            },
            '.MuiCircularProgress-root': {
              color: 'white',
            },
          }),
        containedSecondary: ({ theme }) =>
          theme.unstable_sx({
            px: '18px',
            py: 1.5,
            color: 'primary.main',
            backgroundColor: 'secondary.main',
            '&:hover': {
              backgroundColor: 'buttonSecondary.hover',
            },
            '&:active': {
              backgroundColor: 'buttonSecondary.clicked',
            },
            '&:disabled': {
              color: 'white',
              backgroundColor: 'buttonSecondary.disabled',
            },
          }),
        black: ({ theme }) =>
          theme.unstable_sx({
            px: '18px',
            py: 1.5,
            color: 'general.white',
            backgroundColor: 'general.black',
            '&:hover': {
              backgroundColor: 'gray.700',
            },
            '&:active': {
              backgroundColor: 'gray.500',
            },
            '&:disabled': {
              color: 'white',
              backgroundColor: 'gray.400',
            },
          }),
        grey: ({ theme }) =>
          theme.unstable_sx({
            px: '18px',
            py: 1.5,
            color: 'black',
            backgroundColor: 'gray.300',
            '&:hover': {
              backgroundColor: 'gray.250',
            },
            '&:active': {
              backgroundColor: 'gray.250',
            },
            '&:disabled': {
              backgroundColor: 'gray.200',
            },
          }),
        outlinedPrimary: ({ theme }) =>
          theme.unstable_sx({
            '.MuiCircularProgress-root': {
              color: 'red',
            },
          }),
        textPrimary: ({ theme }) =>
          theme.unstable_sx({
            padding: '2px 0',
            backgroundColor: 'transparent',
            '&.MuiButton-sizeLarge': {
              fontSize: '0.875rem',
              fontWeight: 600,
              height: '58px',
            },
            '&.MuiButton-sizeMedium': {
              fontSize: '0.875rem',
              fontWeight: 600,
              height: '42px',
            },
            '&.MuiButton-sizeSmall': {
              fontSize: '0.875rem',
              fontWeight: 600,
              height: 'auto',
            },
            '&:hover': {
              color: 'buttonPrimary.hover',
              backgroundColor: 'transparent',
            },
            '&:active': {
              color: 'buttonPrimary.clicked',
            },
            '&:disabled': {
              color: 'buttonPrimary.disabled',
            },
          }),
        textSecondary: ({ theme }) =>
          theme.unstable_sx({
            width: 'fit-content',
            padding: '2px 0',
            color: 'black',
            backgroundColor: 'transparent',
            '&.MuiButton-sizeLarge': {
              fontSize: '0.875rem',
              fontWeight: 600,
              height: '58px',
            },
            '&.MuiButton-sizeMedium': {
              fontSize: '0.875rem',
              fontWeight: 600,
              height: '42px',
            },
            '&.MuiButton-sizeSmall': {
              fontSize: '0.875rem',
              fontWeight: 600,
              height: 'auto',
            },
            '&:hover': {
              color: 'buttonSecondary.hover',
            },
            '&:active': {
              color: 'buttonSecondary.clicked',
            },
            '&:disabled': {
              color: 'buttonSecondary.disabled',
            },
            '.MuiCircularProgress-root': {
              color: 'black',
            },
          }),
      },
    },
    MuiTextField: {
      defaultProps: {
        // fullWidth: true,
        // size: "medium",
      },
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            input: {
              color: 'text.primary',
            },
            '.MuiFormHelperText-root': {
              margin: '6px 0 0 14px',
              color: 'text.secondary',
            },
            '&.standardText': {
              input: {
                p: 0,
              },
              '.MuiInput-root:before': {
                display: 'none',
              },
              '.MuiInput-root:after': {
                display: 'none',
              },
              '.MuiFormLabel-root': {
                display: 'none',
              },
              '.MuiFormHelperText-root': {
                margin: '6px 0 0 0',
                color: 'text.secondary',
              },
              '.Mui-error': {
                color: 'error.main',
              },
            },
          }),
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: ({ theme }) =>
            theme.unstable_sx({
              fieldset: {
                border: '1px solid',
                borderColor: 'gray.400',
                borderRadius: '4px',
                padding: '15px 16px',
              },
              '.MuiInputLabel-outlined': {
                transform: 'translate(20px, 16px) scale(1)',
                '&.Mui-focused': {
                  transform: 'translate(20px, -9px) scale(0.75)',
                },
                '&.Mui-error': {
                  color: 'error.main',
                },
              },
              '.MuiInputBase-root': {
                color: 'text.primary',
                backgroundColor: 'transparent',
                borderRadius: '4px',
                '& > textarea': {
                  color: 'text.primary',
                  resize: 'vertical',
                },
                '&:hover': {
                  '& > fieldset': {
                    borderColor: 'gray.400',
                  },
                },
                '& > input': {
                  height: 'auto',
                  padding: '15px 16px',
                  '&::placeholder': {
                    color: 'gray.400',
                    opacity: 1,
                  },
                },
                '&.Mui-focused': {
                  '& > fieldset': {
                    border: '1px solid',
                    borderColor: 'gray.400',
                  },
                },
                '&.Mui-disabled': {
                  backgroundColor: 'disabled',
                  '& > fieldset': {
                    border: '1px solid',
                    borderColor: 'gray.300',
                  },
                  '&:hover': {
                    '& > fieldset': {
                      borderColor: 'gray.400',
                    },
                  },
                },
                '&.Mui-error': {
                  '&.Mui-focused': {
                    '& > fieldset': {
                      borderColor: 'error.main',
                    },
                  },
                  '&:hover': {
                    '& > fieldset': {
                      borderColor: 'error.main',
                    },
                  },
                },
              },
            }),
        },
        {
          props: { variant: 'filled' },
          style: ({ theme }) =>
            theme.unstable_sx({
              '.MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error):before':
                {
                  borderBottom: `1px solid ${theme.palette.primary.light}`,
                },
              '.MuiInputBase-root': {
                color: 'text.primary',
                backgroundColor: 'transparent',

                '& > input': {
                  height: 'auto',
                  padding: '19.5px 32px',
                  '&::placeholder': {
                    color: 'gray.400',
                    opacity: 1,
                  },
                },
                '&.Mui-focused': {
                  backgroundColor: 'transparent',
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                },
                '&.Mui-disabled': {
                  backgroundColor: 'transparent',
                },
              },
              '.Mui-error': {
                color: 'error.main',
              },
            }),
        },
      ],
    },
  },
}

const light: ThemeOptions = {
  ...baseThemeOptions,
  palette: lightPalette,
}

const dark: ThemeOptions = {
  ...baseThemeOptions,
  palette: darkPalette,
}

export const darkTheme = createTheme(dark)

export const lightTheme = createTheme(light)
