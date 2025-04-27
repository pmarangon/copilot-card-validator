function validateCreditCard(cardNumber) {
    const cardNumberStr = cardNumber.toString();

    // Define the rules for each bandeira
    const bandeiras = [
        { name: "Visa", regex: /^4\d{12}(\d{3})?$/ },
        { name: "MasterCard", regex: /^(5[1-5]\d{14}|2(2[2-9]|[3-6]\d|7[01])\d{12})$/ },
        { name: "Elo", regex: /^(4011|4312|4389|45|50|6277|6362|650|651|655)\d*$/ },
        { name: "American Express", regex: /^3[47]\d{13}$/ },
        { name: "Discover", regex: /^(6011|65|64[4-9])\d*$/ },
        { name: "Hipercard", regex: /^6062\d*$/ },
        { name: "Dinners Club", regex: /^(30[0-5]|36|38)\d{11}$/ },
        { name: "En Route", regex: /^(2014|2149)\d{11}$/ },
        { name: "JCN", regex: /^(3528|3589)\d{12}$/ },
        { name: "Voyager", regex: /^8699\d{11}$/ },
        { name: "Aura", regex: /^50\d{14}$/ }
    ];

    // Check the card number against each bandeira
    for (const bandeira of bandeiras) {
        if (bandeira.regex.test(cardNumberStr)) {
            return bandeira.name;
        }
    }

    return "Unknown Bandeira";
}

// Example usage:
const cardNumber = 4111111111111111; // Replace with the card number to test
const bandeira = validateCreditCard(cardNumber);
console.log(`Bandeira: ${bandeira}`);