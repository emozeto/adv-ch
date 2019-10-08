import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import './App.scss';

import { Chart, FilterBox } from './components';
import { getDataSources, getCampaigns, getFilteredData } from './selectors';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => getFilteredData(state));
  const dataSources = useSelector(state => getDataSources(state));
  const campaigns = useSelector(state => getCampaigns(state));

  const fetchData = useCallback(() => dispatch(actions.fetchDataRequest()), [
    dispatch,
  ]);

  const handleDataSourceFilterChange = useCallback(
    data => dispatch(actions.setDataSourceFilter(data)),
    [dispatch]
  );

  const handleCampaignsFilterChange = useCallback(
    data => dispatch(actions.setCampaignsFilter(data)),
    [dispatch]
  );

  const handleFilterAction = useCallback(
    ({ campaigns, dataSources }) => {
      handleCampaignsFilterChange(campaigns);
      handleDataSourceFilterChange(dataSources);
    },
    [handleCampaignsFilterChange, handleDataSourceFilterChange]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="wrapper">
      <div className="container info">
        <span>
          - Select zero to N <i>Datasources</i>
        </span>
        <span>
          - Select zero to N <i>Campaigns</i>
        </span>
        <span className="hint">(where zero means "All")</span>
        <span>
          Hitting "Apply", filters the chart to show timeseries for both{' '}
          <i>Clicks</i> and <i>Impressions</i> for given <i>Datasources</i> and{' '}
          <i>Campaigns</i>
        </span>
      </div>
      <div className="container">
        <FilterBox
          dataSources={dataSources}
          campaigns={campaigns}
          handleFilterAction={handleFilterAction}
        />
        <Chart data={data} />
      </div>
    </div>
  );
}

export default App;
