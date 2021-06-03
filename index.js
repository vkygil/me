Vue.component('Skills', {
    props: ['skillgroup'],
    template: `
<div class="skill-group">
    <div class="float-left-bar"></div>
    <div class="float-right float-right-bar">
    <Skill v-for="item1 in skillgroup.info" v-bind:skill="item1" v-bind:key="item1.id"></Skill>
    </div>
</div>
    `,
})
Vue.component('Apps', {
    props: ['appgroup'],
    template: `
<div class="app-group">
    <div class="float-right float-right-bar">
        <h3 class="app-title">{{appgroup.category}}</h3>
        <div class="float-left-bar"></div>
        <div class="d-flex flex-wrap">

            <App v-for="appitem in appgroup.list" v-bind:appitem="appitem" v-bind:key="appitem.id"></App>
 
        </div>
    </div>
</div>
    `,
})
Vue.component('Skill', {
    props: ['skill'],
    template: `
<div>
    <h3>{{ skill.name }}</h3>
    <div class="progress ">
        <div class="progress-bar" v-bind:style="{width: skill.value+'%'}"></div>
    </div>
</div>
`
})
Vue.component('App', {
    props: ['appitem'],
    template: `
<div class="app-item">
    <p class="mb-0"> <img class="app-icon float-left"
            v-bind:src="appitem.icon" alt="">
        <b>{{appitem.name}}</b><small>{{appitem.description}}</small>
    </p>
</div>
`
})

let PersonalData = Vue.component('PersonalData', {
    props: ['personaldata'],
    template: `
<div class="col-12 sidebarLeft col-sm-3">
 
    <div class="row justify-content-center">
    <div class="col col-6 col-md-12">

        <img class="sb-img profile" src="img.jpg" title="!!!!">
    </div> 
    </div>
    <h5  style="white-space: pre-wrap">{{personaldata.intro}}</h5>
    <h2 class="font-weight-bold">{{personaldata.iam}}</h2>
    <hr>
    <span><i class="bi bi-geo-alt"></i> {{personaldata.location}}</span>
    <br>
    <span><i class="bi bi-translate"></i> {{personaldata.languages}}</span>
    <br>
    <span><i class="bi bi-envelope"></i> {{personaldata.email}}</span>
</div>
            `
})


