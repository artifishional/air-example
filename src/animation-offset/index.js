import { stream } from 'm2';

const getRandomInt = (min, max) => parseInt(Math.random() * (max - min) + min);
let blackTime = 5;
let duration = 20;
let progress = 100;
let timeLeft = duration;
let offset = 1 - blackTime / duration;
export default () => stream(emt => {
  emt([{
    duration,
    timeLeft,
    progress,
    offset,
    blackTime
  }]);

  const animate = () => {
    emt([{},{action:"reset"}]);
    timeLeft = getRandomInt(1, duration);
    progress = parseInt(timeLeft / duration * 100);
    blackTime = getRandomInt(1, 5);
    const params = {
      duration,
      timeLeft,
      progress,
      offset: (1 - blackTime / duration),
      blackTime
    };
    emt([params]);
    setTimeout(animate, timeLeft * 1000)
  };
  setTimeout(animate, timeLeft * 1000)
});