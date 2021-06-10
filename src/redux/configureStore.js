import {configureStore} from "@reduxjs/toolkit";

import workReducer from './works';
import blogReducer from './blogs';

export default configureStore({
    reducer: {
        work: workReducer,
        blog: blogReducer
    }
});