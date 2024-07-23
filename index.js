const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo (up to 3 characters):',
        validate: input => input.length <= 3 || 'Text must be up to 3 characters long.',
    },
    {
        type: 'input', 
        name: 'textColor',
        message: 'Enter color (keyword or hex):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square'],   
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hex):',      
    },
];

inquirer.prompt(questions).then(({ text, textColor, shape, shapeColor }) => {
    let shapeObj;

    switch (shape) {
        case 'Circle':
            shapeObj = new Circle(shapeColor);
            break;
        case 'Triangle':
            shapeObj = new Triangle(shapeColor);
            break;
        case 'Square':
            shapeObj = new Square(shapeColor);
            break;
    }

    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeObj.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;

    fs.writeFileSync('examples/logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
});
