import { stream2 as stream } from 'm2';
import adaptive from "./adaptive"
import kit from "./kit"
import keyframes from "./keyframes"
import customPathname from "./custom-pathname"

export default {

    intl: ['intl', {
        id: 'intl',
        source: () =>
          stream.fromCbFunc((cb) => {
              cb({ });
          }).store(),
    }],
    keyframes,
    owner() {
        return stream( (emt, { hook } ) => {

            emt([{}]);

            hook.add( ( { key, event } ) => {

                event.log();

            } );

        } );

    },
    lazy() {
        return stream.fromCbFunc((cb) => {
            setTimeout(() => {
                cb([{ lazydata: 777 }])
            }, 1000);
        }).store();
    },
    ['fade-in-out']() {
        return stream.fromCbFunc((cb) => {
            cb([{ tee: 1 }]);
            setTimeout(() => cb([{ tee: 0 }]), 6000);
            setTimeout(() => cb([{ tee: 1 }]), 9000);
            setTimeout(() => cb([{ tee: 0 }]), 12000);
        });
    },
    adaptive,
    kit,
    ["custom-pathname"]: customPathname

}