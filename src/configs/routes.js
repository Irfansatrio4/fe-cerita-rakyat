export const routes = {
    LANDING_PAGE: () => {
      return `/`;
    },
    MAPS_PAGE: (ProvinsiId) => {
        return `/maps/?id=${ProvinsiId}`
    },
    LIST_BUDAYA: (idProvinsi) => {
      return `?id=${idProvinsi}`
    },
    DETAIL_BUDAYA: (idBudaya) => {
      return `?idBudaya=${idBudaya}`
    },
    ADMIN: () => {
      return `/admin`;
    },
    LOGIN: () => {
      return `/login`;
    },
    ADD_BUDAYA: () => {
      return `/admin/addBudaya`;
    },
    EDIT_BUDAYA: (id) => {
      return `/admin?editBudaya=true&id=${id}`
    }
  }