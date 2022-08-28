import * as React from 'react'
import {setTitle} from "../../store/newsSlice";
import {useDispatch} from "react-redux";

export const Weather = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setTitle("Погода"));
        (function (d, w, t, k) {
            function l() {
                if (typeof (w._MIOB_) == 'undefined') {
                    w._MIOB_ = {};
                }
                var m = w._MIOB_[t] = k;
                var s = d.createElement('script');
                m.p = ('https:' == d.location.protocol ? 'https:' : 'http:');
                s.type = 'text/javascript';
                s.async = true;
                s.src = m.p + '//info.meteotrend.com/mt/' + m.t + '.js';
                d.body.appendChild(s);
            }

            if (d.readyState == 'complete') l();
            else {
                if (w.attachEvent) w.attachEvent('onload', l);
                else w.addEventListener('load', l, false);
            }
        })(document, window, '33a407c4c9573f394c0daef1d8175385', {
            t: '4x6',
            sw: {"pname": 1, "ccond": 1, "ccdesc": 1, "dayblock": 1, "tblank": 1},
            css: ['{p}//info.meteotrend.com/mt/{t}.css', '{p}//info.meteotrend.com/cs/d2e6236505ff2d231f9b6db9e1a56828f5a82206.css'],
            source: 'meteotrend'
        });
    }, []);

    return <div
        style={{display: "flex", justifyContent: "center"}}
        id="_MI_33a407c4c9573f394c0daef1d8175385"
    >
        <a href="https://ru.meteotrend.com/">Погода</a>
    </div>
}
