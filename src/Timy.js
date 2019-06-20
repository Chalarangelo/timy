import React from 'react';
import formatDuration from './formatDuration';
import useInterval from './useInterval';
import formatConfig from './formatConfig';

const Timy = ({
  date = new Date(),
  config = formatConfig
}) => {
  const [__date, __setDate] = React.useState(date);
  const [value, setValue] = React.useState(new Date() - __date);

  useInterval(() => {
    setValue(new Date() - __date);
  }, 5000);

  return formatDuration(value, config);
};

export default Timy;