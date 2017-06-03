import React from 'react';
import PropTypes from 'prop-types';
import './ImportanceDropdown.css';
import { Dropdown } from 'semantic-ui-react';

const propTypes = {
  children: PropTypes.element.isRequired,
  handleChangeTaskImportance: PropTypes.func.isRequired
};

const ImportanceDropdown = (props) => {
  const importanceColors = ['black', 'red', 'orange', 'green', 'blue'];

  const importanceColorsDropdown = importanceColors.map((color, i) => (
    <Dropdown.Item
      id={color}
      key={i}
      text={color[0].toUpperCase() + color.slice(1)}
      onClick={() => props.handleChangeTaskImportance(color, i)}
    />
  ));

  return (
    <Dropdown icon={props.children}>
      <Dropdown.Menu>
        {importanceColorsDropdown}
      </Dropdown.Menu>
    </Dropdown>
  );
};

ImportanceDropdown.propTypes = propTypes;

export default ImportanceDropdown;
