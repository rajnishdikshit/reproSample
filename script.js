function showDateRange() {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    if (startDate && endDate) {
        document.getElementById('date-range').innerText = `Selected Date Range: ${startDate} to ${endDate}`;
    } else {
        document.getElementById('date-range').innerText = 'Please select both start and end dates.';
    }
}
