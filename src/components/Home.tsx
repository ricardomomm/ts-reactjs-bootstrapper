import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export class Home extends React.Component<RouteComponentProps<any>, undefined> {
    render() {
        return <h1>Home sweet home!</h1>;
    }
};