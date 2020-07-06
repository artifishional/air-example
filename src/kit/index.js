import { stream2 as stream } from 'm2';

const { random } = Math;

export default () => stream
  .fromCbFunc((cb) => {
    return setInterval(() => {
      cb([{
        blocks: Array
          .from(
            { length: random() * 100 + 1 | 0 },
            (_, id) => ({
              id,
              type: ['red', 'green', 'blue'][random() * 3 | 0],
              msg: String.fromCharCode(65 + id)
            })
          )
          .sort(() => random() - 0.5)
      }]);
    }, 2000);
  })
  .store()