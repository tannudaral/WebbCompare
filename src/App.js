import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const app = () => {
    return (
        <div>
            <img src='https://ik.imagekit.io/xpgjqzrcn7x/logo_WCImBtI0r.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657772191272'></img>
            <h1>WebbCompare</h1>
            <h2><a href='https://en.wikipedia.org/wiki/Carina_Nebula'>Carina Nebula</a></h2>
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="https://ik.imagekit.io/xpgjqzrcn7x/carina_2800_WLgB-lT0h.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657766074176" alt="Hubble" />}
                itemTwo={<ReactCompareSliderImage src="https://ik.imagekit.io/xpgjqzrcn7x/STScI-01G7WCK1PJEM49E118GEG0Q729_VmPxBsx1l.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657765906725" alt="Webb" />}
            />
            <h2><a href='https://en.wikipedia.org/wiki/SMACS_J0723.3%E2%80%937327'>Deep Field</a></h2>
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="https://ik.imagekit.io/xpgjqzrcn7x/deep_field_2800_HcZq-2AhC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657766074124" alt="Hubble" />}
                itemTwo={<ReactCompareSliderImage src="https://ik.imagekit.io/xpgjqzrcn7x/deep_field_2800_1__xzg9hNWB4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657767372765" alt="Webb" />}
            />
            <h2><a href="https://en.wikipedia.org/wiki/NGC_3132">Southern Ring Nebula</a></h2>
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="https://ik.imagekit.io/xpgjqzrcn7x/southern_nebula_2800_q7hPAtCZK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657767301626" alt="Hubble" />}
                itemTwo={<ReactCompareSliderImage src="https://ik.imagekit.io/xpgjqzrcn7x/STScI-01G79RF5F5TPZJSDT3Y640XNQ1_yuLgH8pqA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657767729664" alt="Webb" />}
            />
            <h2><a href='https://en.wikipedia.org/wiki/Stephan%27s_Quintet'>Stephan's Quintet</a></h2>
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="https://ik.imagekit.io/xpgjqzrcn7x/stephans_quintet_2800_1__0OnOaD_r_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657767459525" alt="Hubble" />}
                itemTwo={<ReactCompareSliderImage src="https://ik.imagekit.io/xpgjqzrcn7x/stephans_quintet_2800_QA9badnXo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657767461544" alt="Webb" />}
            />
        <footer>
            <p>For further information, refer to Webb Space Telescope &nbsp; <a href='https://webbtelescope.org/news/first-images/gallery'>First Images' Website</a>.</p>
        </footer>
        </div>
    );
}

export default app;