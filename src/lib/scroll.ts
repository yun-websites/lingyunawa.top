export const scrollToBySelector = (selector: string) => {
    const element = document.querySelector(selector)
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
    } else {
        console.error(`Element with selector ${selector} not found`)
    }
}

export const scrollToByOffset = (offset: number) => {
    window.scrollTo({ top: offset, behavior: "smooth" })
}
