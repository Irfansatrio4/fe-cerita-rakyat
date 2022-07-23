import Api from "../api";

const provinsiAPI = {
  getProvinces() {
    return Api.get('/provinsi');
  },
  getAllDataProvinces() {
    return Api.get('/provinsi/totalBudaya');
  }
};

export default provinsiAPI;