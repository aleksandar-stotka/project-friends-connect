import { HANDLE_PAGE } from "../actions/actions";


const reducer = (state, action) => {

    switch (action.type) {
        case HANDLE_PAGE:
      if (action.payload === "inc") {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }
      if (action.payload === "dec") {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage };
      }
      // eslint-disable-next-line no-fallthrough
      default:
        throw new Error(`no mathcing "${action.type}" action type`);
    }

   
}





export default reducer