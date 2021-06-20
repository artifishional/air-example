import { stream } from 'm2';

export default () => stream(emt => {

  const state = {
    number: '0.0',
    color: '#000000'
  };

  emt([state]);

  setInterval(() => {
    state.number = (Math.random() * 10).toFixed(1);
    state.color = '#' + (parseInt(Math.random() * 2 ** 24)).toString(16);
    emt([state, { action: 'color' }]);
  }, 333);

});