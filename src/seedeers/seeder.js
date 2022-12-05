const db = require('../utils/database');
const initModels = require('../models/init.models');

const Categories = require('../models/categories.models');
const Videos = require('../models/videos.models');
const Courses = require('../models/courses.models');
const Users = require('../models/users.models');
const UsersCourses = require('../models/usersCourses.models');

initModels();
const courses = [
    {
        title: 'Garra y pasion',
        description: 'Curso 0 a experto de futbol',
        instructor: 'Roberto Carlos',
        videoId: 1,
        categoryId: 1,
    },
    {
        title: 'Desarrollo web',
        description: 'curso basico de desarrollo web',
        instructor: 'MiduDev',
        videoId: 1,
        categoryId: 1,
    },
    {
        title: 'Matematicas avanzadas',
        description: 'Curso experto de matematicas',
        instructor: 'David Zambrano',
        videoId: 1,
        categoryId: 2,
    }
];

const users = [
    {
        firstName: "Eduardo",
        lastName: "Colmenares",
        password: "1234",
        email: "EduCol@gmail.com",
    },
    {
        firstName: "Gabriela",
        lastName: "Rueda",
        password: "4321",
        email: "GabiRueda@gmail.com",
    }
];

const usersCourses = [
    {
        userId: 1,
        courseId: 1
},
    {
        userId: 2,
        courseId: 2
    }
];

const categories = [
    { name: 'Deporte' },
    { name: 'Programacion' },
    { name: 'Ciencia' },
    { name: 'etc' }
];

const videos = [
    {
        title: 'Aprendiendo a Codear',
        url: 'http://youtube.com'
    },
    {
        title: 'Entrenamiento Muscular',
        url: 'http://youtube.com'
    },
    {
        title: 'Integrales',
        url: 'http://youtube.com'
    }
];


db.sync({ force: true })
    .then(() => {
        setTimeout(() => {
            console.log('Insertando');
            users.forEach((user) => Users.create(user));
        }, 10000)
    })
    .then(() => {
        setTimeout(() => {
            courses.forEach((cuorse) => Courses.create(cuorse));
        }, 15000)
    })
    .then(() => {
        setTimeout(() => {
            usersCourses.forEach((usercourse) => UsersCourses.create(usercourse));
        }, 20000)
    })
    .then(() => {
        setTimeout(() => {
            videos.forEach((video) => Videos.create(video));
        }, 8000)
    })
    .then(() => {
        setTimeout(() => {
            categories.forEach((category) => Categories.create(category));
        }, 5000)
    })




