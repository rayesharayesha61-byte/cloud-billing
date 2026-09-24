import API from "./api";

export const getBusiness = async () => {
  const response = await API.get("/business");
  return response.data;
};

export const saveBusiness = async (data) => {
  const response = await API.put(
    "/business",
    data
  );

  return response.data;
};