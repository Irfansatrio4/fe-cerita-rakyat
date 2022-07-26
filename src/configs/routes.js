export const routes = {
  LANDING_PAGE: () => {
    return `/`;
  },
  MAPS_PAGE: (ProvinsiId) => {
    return `/maps/?id=${ProvinsiId}`;
  },
  LIST_BUDAYA: (idProvinsi) => {
    return `?id=${idProvinsi}`;
  },
  DETAIL_BUDAYA: (idBudaya) => {
    return `/detail-budaya/?idBudaya=${idBudaya}`;
  },
  ADMIN: () => {
    return `/admin`;
  },
  LOGIN: () => {
    return `/login`;
  },
  ADD_BUDAYA: () => {
    return `/admin/tambah-data`;
  },
  EDIT_BUDAYA: (id) => {
    return `/admin?editBudaya=true&id=${id}`;
  },
};
