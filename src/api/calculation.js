import Api from "../api";

const calculationAPI = {
  getAllCalculate() {
    return Api.get(`/total${window.location.search}`);
  },
};

export default calculationAPI;
