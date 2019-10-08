import { combineReducers } from 'redux';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  SET_DATA_SOURCE_FILTER,
  SET_CAMPAIGNS_FILTER,
} from './actionTypes';
const data = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_DATA_SUCCESS:
      const { data } = payload;
      return data;
    case FETCH_DATA_FAIL:
      return [];
    case FETCH_DATA_REQUEST:
    default:
      return state;
  }
};

const dataSources = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_DATA_SUCCESS:
      const { data } = payload;
      const dataSources = [...new Set(data.map(item => item.Datasource))];
      return dataSources;
    default:
      return state;
  }
};

const campaigns = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_DATA_SUCCESS:
      const { data } = payload;
      const campaigns = [...new Set(data.map(item => item.Campaign))];
      return campaigns;
    default:
      return state;
  }
};

const isLoading = (state = false, { type }) => {
  switch (type) {
    case FETCH_DATA_REQUEST:
      return true;
    case FETCH_DATA_SUCCESS:
    case FETCH_DATA_FAIL:
      return false;
    default:
      return state;
  }
};

const error = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_DATA_SUCCESS:
    case FETCH_DATA_REQUEST:
      return {};
    case FETCH_DATA_FAIL:
      const { error } = payload;
      return error;
    default:
      return state;
  }
};

const dataSourcesFilter = (state = [], { type, payload }) => {
  switch (type) {
    case SET_DATA_SOURCE_FILTER:
      const { data } = payload;
      return !!data ? data : [];
    default:
      return state;
  }
};

const campaignsFilter = (state = [], { type, payload }) => {
  switch (type) {
    case SET_CAMPAIGNS_FILTER:
      const { data } = payload;
      return !!data ? data : [];
    default:
      return state;
  }
};

const reducer = combineReducers({
  data,
  dataSources,
  campaigns,
  isLoading,
  error,
  dataSourcesFilter,
  campaignsFilter,
});

export default reducer;
