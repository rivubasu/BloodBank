import { axiosInstance } from ".";

export const AddInventory = (data) => {
  return axiosInstance("post", "/api/inventory/add", data);
};

export const GetInventory = () => {
  return axiosInstance("get", "/api/inventory/get");
};

export const GetInventoryWithFilters = (filters, limit) => {
  return axiosInstance("post", "/api/inventory/filter", { filters, limit });
};

export const GetEligibleDonation = (donorId) => {
  console.log("before", donorId);
  return axiosInstance("get", `/api/inventory/donor-info/${donorId}`);
};

export const SentMessage = (data) => {
  return axiosInstance("post", "/api/inventory/sent-message", data);
};
