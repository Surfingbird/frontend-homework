'use strict';

function isCorrectVal(n) {
    let parseVal = parseFloat(n);

    return !isNaN(parseVal) && isFinite(n) && (~~parseVal === parseVal);
}

function tree(depth) {
    const minDepth = 3;

    if (!isCorrectVal(depth) || depth < minDepth) {
        return null;
    }

    let freeSpace = depth - 2;
    let resultParts = [];
    let starsCount = 1;

    for (let i = 1, localFreeSpace = freeSpace; i < depth; i++) {

        resultParts.push(" ".repeat(localFreeSpace) +
            "*".repeat(starsCount) +
            " ".repeat(localFreeSpace) + "\n");

        starsCount += 2;
        --localFreeSpace;
    }

    resultParts.push(" ".repeat(freeSpace) +
        "|" +
        " ".repeat(freeSpace) + "\n");

    return resultParts.join("");

}
