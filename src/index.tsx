import React from 'react';
import ReactDOM from 'react-dom';
import Application, {getDemoFiles} from './framework';
import './reset.st.css';
import {FontUpgrade} from 'wix-style-react';

const schema: any = require('./app/schema').default;
const userComponents: any = require('./app/indices/userComponents').default;
const userFunctions: any = require('./app/indices/userFunctions').default;


function render() {
    getDemoFiles({schema}).then(({schema}: { schema: any }) => {
        ReactDOM.render(
            <FontUpgrade>
                <Application
                    schema={schema}
                    userComponents={userComponents}
                    userFunctions={userFunctions}
                />
            </FontUpgrade>,
            document.body.appendChild(document.createElement('div'))
        );
    });
}

if (process.env.NODE_ENV !== 'production') {
    const packageJson = require('../package.json');
    ReactDOM.render(
        <FontUpgrade>
            <Application
                name={packageJson.name}
                version={packageJson.version}
                schema={schema}
                userComponents={userComponents}
                userFunctions={userFunctions}
            />
        </FontUpgrade>,
        document.body.appendChild(document.createElement('div'))
    );
} else {
    render();
}
