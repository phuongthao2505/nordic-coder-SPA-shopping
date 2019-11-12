// types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const SORT_ORDER = 'SORT_ORDER';
// creators

function startFetch() {
  return { type: FETCH_PRODUCTS };
}

export function fetchProducts() {
  return (dispatch /*, getState*/) => {
    // start fetching
    dispatch(startFetch());

    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => {
        if (json.status && json.status.success) {
          return dispatch({ type: RECEIVE_PRODUCTS, payload: json });
        }

        dispatch({ type: FETCH_PRODUCTS_FAILED, error: json.status });
      })
      .catch((error) => {
        dispatch({ type: FETCH_PRODUCTS_FAILED, error });
      });
  };
}

export function sortProducts(sortOrder) {
  return (dispatch /*, getState*/) => {
      return dispatch({ type: SORT_ORDER, payload: sortOrder });
  };
}
