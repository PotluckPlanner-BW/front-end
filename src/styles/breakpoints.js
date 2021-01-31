const size = {
    mobile: '320px',
    desktop: '1024px',
    largeScreens: '1200px'
}

const device = {
    mobile: `(min-width: ${size.mobile})`,
    desktop: `(min-width: ${size.desktop})`,
    largeScreens: `(min-width: ${size.largeScreens})`,
}

export default {size, device}