const httpRequest = <T>(request: RequestInfo): Promise<T> => {
  return fetch(request)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Error!");
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export default httpRequest;
