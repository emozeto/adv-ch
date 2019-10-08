import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

import { getCampaignsFilter, getDataSourcesFilter } from '../selectors';

import './Chart.scss';

const getFilterString = (data, name) =>
  data.length > 0
    ? `${name} ${data.map(item => `"${item}"`).join(' and ')}`
    : `All ${name}s`;

const Chart = React.memo(({ data }) => {
  const dataSources = useSelector(state => getDataSourcesFilter(state));
  const campaigns = useSelector(state => getCampaignsFilter(state));
  const dataSourcesFilterString = getFilterString(dataSources, 'Datasource');
  const campaignsFilterString = getFilterString(campaigns, 'Campaign');
  return (
    <div className="chart-wrapper">
      <h1>
        {dataSourcesFilterString}; {campaignsFilterString}
      </h1>
      <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="Date" />
        <YAxis
          yAxisId="left"
          domain={[0, 'auto']}
          type="number"
          tickCount={6}
        />
        <YAxis yAxisId="right" orientation="right" tickCount={6} />
        <CartesianGrid vertical={false} />
        <Legend />

        <Line
          yAxisId="left"
          type="linear"
          dataKey="Clicks"
          stroke="#8884d8"
          isAnimationActive={false}
          dot={false}
        />
        <Line
          yAxisId="right"
          type="linear"
          dataKey="Impressions"
          stroke="#82ca9d"
          isAnimationActive={false}
          dot={false}
        />
      </LineChart>
    </div>
  );
});

Chart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Date: PropTypes.string,
      Datasource: PropTypes.string,
      Campaign: PropTypes.string,
      Clicks: PropTypes.number,
      Impressions: PropTypes.number,
    })
  ),
};

Chart.defaultProps = {
  data: [],
};

export default Chart;
