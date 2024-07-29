async function displayValue() {
    const key = document.getElementById('keyInput').value.trim().toLowerCase(); 
    
    try {
        // CSV
        const response = await fetch('r2e_data.csv?v=' + new Date().getTime(), {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
            },
        });
        const csvData = await response.text();    
    
        const results = Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,  
        });
        
        const keyValuePairs = {};
        results.data.forEach(row => {
            const value1 = parseFloat(row.value1);
            const value2 = parseFloat(row.value2);
            const value3 = parseFloat(row.value3);
            const lowerCaseKey = row.key.trim().toLowerCase();
            keyValuePairs[lowerCaseKey] = `Total Reward: ${value1.toFixed(4)}\n\nEligible (Monthly) Reward: ${value2.toFixed(4)}\n\nAmount of inKSTA to send: ${value3.toFixed(4)}`;
        });
    
        const value = keyValuePairs[key];
        if (value) {
            document.getElementById('output').textContent = value;
        } else {
            document.getElementById('output').textContent = 'No Rewards Available';
        }
    } catch (error) {
        document.getElementById('output').textContent = `Error: ${error.message}`;
    }
}
