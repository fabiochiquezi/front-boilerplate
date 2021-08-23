export const getDevice = (): string => {
    let device = ''
    const windowsWidth = window.innerWidth

    if (windowsWidth < 576) device = 'mobile'
    if (windowsWidth > 576 && windowsWidth < 992) device = 'tablet'
    if (windowsWidth > 992) device = 'desktop'
    if (windowsWidth > 1200) device = 'big desktop'

    return device
}
