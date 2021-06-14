import {configureStore} from "@reduxjs/toolkit";

import workReducer from './works';
import blogReducer from './blogs';
import metaTagReducer from './meta-tags';
import linkReducer from './links';

export default configureStore({
    reducer: {
        work: workReducer,
        blog: blogReducer,
        metaTag: metaTagReducer,
        link: linkReducer,
    },
    devTools: false,
});