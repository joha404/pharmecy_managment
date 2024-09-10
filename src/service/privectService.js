import { axiosPrivate } from "./axiosInstance";

export default {
  getVendors() {
    return axiosPrivate.get("/private/vendor");
  },

  addVendor(payload) {
    return axiosPrivate.post("/private/vendor", payload);
  },

  editVendor(payload) {
    return axiosPrivate.put("/private/vendor/" + payload._id, payload);
  },

  deleteVendor(id) {
    return axiosPrivate.delete("/private/vendor/" + id);
  },

  getDrugs() {
    return axiosPrivate.get("/private/drug");
  },

  addDrug(payload) {
    return axiosPrivate.post("/private/drug", payload);
  },

  editDrug(payload) {
    return axiosPrivate.put("/private/drug/" + payload._id, payload);
  },

  deleteDrug(id) {
    return axiosPrivate.delete("/private/drug/" + id);
  },

  searchDrug(searchString) {
    return axiosPrivate.post("/private/drug/search", {
      searchString: searchString,
    });
  },
  sellDrug(payload) {
    return axiosPrivate.post("/private/sell", payload);
  },
  getHistory() {
    return axiosPrivate.get("/private/sell");
  },
  deleteHistory(id) {
    return axiosPrivate.delete("/private/sell/" + id);
  },
  getOverview() {
    return axiosPrivate.get("/private/overview");
  },
  getAccountSettings() {
    return axiosPrivate.get("/private/account-settings");
  },

  updateAccountSettings(payload) {
    return axiosPrivate.put("/private/account-settings", payload);
  },
  getWebsiteSettings() {
    return axiosPrivate.get("/private/website-settings");
  },

  updateWebsiteSettings(payload) {
    return axiosPrivate.put("/private/website-settings", payload);
  },
};