window.addEventListener("load", function (event) {
    var app7 = new Vue({

        el: '#app',
        data: {
            languageSpa: false,
            skillsList: [
                { id: 1, info: [{ name: "Node.js", value: 75 }, { name: "Vue.js", value: 80 }] },
                { id: 2, info: [{ name: "Java", value: 55 }] },
                { id: 3, info: [{ name: "C#", value: 55 }] },
                { id: 4, info: [{ name: "PHP", value: 45 }] },
            ],

            eng: {
                skills: "Skills",
                leftSidebar: {
                    intro: "Hi,\nI'm Sukhchain Singh ",
                    iam: "I’m a Full Stack Web developer",
                    location: "Barcelona, Spain",
                    languages: "Spanish, English, Punjabi & Hindi",
                    email: "gillv625@gmail.com"
                },
                apps: [
                    {
                        id: 221, category: "Visual Design", list: [
                            { name: "Inkscape ", icon: "https://media.inkscape.org/static/images/inkscape-logo.svg", description: " - Vector graphics software" },
                            { name: "GIMP", icon: "https://www.gimp.org/images/frontpage/wilber-big.png", description: " - Photo editor" },
                        ]
                    },
                    {
                        id: 333, category: "CMS", list: [
                            { name: "Wordpress ", icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg", description: "" },
                            { name: "Strapi  ", icon: "https://i.imgur.com/5NwKNet.png", description: "" },
                        ]
                    },
                    {
                        id: 2242, category: "Other development tools", list: [
                            { name: "Git", icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", description: "" },
                            { name: "bootstrap.css", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png", description: "" },
                            { name: "Chrome DevTools", icon: "https://i.imgur.com/tCWBEaM.png", description: "" },
                            { name: "Docker", icon: "https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Moby-logo.png?itok=sYH_JEaJ", description: "" },
                            { name: "Visual Studio IDE & Code", icon: "https://user-images.githubusercontent.com/674621/71187801-14e60a80-2280-11ea-94c9-e56576f76baf.png", description: "" },
                        ]
                    },
                ],
            },
            spa: {
                skills: "Habilidades",
                leftSidebar: {
                    intro: "Hola,\nSoy Sukhchain Singh",
                    iam: "Soy un desarrollador web Full Stack",
                    location: "Barcelona, España",
                    languages: "Español, Inglés, Punjabi, Hindi",
                    email: "gillv625@gmail.com"
                },
                apps: [
                    {
                        id: 221, category: "Diseño visual", list: [
                            { name: "Inkscape ", icon: "https://media.inkscape.org/static/images/inkscape-logo.svg", description: " - Software de gráficos vectoriales" },
                            { name: "GIMP", icon: "https://www.gimp.org/images/frontpage/wilber-big.png", description: " - Edición de imágenes" },
                        ]
                    },
                    {
                        id: 333, category: "CMS", list: [
                            { name: "Wordpress ", icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg", description: "" },
                            { name: "Strapi  ", icon: "https://i.imgur.com/5NwKNet.png", description: "" },
                        ]
                    },
                    {
                        id: 2242, category: "Otras herramientas de desarrollo", list: [
                            { name: "Git", icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", description: "" },
                            { name: "bootstrap.css", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png", description: "" },
                            { name: "Chrome DevTools", icon: "https://i.imgur.com/tCWBEaM.png", description: "" },
                            { name: "Docker", icon: "https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Moby-logo.png?itok=sYH_JEaJ", description: "" },
                            { name: "Visual Studio IDE & Code", icon: "https://user-images.githubusercontent.com/674621/71187801-14e60a80-2280-11ea-94c9-e56576f76baf.png", description: "" },
                        ]
                    },
                ],
            }

        }
        ,
        methods: {
            langChanged: function () {
                document.getElementById("langSwitchSlider").classList.toggle('slider-eng');
                document.getElementById("langSwitchSlider").classList.toggle('slider-spa');

            }
        }
    })
    document.getElementById("langSwitchSlider").classList.toggle('slider-eng');
    document.getElementById("app").classList.toggle('d-none');
});

var lastScrool = document.documentElement.scrollTop;
function handleWorkClick(num) {
    document.getElementById("workItemModal" + num).classList.toggle('item_open');
    // document.body.style.top = `-${window.scrollY}px`;

    // document.body.style.overflow = "hidden"

    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
}
function handleWorkClose(num) {
    // lastScrool = document.documentElement.scrollTop;
    // // document.getElementById("workItemFull").style.display = "none"
    // document.getElementById("workItemModal").classList.toggle('item_open');
    // document.body.style.overflowY = "auto"
    // // window.scrollTo(0, lastScrool); 
    // const scrollY = document.body.style.top;
    // document.body.style.position = '';
    // document.body.style.top = '';
    // window.scrollTo(0, parseInt(scrollY || '0') * -1);

    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById("workItemModal" + num).classList.toggle('item_open');


}
window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

var color,
    letters = '0123456789ABCDEF'.split('')
function AddDigitToColor(limit) {
    color += letters[Math.round(Math.random() * limit)]
}
function GetRandomColor() {
    color = '#'
    AddDigitToColor(5)
    for (var i = 0; i < 5; i++) {
        AddDigitToColor(15)
    }
    return color
}

// document.querySelectorAll("div").forEach(function (el) {
//     console.log(el);
//     el.style.border = "1px solid rgb(128 128 128 / 10%) "
//     // el.style.border = "1px solid " + GetRandomColor()
// })
