const colors = {
  alto: '#E0E0E0',
  black: '#08080A',
  blue: '#0112FE',
  darkGray: '#16171D',
  lightGray: '#B0AFAF',
  white: '#FFF'
}

const fontFamilies = {
  primary: 'Montserrat',
}

const medias = {
  mobileSmall: '320px',
  mobile: '475px',
  mobileLandscape: '640px',
  tabletSmall: '768px',
  tablet: '992px',
  desktop: '1024px',
  desktopMedium: '1200px'
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export { colors, fontFamilies, medias, variants }
