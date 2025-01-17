document.getElementById('rideForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    // Get form values
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const waitTime = document.getElementById('waitTime').value;
  
    // Generate random OTP and driver details
    const otp = Math.floor(100000 + Math.random() * 900000);
    const driverDetails = {
      name: "John Doe",
      car: "Toyota Prius (Green)",
      contact: "123-456-7890",
      rating: "4.8/5"
    };
  
    // Display results
    const rideResults = document.getElementById('rideResults');
    rideResults.innerHTML = `
      <h4>Ride Details</h4>
      <ul>
        <li><strong>From:</strong> ${from}</li>
        <li><strong>To:</strong> ${to}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Wait Time:</strong> ${waitTime} minutes</li>
      </ul>
      <h4>Driver Details</h4>
      <ul>
        <li><strong>Name:</strong> ${driverDetails.name}</li>
        <li><strong>Car:</strong> ${driverDetails.car}</li>
        <li><strong>Contact:</strong> ${driverDetails.contact}</li>
        <li><strong>Rating:</strong> ${driverDetails.rating}</li>
      </ul>
      <p><strong>Your OTP for this ride is:</strong> ${otp}</p>
    `;
  });