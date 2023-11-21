function width(w) {
    document.getElementsByTagName('table')[0].style.width=w+'px'
}

function borderSpacing(bs) {
    document.getElementsByTagName('table')[0].style.borderSpacing=bs+'px'
}

function backgroundColor(bc) {
    document.getElementsByTagName('table')[0].style.backgroundColor=bc
}

function reset() {
    document.getElementsByTagName('table')[0].style='width: 200px; border-spacing: 2px; background-color: yellow'
}