import {createSlice} from "@reduxjs/toolkit";

const blogInitialState = [
    {
        pills: ['Beginner', 'PHP', 'MySQL'],
        title: 'Figuring out a verification system via email link',
        date: 'May 31, 2021',
        link_blank: 'https://dev.to/emirhakantanhan/figuring-out-a-verification-system-via-email-link-59p1',
        img: 'email_2.svg'
    },
];

export const blogSlice = createSlice({
    name: 'blogs',
    initialState: blogInitialState,
    reducers: {}
});

export default blogSlice.reducer;