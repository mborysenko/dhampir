import { RoutesRegistry, RouteWithChildren } from "../factory/API";
import { forEach } from 'ramda';

export const flattenRoutes = (configuration: RouteWithChildren[]) => {

}
export const createRegistry = (configuration: RouteWithChildren[]): RoutesRegistry => {
    const registry = {
        order: [],
        routes: {},
    }

    const traverseConfiguration =  forEach<RouteWithChildren>((route, ) => {

    })


    return registry;
}