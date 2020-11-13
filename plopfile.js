module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create a component',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your component name?'
            },
        ],
        actions: [
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/components/{{pascalCase name}}.tsx',
                // Handlebars template used to generate content of new file
                templateFile: 'templates/Component.tsx.hbs',
            },
            {
                type: 'append',
                path: 'src/components/index.ts',
                pattern: `/* COMPONENT EXPORT */`,
                template: `\t{{pascalCase name}},`,
            },
            {
                // Action type 'append' injects a template into an existing file
                type: 'append',
                path: 'src/components/index.ts',
                // Pattern tells plop where in the file to inject the template
                pattern: `/* COMPONENT IMPORT */`,
                template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
            },
        ],
    });
    plop.setGenerator('screen', {
        description: 'Create a screen',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your screen name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/screens/{{pascalCase name}}/index.tsx',
                templateFile:
                    'templates/Screen.index.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/screens/{{pascalCase name}}/styles.ts',
                templateFile:
                    'templates/Screen.styles.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/screens/index.ts',
                templateFile: 'templates/index.screen.ts.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/screens/index.ts',
                pattern: `/* SCREEN IMPORT */`,
                template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/screens/index.ts',
                pattern: `/* SCREEN EXPORT */`,
                template: `\t{{pascalCase name}},`,
            },
        ],
    })
};