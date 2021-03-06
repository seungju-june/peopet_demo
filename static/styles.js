import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'react-autosuggest__container': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'alignSelf': 'center',
    'backgroundColor': '#004ca4',
    'screen&&<w768': {
      'marginTop': [{ 'unit': 'px', 'value': 60 }]
    }
  },
  'input-wrapper': {
    'display': 'flex'
  },
  'input-wrapper react-autosuggest__input': {
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffffff' }],
    'borderRadius': '4px',
    'textAlign': 'center',
    'outline': 'none',
    'marginTop': [{ 'unit': 'px', 'value': 50 }],
    'screen&&<w425': {
      'height': [{ 'unit': 'px', 'value': 38 }],
      'fontSize': [{ 'unit': 'px', 'value': 18 }],
      'marginTop': [{ 'unit': 'px', 'value': 0 }]
    }
  },
  'input-wrapper search-img': {
    'top': [{ 'unit': 'px', 'value': 60 }],
    'right': [{ 'unit': '%H', 'value': 0.07 }],
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 60 }],
    'screen&&<w1024': {
      'top': [{ 'unit': 'px', 'value': 10 }],
      'right': [{ 'unit': 'px', 'value': 0 }],
      'width': [{ 'unit': 'px', 'value': 25 }]
    },
    'screen&&<w768': {
      'top': [{ 'unit': 'px', 'value': 10 }],
      'right': [{ 'unit': 'px', 'value': 0 }],
      'width': [{ 'unit': 'px', 'value': 25 }]
    },
    'screen&&<w425': {
      'top': [{ 'unit': '%V', 'value': 0.2 }],
      'right': [{ 'unit': '%H', 'value': 0.01 }]
    }
  },
  'input-wrapper react-autosuggest__input::placeholder': {
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 34 }],
    'opacity': '0.5',
    'screen&&<w1024': {
      'fontSize': [{ 'unit': 'px', 'value': 30 }]
    },
    'screen&&<w500': {
      'fontSize': [{ 'unit': 'px', 'value': 20 }]
    }
  },
  'input-wrapper-breeder': {
    'display': 'flex',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'input-wrapper-breeder react-autosuggest__input__breeder': {
    'width': [{ 'unit': 'px', 'value': 860 }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffffff' }],
    'borderRadius': '4px',
    'textAlign': 'center',
    'outline': 'none',
    'marginTop': [{ 'unit': 'px', 'value': 8 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'screen&&<w768': {
      'marginTop': [{ 'unit': 'px', 'value': -40 }]
    },
    'screen&&<w425': {
      'height': [{ 'unit': 'px', 'value': 44 }],
      'fontSize': [{ 'unit': 'px', 'value': 15 }]
    }
  },
  'input-wrapper-breeder search-img__breeder': {
    'top': [{ 'unit': 'px', 'value': 20 }],
    'right': [{ 'unit': '%H', 'value': 0.08 }],
    'position': 'absolute',
    'screen&&<w768': {
      'top': [{ 'unit': 'px', 'value': -25 }],
      'right': [{ 'unit': '%H', 'value': 0.05 }]
    },
    'screen&&<w425': {
      'top': [{ 'unit': 'px', 'value': -30 }],
      'right': [{ 'unit': '%H', 'value': 0.1 }],
      'width': [{ 'unit': 'px', 'value': 25 }]
    }
  },
  'input-wrapper-breeder react-autosuggest__input__breeder::placeholder': {
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'opacity': '0.5',
    'screen&&<w1024': {
      'fontSize': [{ 'unit': 'px', 'value': 22 }]
    },
    'screen&&<w400': {
      'fontSize': [{ 'unit': 'px', 'value': 20 }]
    }
  },
  'react-autosuggest__input--focused': {
    'outline': 'none'
  },
  'react-autosuggest__input--open': {
    'borderBottomLeftRadius': '0',
    'borderBottomRightRadius': '0'
  },
  'react-autosuggest__suggestions-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'none'
  },
  'react-autosuggest__suggestions-container--open': {
    'display': 'block',
    'position': 'absolute',
    'zIndex': '1',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'backgroundColor': '#ffffff',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'borderRadius': '3px',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#979797' }],
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }],
    'screen&&<w768': {
      'position': 'absolute',
      'fontSize': [{ 'unit': 'px', 'value': 10 }],
      'zIndex': '5'
    }
  },
  'react-autosuggest__suggestions-list': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyleType': 'none'
  },
  'react-autosuggest__suggestion': {
    'cursor': 'pointer',
    'textAlign': 'left'
  },
  'no-suggestions': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'backgroundColor': '#ffffff',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'borderRadius': '3px',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#979797' }],
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }],
    'screen&&<w768': {
      'position': 'absolute',
      'fontSize': [{ 'unit': 'px', 'value': 10 }],
      'zIndex': '5'
    }
  }
});
