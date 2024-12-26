// import axios from 'axios';
// import { API_BASE } from './constants';

// /**
//  * Generalized API request handler.
//  * 
//  * @param {Object} params - Request parameters.
//  * @param {Function} dispatch - Redux dispatch function.
//  * @param {Function} pendingAction - Action to dispatch when request starts.
//  * @param {Function} successAction - Action to dispatch on success.
//  * @param {Function} errorAction - Action to dispatch on error.
//  * @returns {Promise<any>} - API response data.
//  */
// const apiRequest = async ({
//   method = 'GET',
//   url,
//   data = null,
//   headers = {},
//   dispatch,
//   pendingAction,
//   successAction,
//   errorAction,
// }) => {
//   try {
//     dispatch(pendingAction());
//     const response = await axios({
//       method,
//       url: `${API_BASE}/${url}`,
//       data,
//       headers,
//     });

//     if (response.error) {
//       throw new Error(response.error);
//     }

//     dispatch(successAction(response.data, data)); // Pass `data` for POST/PUT context
//     return response.data;
//   } catch (error) {
//     const errorResponse = error.response || { message: 'Unknown error occurred' };
//     dispatch(errorAction(errorResponse));
//     throw error; // Optionally rethrow for additional handling
//   }
// };

// /* Specialized API Helpers */

// /** Helper for GET requests */
// export const apiGET = (dispatch, pendingAction, successAction, errorAction, url, headers) => {
//   return apiRequest({ method: 'GET', url, headers, dispatch, pendingAction, successAction, errorAction });
// };

// /** Helper for POST requests */
// export const apiPOST = (dispatch, pendingAction, successAction, errorAction, url, variables, headers) => {
//   return apiRequest({ method: 'POST', url, data: variables, headers, dispatch, pendingAction, successAction, errorAction });
// };

// /** Helper for POST requests with formData */
// export const apiFormDataPOST = (dispatch, pendingAction, successAction, errorAction, url, formData, headers) => {
//   return apiRequest({ method: 'POST', url, data: formData, headers, dispatch, pendingAction, successAction, errorAction });
// };

// /** Helper for DELETE requests */
// export const apiDELETE = (dispatch, pendingAction, successAction, errorAction, url, id, headers) => {
//   return apiRequest({ method: 'DELETE', url: `${url}/${id}`, headers, dispatch, pendingAction, successAction, errorAction });
// };
import axios from 'axios';
import { API_BASE } from './constants';

/* Helper for API GET requests */
export const apiGET = (
  dispatch,
  pendingAction,
  successAction,
  errorAction,
  url,
  headers
) => {
  dispatch(pendingAction());
  axios
    .get(`${API_BASE}/${url}`, { headers })
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      dispatch(successAction(res.data));
      return res.data;
    })
    .catch(error => {
      dispatch(errorAction(error.response));
    });
};

/* Helper for API POST requests */
export const apiPOST = (
  dispatch,
  pendingAction,
  successAction,
  errorAction,
  url,
  variables,
  headers
) => {
  dispatch(pendingAction());
  axios
    .post(`${API_BASE}/${url}`, variables, { headers })
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      dispatch(successAction(res.data, variables));
      return res.data;
    })
    .catch(error => {
      dispatch(errorAction(error.response));
    });
};

/* Helper for API POST requests with formData body */
export const apiFormDataPOST = (
  dispatch,
  pendingAction,
  successAction,
  errorAction,
  url,
  formData,
  headers
) => {
  dispatch(pendingAction());
  axios
    .post(`${API_BASE}/${url}`, formData, { headers })
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      dispatch(successAction(res.data));
      return res.data;
    })
    .catch(error => {
      dispatch(errorAction(error.response));
    });
};

/* Helper for API DELETE requests */
export const apiDELETE = (
  dispatch,
  pendingAction,
  successAction,
  errorAction,
  url,
  id,
  headers
) => {
  dispatch(pendingAction());
  axios
    .delete(`${API_BASE}/${url}/${id}`, { headers })
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      dispatch(successAction(id));
      return res.data;
    })
    .catch(error => {
      dispatch(errorAction(error.response));
    });
};