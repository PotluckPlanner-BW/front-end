const size = {
    mobile: '0px',
    tablet: '640px',
    desktop: '1024px',
    largeScreens: '1200px'
}

const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
    largeScreens: `(min-width: ${size.largeScreens})`,
}

export default {size, device};