import { createSelector } from 'reselect';

const getData = state => state.data;
export const getCampaignsFilter = state => state.campaignsFilter;
export const getDataSourcesFilter = state => state.dataSourcesFilter;
export const getDataSources = state => state.dataSources;
export const getCampaigns = state => state.campaigns;

export const getFilteredData = createSelector(
  getData,
  getCampaignsFilter,
  getDataSourcesFilter,
  (data, campaignFilter, dataSourceFilter) => {
    return data.filter(item => {
      return (
        (!campaignFilter.length || campaignFilter.includes(item.Campaign)) &&
        (!dataSourceFilter.length || dataSourceFilter.includes(item.Datasource))
      );
    });
  }
);
