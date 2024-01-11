import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("createNewSearch", () => {
  it("calls fetch with the correct arguments and returns the data on success", async () => {
    const mockData = { message: "Search created successfully" };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const result = await createNewSearch("how are you?");

    expect(fetchMock).toHaveBeenCalledWith("/searches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ title: "how are you?" }),
    });

    expect(result).toEqual(mockData);
  });
});

describe("toUrlSafe", () => {
  it("converts a string to URL-safe format", () => {
    const input = "how are you?";
    const result = toUrlSafe(input);
    expect(result).toEqual("how-are-you-");
  });
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
      console.log(data);
      window.location.href = `/articles/${encodeURIComponent(
        toUrlSafe(data.title)
      )}`;
    })
    .catch((error) => {});
}

function toUrlSafe(title) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "-");
}
