import {createSlice} from "@reduxjs/toolkit";

const metaTagsInitialState = [
    {
        page: 'home',
        title: 'Emirhakan Tanhan | Home',
        description: 'Hello, I\'m Emir 👋, and I love web development. I\'m new, yet confident in web design and 💻 building.'
    },
    {
        page: 'about',
        title: 'Emirhakan Tanhan | About',
        description: 'I\'m a software engineering student Istanbul, Turkey. If you watch closely, you can find me playing games and writing codes. If not any of those, i may be shopping ties 👔 online.'
    },
    {
        page: 'portfolio',
        title: 'Emirhakan Tanhan | Portfolio',
        description: 'I must warn you, I\'m a rookie 👶. My code and logic might not be so correct, and by the manuel. But aside that, feel free to play with demos.'
    },
    {
        page: 'contact',
        title: 'Emirhakan Tanhan | Contact',
        description: 'Whether you are interested to do business 💼 with me, want to chat ✋ about some of my content, or just want to hang out 🍻, I am happy to talk to you.'
    },
]

export const metaTagsSlice = createSlice({
    name: 'metaTags',
    initialState: metaTagsInitialState,
    reducers: {}
});

export default metaTagsSlice.reducer;