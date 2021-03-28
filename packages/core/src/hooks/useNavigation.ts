import { useContext, useEffect, useState } from 'react';
import { ExtensionContext } from '../extensions';
import { NavigationNode, PATH_SEPARATOR, useRoutesForPath } from '../routing';

export type NavigationLevel = number;

export const useNavigation = (path: string | string[] = '', expand = false): NavigationNode[] => {
    const { version } = useContext(ExtensionContext);
    const [nodes, setNodes] = useState<NavigationNode[]>([]);

    const routes = useRoutesForPath(path, expand);

    useEffect(() => {
        setNodes(routes.map(({ path: routePath, navigation}) => {
            return {
                label: navigation?.label,
                path: [path, routePath!].join(PATH_SEPARATOR).replace(RegExp(`\\${PATH_SEPARATOR}+`, 'gi'), PATH_SEPARATOR),
                params: navigation?.params,
            } as NavigationNode;
        }));
    }, [version, setNodes, routes]);

    return nodes;
}
