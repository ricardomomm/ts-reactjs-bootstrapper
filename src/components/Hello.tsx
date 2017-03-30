import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface IHelloProps {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<IHelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}