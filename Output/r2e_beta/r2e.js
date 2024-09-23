async function displayValue() {
    const key = document.getElementById('keyInput').value.trim().toLowerCase();
    const rewardDate = document.querySelector('.reward-date')

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
            const value4 = parseFloat(row.value4);
            const lowerCaseKey = row.key.trim().toLowerCase();
            keyValuePairs[lowerCaseKey] =
`Total Rewards Left: ${value1.toFixed(4)}

Claimable Monthly Rewards: ${value2.toFixed(4)}

inKSTA Required: ${value3.toFixed(4)}

Current inKSTA sent: ${value4.toFixed(4)}`;
        });

        const value = keyValuePairs[key];
        if (value) {
            document.getElementById('output').textContent = value;
            rewardDate.classList.add('display-reward');
        } else {
            document.getElementById('output').textContent = 'No Rewards Available';
        }
    } catch (error) {
        document.getElementById('output').textContent = `Error: ${error.message}`;
    }
}
