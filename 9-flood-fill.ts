function floodFill(image: number[][], sr: number, sc: number, colour: number): number[][] {
    const visitedPixels: number[] = []
    let currentPixelColour = image[sr][sc];
    if(currentPixelColour !== colour) {
        paintPixel(image, sr, sc, currentPixelColour, colour, visitedPixels)
    }
    return image
};

function paintPixel(image: number[][], r: number, c: number, pixelColour, newColour, visitedPixels){
    const pixel = Number(`${r}${c}`)
    if(image[r] === undefined || image[r][c] === undefined || image[r][c] !== pixelColour) return
    image[r][c] = newColour
    visitedPixels.push(pixel)

    paintPixel(image, r + 1, c, pixelColour, newColour, visitedPixels)
    paintPixel(image, r - 1, c, pixelColour, newColour, visitedPixels)
    paintPixel(image, r, c + 1, pixelColour, newColour, visitedPixels)
    paintPixel(image, r, c - 1, pixelColour, newColour, visitedPixels)
}