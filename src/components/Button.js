import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  renderSubmit = value => (value === 'english' ? 'Submit' : 'Enviar');
  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}
export default Button;
