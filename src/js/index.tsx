import * as React from 'react';
import * as ReactDom from 'react-dom';
import Calculator from './calculator/CalculatorComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDom.render(
  <MuiThemeProvider>
    <Calculator/>
  </MuiThemeProvider>
  , document.getElementById('calculator')
);
