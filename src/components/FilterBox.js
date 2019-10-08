import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import SelectOption from './SelectOption';
import { useForm } from '../hooks';

import './FilterBox.scss';

const FilterBox = ({ campaigns, dataSources, handleFilterAction }) => {
  const onSubmit = () => {
    handleFilterAction(values);
  };
  const { values, handleChange, handleSubmit } = useForm(onSubmit);

  return (
    <div className="filter-box">
      <h2>Filter dimension values</h2>
      <form onSubmit={handleSubmit}>
        <span>Data source</span>
        <Select
          name="dataSources"
          className="select"
          closeMenuOnSelect={false}
          isMulti
          options={dataSources}
          getOptionValue={option => option}
          getOptionLabel={option => option}
          ignoreAccents={false}
          components={{ Option: SelectOption }}
          value={values.dataSources}
          onChange={value => handleChange('dataSources', value)}
          placeholder="All"
        />
        <span>Campaigns</span>
        <Select
          name="campaigns"
          className="select"
          closeMenuOnSelect={false}
          isMulti
          options={campaigns}
          getOptionValue={option => option}
          getOptionLabel={option => option}
          ignoreAccents={false}
          components={{ Option: SelectOption }}
          value={values.campaigns}
          onChange={value => handleChange('campaigns', value)}
          placeholder="All"
        />
        <button onClick={handleFilterAction} type="submit">
          Apply
        </button>
      </form>
    </div>
  );
};

FilterBox.propTypes = {
  campaigns: PropTypes.arrayOf(PropTypes.string),
  dataSources: PropTypes.arrayOf(PropTypes.string),
  handleFilterAction: PropTypes.func,
};

FilterBox.defaultProps = {
  campaigns: [],
  dataSources: [],
  handleFilterAction: () => {},
};

export default FilterBox;
