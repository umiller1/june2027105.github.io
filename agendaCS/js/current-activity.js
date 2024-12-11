document.addEventListener('DOMContentLoaded', () => {
    let activityName = document.querySelector('#activity-name');
    let activities = document.querySelectorAll('#breakdown li');

    activities.forEach(activity => {
        activity.addEventListener('click', () => {
            // Get the span inside the clicked li and update the activityName
            let span = activity.querySelector('span'); // Adjust this selector if necessary
            if (span) {
                activityName.textContent = span.textContent.trim();
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const activityType = document.getElementById('activity-type');
    const spans = activityType.querySelectorAll('span');

    activityType.addEventListener('click', () => {
        // Find the index of the currently active span
        const activeIndex = Array.from(spans).findIndex(span => span.classList.contains('active'));

        // Remove the 'active' class from the current span
        spans[activeIndex].classList.remove('active');

        // Calculate the index of the next span and add the 'active' class
        const nextIndex = (activeIndex + 1) % spans.length;
        spans[nextIndex].classList.add('active');
    });
});
