const convertor = (columnHeading) => {
    let ans = 0;

    columnHeading = columnHeading.toUpperCase()
    for (let i = 0; i < columnHeading.length; i++) {
        ans *= 26; // because A-Z ---> 1-26
        ans += (columnHeading.charCodeAt(i) - ("A".charCodeAt(0) - 1))
    }

    return ans
}

// Output BA = 53
// Output A = 1
// Output AAA = 703

console.log("Answer", convertor("AAA"))