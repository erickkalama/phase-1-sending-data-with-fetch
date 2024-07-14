// Add your code here
function submitData(userName, userEmail) {
    const formData = {
      name: userName,
      email: userEmail
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(object => {
        appendId(object.id);
      })
      .catch(error => {
        appendError(error.message);
      });
  }
  function appendId(id) {
    document.body.innerHTML += `<p>User ID: ${id}</p>`;
  }
  
  function appendError(errorMessage) {
    document.body.innerHTML += `<p>Error: ${errorMessage}</p>`;
  }
  document.addEventListener('DOMContentLoaded', () => {
    // Example usage when the page loads
    submitData("John Doe", "john.doe@example.com");
  });
      