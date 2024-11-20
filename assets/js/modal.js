const modal = document.querySelector('#modal');
const openModal = document.querySelector('.add-movie-button');
const closeButton = document.querySelector('.close'); // Assuming you have a close button


openModal.addEventListener('click', () => {
  console.log("click, add-movie-button");
  if (modal instanceof HTMLDialogElement) {
    modal.showModal();
    console.log("click, add-movie-button");
  }
})

if (modal) {
  closeButton.addEventListener('click', (event) => {
      //if (event.target === modal) {
        modal.close();
      //}
  });
}
//Select the form element
const form = document.getElementById('movieForm');
const confirmationMessage = document.getElementById('confirmation-message');

// Function to store form data in localStorage
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
  
    // Get form data (existing code remains unchanged)
    const title = document.getElementById('title').value.trim();
    const pRating = document.getElementById('personalRating').value.trim();
    const duration = document.getElementById('duration').value.trim();
    const year = document.getElementById('year').value.trim();
    const genre = document.getElementById('genre').value;
    const mpaa = document.getElementById('mpaa').value;
    const watched = document.getElementById('watched').checked;
    const thumbnail = document.getElementById('thumbnail').files[0];
    const notes = document.getElementById('notes').value.trim();

    // Create a FileReader to convert the image file to Base64
    const reader = new FileReader();
    reader.onload = function() {
        const newEntry = {
            title,
            year,
            genre,
            pRating,
            duration,
            mpaa,
            watched,
            thumbnail: reader.result,
            notes
        };

        // Get the existing data array from localStorage or start with an empty array
        const existingData = JSON.parse(localStorage.getItem('userDataArray')) || [];

        // Add the new entry to the array
        existingData.push(newEntry);

        // Save the updated array back to localStorage
        localStorage.setItem('userDataArray', JSON.stringify(existingData));

        // Dispatch a manual update event
        const updateEvent = new Event("manualUpdate");
        document.dispatchEvent(updateEvent);
    };

    // Read the image file as a Data URL (Base64 string)
    if (thumbnail) {
        reader.readAsDataURL(thumbnail);
    }

    // Clear the form and close the modal
    form.reset();
    if (modal instanceof HTMLDialogElement) {
        modal.close();
    }
    window.location.reload(); 
    
    //Reload the page to display the new movie without refreshing the page
    //may not need the render.js file (Cyrl's & Corey's note)
    //Leave the render file just in case we need it and the data grows
    //Limitation: we have not tested it yet with larger data sets
});

//Cyrl's notes if we want to implement the render.js file
// We need to implement this logic here and replace the form submission logic from line 25 with the following code:

// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // Prevent default form submission

//   // Get form data (existing code remains unchanged)
//   const title = document.getElementById('title').value.trim();
//   const pRating = document.getElementById('personalRating').value.trim();
//   const duration = document.getElementById('duration').value.trim();
//   const year = document.getElementById('year').value.trim();
//   const genre = document.getElementById('genre').value;
//   const mpaa = document.getElementById('mpaa').value;
//   const watched = document.getElementById('watched').checked;
//   const thumbnail = document.getElementById('thumbnail').files[0];
//   const notes = document.getElementById('notes').value.trim();

//   // Create a FileReader to convert the image file to Base64
//   const reader = new FileReader();
//   reader.onload = function() {
//       const newEntry = {
//           title,
//           year,
//           genre,
//           pRating,
//           duration,
//           mpaa,
//           watched,
//           thumbnail: reader.result,
//           notes
//       };

//       // Get the existing data array from localStorage or start with an empty array
//       const existingData = JSON.parse(localStorage.getItem('userDataArray')) || [];

//       // Add the new entry to the array
//       existingData.push(newEntry);

//       // Save the updated array back to localStorage
//       localStorage.setItem('userDataArray', JSON.stringify(existingData));

//       // Dispatch a manual update event
//       const updateEvent = new Event("manualUpdate");
//       document.dispatchEvent(updateEvent);
//   };

//   // Read the image file as a Data URL (Base64 string)
//   if (thumbnail) {
//       reader.readAsDataURL(thumbnail);
//   }

//   // Clear the form and close the modal
//   form.reset();
//   if (modal instanceof HTMLDialogElement) {
//       modal.close();
//   }
// });

