import {createSlice} from "@reduxjs/toolkit";

/* for card:
*   pills,
*   title,
*   date,
*   link,
*   img
*
* for details page:
*   details
*
* details layout:
* <h1>An e-commerce site for mostly digital sale</h1>
                <p>This is a functional e-commerce site. Except some parts of the site such as checkout page, I used a frontend package as my frontend. So I
                    didn't code much of a frontend. This project is my first longterm project due to it's database model and backend. By the way, as longterm, I
                    mean 1 or 2 months. This site really helped me to learn the basics of <strong>PHP</strong> and <strong>MySQL</strong>. So I appreciate that.
                    It is also connected to the <i>Admin Panel</i>, I recommend that you check that out too.</p>
                <p>Here's all you need to login as a user:</p>
                <ul>
                    <li>User email · <span>deneme@deneme.com</span></li>
                    <li>User password · <span>123</span></li>
                    <li>And of course, the link · <a target="_blank" class="link-grey" href="https://satis.emirhakan.com">satis.emirhakan.com</a></li>
                </ul>
* */

const workInitalState = [
    {
        pills: ['Admin-Panel', 'PHP', 'MySQL'],
        title: 'Admin Panel for All Types, Including E-commerce [Undone]',
        date: 'June 10, 2021',
        link: '/admin-panel-1',
        img: 'control_panel.svg',
        details: '<h1>What is this Admin Panel ?</h1>\n' +
            '                <p>Whether you run <i>e-commerce, news, blog</i> or even <i>single page brochure</i> websites, it is certain that you will need a panel for your\n' +
            '                    website.\n' +
            '                    Without it, you have to hardcode every page, every little information and every piece of data into it. It doesn\'t even end there, if you\n' +
            '                    have an e-commerce or a blog page, you will need some feedback from the visitors. Such as which posts or items has the most views, how does\n' +
            '                    people react to your articles or which type of items are often added to shop cart. For all these reasons, you need a separate page that is\n' +
            '                    only allowed for admins. And this, <strong>what an admin page is</strong>.</p>\n' +
            '                <p>Here\'s all you need to login as an admin:</p>\n' +
            '                <ul>\n' +
            '                    <li>Admin email · <span>me@emirhakan.com</span></li>\n' +
            '                    <li>Admin password · <span>1</span></li>\n' +
            '                    <li>And of course, the link · <a target="_blank" class="link-grey"\n' +
            '                                                     href="https://satis.emirhakan.com/panel">satis.emirhakan.com/panel</a></li>\n' +
            '                </ul>'
    },
    {
        pills: ['E-commerce', 'PHP', 'MySQL'],
        title: 'E-commerce Site for Mainly Digital Sale [Undone]',
        date: 'June 10, 2021',
        link: '/e-commerce-1',
        img: 'add_to_cart.svg',
        details: '<h1>An e-commerce site for mostly digital sale</h1>\n' +
            '                <p>This is a functional e-commerce site. Except some parts of the site such as the checkout page, I used a frontend package as my frontend. So I\n' +
            '                    didn\'t code much of a frontend. This project is my first longterm-ish project due to it\'s database model and backend. And as longterm, I\n' +
            '                    mean 1 or 2 months. This site really helped me to learn the basics of <strong>PHP</strong> and <strong>MySQL</strong>. So I appreciate that.\n' +
            '                    It is also connected to the <i>Admin Panel</i>, I recommend that you check that out too.</p>\n' +
            '                <p>Here\'s all you need to login as a user:</p>\n' +
            '                <ul>\n' +
            '                    <li>User email · <span>deneme@deneme.com</span></li>\n' +
            '                    <li>User password · <span>123</span></li>\n' +
            '                    <li>And of course, the link · <a target="_blank" class="link-grey" href="https://satis.emirhakan.com">satis.emirhakan.com</a></li>\n' +
            '                </ul>'
    },
];

export const workSlice = createSlice({
    name: 'works',
    initialState: workInitalState,
    reducers: {}
});

export default workSlice.reducer;