import { stream2 as stream } from 'm2';

const { random } = Math;

function gen(cb, count = 100, rand = false) {
  cb([{
    blocks: Array
      .from(
        { length: rand ? random() * count + 1 | 0 : count },
        (_, id) => ({
          id,
          type: ['red', 'green', 'blue'][random() * 3 | 0],
          msg: String.fromCharCode(65 + id)
        })
      )
      .sort(() => random() - 0.5)
  }]);
}

export default () => stream
  .fromCbFunc((cb) => {
    gen(cb);
    return setInterval(() => {
      gen(cb);
    }, 2000);
  })
  .store()