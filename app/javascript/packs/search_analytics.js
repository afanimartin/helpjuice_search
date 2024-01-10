document.addEventListener("DOMContentLoaded", function () {
  const searchInputField = document.getElementById("searchInput");
  const searchInputDisplay = document.getElementById("searchDisplay");

  searchInput.addEventListener("input", function (event) {
    const userInputValue = event.target.value;
    searchInputDisplay.textContent = userInputValue;
  });

  searchInputField.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      event.preventDefault();

      const searchContent = event.target.value.trim();

      if (searchContent !== "") {
        createNewSearch(searchContent);

        event.target.value = "";

        searchInputDisplay.textContent = "";
      }
    }
  });

  function createNewSearch(title) {
    const url = "/articles/new";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ title: title }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("There was an error with the response");
        }

        return response.json();
      })
      .then((data) => {
        console.log("New task created: ", data);
      })
      .catch((error) => {
        console.error(`There was a problem creating this search: ${error}`);
      });
  }
});
