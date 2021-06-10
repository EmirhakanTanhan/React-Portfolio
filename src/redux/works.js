import {createSlice} from "@reduxjs/toolkit";

const workInitalState = [
    {
        pills: ['Panel', 'PHP', 'MySQL'],
        title: 'Admin panel for all kind of websites, including e-commerce [Undone]',
        date: 'June 10, 2021',
        link: '/admin-panel-1',
        img: 'control_panel.svg'
    },
    {
        pills: ['E-commerce', 'PHP', 'MySQL'],
        title: 'E-commerce site for mainly digital sales [Undone]',
        date: 'June 10, 2021',
        link: '/e-commerce-1',
        img: 'add_to_cart.svg'
    },
];

export const workSlice = createSlice({
    name: 'works',
    initialState: workInitalState,
    reducers: {}
});

export default workSlice.reducer;