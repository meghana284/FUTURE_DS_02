// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('twitterChart').getContext('2d');
    const twitterChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan 25', 'Feb 1', 'Feb 8', 'Feb 15', 'Feb 22'], // Example dates
            datasets: [{
                label: 'Followers',
                data: [180, 195, 205, 200, 209], // Example data
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                fill: false
            },
            {
                label: 'Tweets',
                data: [400, 420, 435, 450, 446], // Example data
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: {
                        color: '#ccc'
                    },
                    grid: {
                        color: 'rgba(200, 200, 200, 0.1)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ccc'
                    },
                    grid: {
                        color: 'rgba(200, 200, 200, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ccc'
                    }
                }
            }
        }
    });
});