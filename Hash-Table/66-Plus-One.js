const plusOne = (digits) => {

    let newDigits = BigInt(digits.join(""));

    newDigits = (newDigits) + 1n

    newDigits = `${newDigits}`

    return newDigits.split("")
};