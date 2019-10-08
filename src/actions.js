import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  SET_DATA_SOURCE_FILTER,
  SET_CAMPAIGNS_FILTER,
} from './actionTypes';

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = data => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: { data },
  };
};

export const fetchDataFail = error => {
  return {
    type: FETCH_DATA_FAIL,
    payload: { error },
  };
};

export const setDataSourceFilter = data => {
  return {
    type: SET_DATA_SOURCE_FILTER,
    payload: { data },
  };
};

export const setCampaignsFilter = data => {
  return {
    type: SET_CAMPAIGNS_FILTER,
    payload: { data },
  };
};
