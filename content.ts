const jsonData = {
  val1: "XXX",
  val2: "YYY",
  val3: "ZZZ"
};

// Create an array of values
const valuesArray = Object.values(jsonData);

// Index to keep track of the next value to paste
let currentIndex = 0;

// Listen for the "CTRL + V" event
document.addEventListener('keydown', function (event) {
  if ((event.metaKey || event.ctrlKey) && event.key === 'v') {
    // Prevent the default paste behavior
    event.preventDefault();

    // Get the next value from the array
    const nextValue = valuesArray[currentIndex];

    // Set the client clipboard with the next value
    navigator.clipboard.writeText(nextValue)
      .then(() => {
        console.log('Value copied to clipboard:', nextValue);

        // Simulate a paste event
        document.execCommand('paste');

        // Increment the index for the next value
        currentIndex = (currentIndex + 1) % valuesArray.length;
      })
      .catch((err) => {
        console.error('Error copying to clipboard:', err);
      });
  }
});
