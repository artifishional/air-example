import {stream} from "m2"

export default ({obtain}) => stream((emt, {hook, sweep}) => {

    let data = true;

    setInterval(() => {
        const newData = !data;
        emt([{data: newData}]);
        data = newData;
    }, 500)

});