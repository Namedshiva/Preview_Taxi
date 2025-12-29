// Modal Functions
function openBookingModal(vehicleType = '') {
    const modal = document.getElementById('bookingModal');
    const vehicleInput = document.getElementById('vehicleType');

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    if (vehicleType) {
        vehicleInput.value = vehicleType;
    } else {
        vehicleInput.value = 'Any';
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal if clicked outside content
window.onclick = function (event) {
    const modal = document.getElementById('bookingModal');
    if (event.target == modal) {
        closeBookingModal();
    }
}

// Form Submission
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const vehicle = document.getElementById('vehicleType').value;

    // Construct WhatsApp Message
    const message = `Hello City Cab Co., I would like to book a ride.%0a%0a` +
        `*Name:* ${name}%0a` +
        `*Phone:* ${phone}%0a` +
        `*From:* ${from}%0a` +
        `*To:* ${to}%0a` +
        `*Date:* ${date}%0a` +
        `*Vehicle:* ${vehicle}`;

    const whatsappUrl = `https://wa.me/6380638261?text=${message}`;

    // Show Alert
    alert(`Thank you, ${name}! Redirecting to WhatsApp to confirm your booking.`);

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset and Close
    document.getElementById('bookingForm').reset();
    closeBookingModal();
});

// Mobile Menu Toggle
// (Assuming you might want to add click listener if you unhide the toggle button in CSS for mobile)
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}
