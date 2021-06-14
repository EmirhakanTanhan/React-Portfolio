import {createSlice} from "@reduxjs/toolkit";

const linksInitialState = [
    {link: 'https://github.com/EmirhakanTanhan', icon: 'fab fa-github'},
    {link: 'https://dev.to/emirhakantanhan', icon: 'fab fa-dev'},
    {link: 'https://www.linkedin.com/in/emirtanhan-/', icon: 'fab fa-linkedin'},
    {link: 'https://www.instagram.com/emirhakn/?hl=tr', icon: 'fab fa-instagram'},
]

export const linkSlice = createSlice({
    name: 'links',
    initialState: linksInitialState,
    reducers: {}
})

export default linkSlice.reducer;