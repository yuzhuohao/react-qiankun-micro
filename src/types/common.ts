import { RouteComponentProps } from 'react-router-dom';
import H from 'history';
import { FunctionComponent } from 'react';


export interface SubRouteComponent extends FunctionComponent {
    routes: RouteConfig[];
}

export interface RouteConfig {
    path: string;
    component: FunctionComponent<PageProps>;
    exact?: boolean;
    children?: RouteConfig[]
}

export interface Location extends H.Location {
    // query: { [key: string]: string };
}
export interface PageProps extends RouteComponentProps {
    location: Location;
    routes?: Array<RouteConfig>
}

