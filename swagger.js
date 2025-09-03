const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
    info: {
        version: "1.0.2",
        title: "MINHA API ANIME v#1",
        description: "Some description..."
    },
    servers: [
        {
            url: 'http://localhost:3200'
        }
    ],
    components: {
        schemas: {
            someBody: {
                $id: "1",
                $title: "yu-gi-oh",
                $description: "Anime de cartas",
                $rating: 4.5,
                $imageUrl: "http://image.com"
            },
            someResponse: {
                name: "Jhon Doe",
                age: 29,
                diplomas: [
                    {
                        school: "XYZ University",
                        year: 2020,
                        completed: true,
                        internship: {
                            hours: 290,
                            location: "XYZ Company"
                        }
                    }
                ]
            },
            someEnum: {
                '@enum': [
                    "red",
                    "yellow",
                    "green"
                ]
            }
        },
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index');           // Your project's root file
});