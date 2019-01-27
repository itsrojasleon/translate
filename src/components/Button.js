import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit = value => (value === 'english' ? 'Submit' : 'Enviar');
  renderButton = color => (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {value => this.renderSubmit(value)}
      </LanguageContext.Consumer>
    </button>
  );
  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
