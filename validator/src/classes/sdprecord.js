import {SDPMedia} from './sdpmedia.js';
import {SDPTiming} from './sdptiming.js';
import {SDPSession} from './sdpsession.js';

export class SDPRecord{
    
    dosomething(){
        let media = new SDPMedia();
        let session = new SDPSession();
        let timing = new SDPTiming();

        media.dosomething();
        session.dosomething();
        timing.dosomething();

        console.log("In SDPRecord");
    }

}