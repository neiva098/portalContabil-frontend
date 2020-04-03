export const handleChangeImage = (index, length) => {
    switch (index) {
        case length - 1:
            return 0
        case 0:
            return 0
        default:
            return index + 1
    }
}