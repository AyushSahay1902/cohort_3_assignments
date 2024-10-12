const clock = () => {
    const date = new Date(); // Create a new Date object every second
    console.log(date.toLocaleTimeString()); // Log the current time
};

setInterval(clock, 1000); // Call clock every second
