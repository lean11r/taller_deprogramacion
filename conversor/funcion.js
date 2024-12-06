function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    
    if (isNaN(inputValue)) {
        document.getElementById('result').innerText = "Por favor, ingresa un valor numérico.";
        return;
    }

    const conversionFactors = {
        km: 1000000, 
        m: 1000,     
        cm: 10,      
        mm: 1        
    };

    const valueInMicrometers = inputValue * conversionFactors[fromUnit];
    
    const convertedValue = valueInMicrometers / conversionFactors[toUnit];

    document.getElementById('result').innerText =  `Resultado: ${convertedValue} ${toUnit} `;
}