import {
  FETCH_PRODUCTS,
  RECEIVE_PRODUCTS,
  FETCH_PRODUCTS_FAILED,
  SORT_ORDER,
} from '../actions/products-actions';

const initialState = {
  isFetching: false,
  total: 0,
  page: 0,
  pageSize: 0,
  items: [],
  sortOrder: 0,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_PRODUCTS: {
      const { status, data } = action.payload;

      return {
        ...state,
        isFetching: false,
        total: status.total,
        page: status.page,
        pageSize: status.pageSize,
        items: data,

      };
    }

    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isFetching: false,
      };

    case SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };
    default:
      return state;
  }
}
