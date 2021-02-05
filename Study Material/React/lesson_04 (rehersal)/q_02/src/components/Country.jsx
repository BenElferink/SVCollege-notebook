import React from 'react';
import FlagCanada from './../img/canada.svg';
import FlagCyprus from './../img/cyprus.svg';
import FlagIsrael from './../img/israel.svg';
import FlagNetherlands from './../img/netherlands.svg';
import FlagSouthAfrica from './../img/south-africa.svg';
import FlagSweden from './../img/sweden.svg';
import FlagUnitedArabEmirates from './../img/united-arab-emirates.svg';
import FlagUnitedStates from './../img/united-states.svg';

function Country(props) {
  const setFlag = () => {
    switch (props.children) {
      case 'Canada':
        return FlagCanada;

      case 'Cyprus':
        return FlagCyprus;

      case 'Israel':
        return FlagIsrael;

      case 'Netherlands':
        return FlagNetherlands;

      case 'South Africa':
        return FlagSouthAfrica;

      case 'Sweden':
        return FlagSweden;

      case 'United Arab Emirates':
        return FlagUnitedArabEmirates;

      case 'United States':
        return FlagUnitedStates;

      default:
        return null;
    }
  };

  return (
    <li>
      <img src={setFlag()} alt='FLAG' />
      {props.children}
    </li>
  );
}

export default Country;
