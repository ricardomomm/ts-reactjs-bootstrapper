import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Hello } from './Hello';

export class About extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <h1>About</h1>
                <Hello
                    compiler={this.props.match.params.compiler || 'Typescript'}
                    framework={this.props.match.params.framework || 'React'}
                />
            </div>
        );
    }
};