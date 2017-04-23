import React from 'react';
import './ImportanceDropdown.css';
import { Dropdown } from 'semantic-ui-react';

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
    <Dropdown
      icon={props.children}
      size={props.size}
    >
      <Dropdown.Menu>
        {importanceColorsDropdown}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ImportanceDropdown;
