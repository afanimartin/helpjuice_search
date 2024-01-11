document.addEventListener("DOMContentLoaded", function () {
  const searchInputField = document.getElementById("searchInputField");

  let delayedSearchInputs = [];

  searchInputField.addEventListener("input", function (event) {
    const userInputValue = event.target.value.trim();

    // clear previously set timeout
    clearTimeout(delayedSearchInputs.timeout);

    // set timeout for one second
    delayedSearchInputs.timeout = setTimeout(function () {
      // store user input in the list after 1 second
      delayedSearchInputs.push(userInputValue);

      console.log("Stored inputs: ", delayedSearchInputs);
    }, 1000);
  });

  searchInputField.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      event.preventDefault();

      // Clear previously set timeout
      clearTimeout(delayedSearchInputs.timeout);

      const finalSearchContent = delayedSearchInputs.pop();

      if (finalSearchContent !== "") {
        createNewSearch(finalSearchContent);

        event.target.value = "";
      }
    }
  });

  function createNewSearch(title) {
    const url = "/searches";

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
        console.log("New search created: ", data);

        window.location.href = `/articles/${data.id}`;
      })
      .catch((error) => {
        console.error(`There was a problem creating this search: ${error}`);
      });
  }
});
