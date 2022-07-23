import Api from "../api";

const kebudayaanAPI = {
  getAllBudaya() {
    return Api.get('/budaya');
  },
  getBudayaPage(limit, page) {
    return Api.get(`/budaya/all?limit=${limit}&page=${page}`, {withCredentials: true});
  },
  getListBudaya(provinceId) {
    return Api.get(`/budaya/list/${provinceId}`);
  },
  getDetailBudaya(idBudaya) {
    return Api.get(`/budaya/detail/${idBudaya}`)
  },
  deleteBudaya(idBudaya) {
    return Api.delete(`/budaya/delete/${idBudaya}`)
  },
  addData(data) {
    return Api.post(`/budaya/create`, data)
  },
  editBudaya(idBudaya, data) {
    return Api.put(`/budaya/update/${idBudaya}`, data)
  }
};

export default kebudayaanAPI;