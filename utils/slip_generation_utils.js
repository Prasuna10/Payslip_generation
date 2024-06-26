// Checking that the taxTable is having valid entries or not
function isValidTaxTableItem(item) {
    return isValidNumber(item.minSalary) && isValidNumber(item.maxSalary) &&
        isValidNumber(item.baseTax) && isValidNumber(item.taxPerDollar) &&
        item.taxPerDollar < 1;
}

// Checking that the passed input is a positive number or not.
function isValidNumber(value) {
    return typeof value == 'number' && value >= 0;
}

// Checking that the year passed is valid or not
function isValidYear(year) {
    return typeof year == 'number' && year >= 1000 && year <= 9999;
}

// Get the slot of the income tax in which the employee salary falls
function getTaxRate(taxTable, annualSalary) {
    for (let item of taxTable) {
        if ((item.maxSalary == 0 || item.maxSalary >= annualSalary) &&
            item.minSalary <= annualSalary)
            return item;
    }
    return null;
}

// Checking that the passed value is a valid string or not
function isValidString(value) {
    return /^[A-Za-z]+$/.test(value);
}

// Checking if the date passed by user is valid or it is not encountered yet or invalid
function isValidDate(month, year) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Months are 0-indexed, so adding 1 to get the current month

    if (typeof month !== 'number' || typeof year !== 'number') {
        return false; // Month and year should be numbers
    }

    if (year < 1000 || year > currentYear) {
        return false; // Year should be between 1000 and current year
    }

    if (month < 1 || month > 12) {
        return false; // Month should be between 1 and 12
    }

    // If the year is the current year, check if the month has already passed
    if (year === currentYear && month > currentMonth) {
        return false;
    }

    return true; // Date is valid
}

module.exports = {
    isValidDate
};

// Checking if the date passed by user is valid or it is not encountered yet or invalid
function isValidYear(year) {
    const currentYear = new Date().getFullYear();
    return typeof year == 'number' && year >= 1000 && year <= currentYear;
}

// Checking if the user passed in month is valid or not
function isValidMonth(month) {
    const validmonths = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "jan", "feb", "mar", "apr", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    if(typeof month == 'string') {
        month = month.toLowerCase();
    }

    return /^[a-zA-Z0-9]+$/.test(month) && (validmonths.indexOf(month) != -1) || (month>=1 && month<=12);
}

// Exporting all the necessary utiltiy function to be used in calculation verifications
module.exports = {
    isValidTaxTableItem,
    getTaxRate,
    isValidNumber,
    isValidYear,
    isValidString,
    isValidDate,
    isValidMonth
}
