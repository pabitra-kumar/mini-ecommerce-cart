const convertCurrency = (total, currency) => {
    const conversionRates = {
        'EUR': 0.85,
        'GBP': 0.75
    };

    if (conversionRates[currency]) {
        let convertedTotal = total * conversionRates[currency];
        console.log(`Final Total in ${currency}: ${convertedTotal}`);
    } else {
        console.log('Currency not supported.');
    }
};


module.exports = convertCurrency