import { RoutesRegistry, RouteWithChildren, RoutingMap } from './API';

const routingRegistry: RouteWithChildren[] = [];

const routingStorage: RoutesRegistry = {
    order: [],
    routes: {},
};

export {
    routingRegistry,
};
