document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInputField");
  const searchResults = document.getElementById("searchResults");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim();

    if (query.length >= 3) {
      fetch(`/searches?query=${encodeURIComponent(query)}`, {
        headers: { Accept: "application/json" },
      })
        .then((response) => response.json())
        .then((data) => displayResults(data));
    } else {
      clearResults();
    }
  });

  function toUrlSafe(title) {
    return title
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "-");
  }

  function displayResults(results) {
    searchResults.innerHTML = "";

    results.forEach((title) => {
      const anchor = document.createElement("a");
      anchor.textContent = title;
      anchor.href = `/articles/${encodeURIComponent(toUrlSafe(title))}`;

      const listItem = document.createElement("li");
      listItem.appendChild(anchor);

      searchResults.appendChild(listItem);
    });
  }

  function clearResults() {
    searchResults.innerHTML = "";
  }
});
