interface Result {
  total: number;
}

const loader = async (): Promise<Result> => {
  const response = await fetch("https://camp-api.deco.cx/events", {
    method: "GET",
    headers: {
      "x-api-key": "camp09",
    },
  }).then((r) => r.json());

  return response;
};

export default loader;
