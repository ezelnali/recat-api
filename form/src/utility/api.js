
const fetchUtility = (url, method, body = {}) => {
  const options = {
    method,
  };

  if (method === "POST" || method === "PUT" || method === "DELETE") {
    options.headers = {
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(body);
  }

  return fetch(url, options).then((response) => response.json());
};

const get = (url) => fetchUtility(url, "GET");

const post = (url, body) => fetchUtility(url, "POST", body);

const put = (url, body) => fetchUtility(url, "PUT", body);

const remove = (url, body) => fetchUtility(url, "DELETE", body);

export { get, post, put, remove };