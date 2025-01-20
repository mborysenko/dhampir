import { createRegistry } from './createRegistry';
import { RoutesRegistry, RoutingArea } from '../factory';
import { useId } from "react";

describe('createRegistry', () => {
    it('should create flat data structure with normalized routes', () => {
        const storesRouteId = useId();
        const adidasRouteId = useId();
        const nikeRouteId = useId();

        const result = createRegistry([
            {
                id: storesRouteId,
                path: '/stores/*',
                element: <div>Store</div>,
                routes: [
                    {
                        id: adidasRouteId,
                        path: 'adidas',
                        element: <div>Adidas Store</div>
                    },
                    {
                        id: nikeRouteId,
                        path: 'nike',
                        element: <div>Nike Store</div>,
                    }
                ]
            },
           /* {
                id: rootRouteId,
                path: '/!*',
                routes: [
                    {
                        id: 'route:root:wallmart',
                        path: 'wallmart/!*',
                        rendering: [
                            {
                                area: RoutingArea.TOP,
                                element: <div></div>,
                            },
                            {
                                area: RoutingArea.BODY,
                                element: <div>Welcome to Angler Online Store!</div>,
                            }
                        ],
                        routes: [
                            {
                                id: 'route:root:wallmart:products',
                                path: 'products',
                                rendering: [
                                    {
                                        area: RoutingArea.TOP,
                                        element: <div>Product List Top Panel</div>
                                    },
                                    {
                                        area: RoutingArea.BODY,
                                        element: <div>Welcome to Product List!</div>,
                                    }
                                ],
                                routes: [
                                    {
                                        id: 'route:root:wallmart:products:details',
                                        path: ':id',
                                        rendering: [
                                            {
                                                area: RoutingArea.TOP,
                                                element: <div></div>,
                                            },
                                            {
                                                area: RoutingArea.BODY,
                                                element: <div>Welcome to Angler Online Store!</div>,
                                            }
                                        ],
                                    }
                                ],
                            }
                        ],
                        navigation: {
                            label: 'Online Store'
                        },
                    }
                ],
            },*/
        ])

        expect(result).toEqual({
            order: [
                {
                    routeId: 'route:store',
                    leafIds: [],
                },
                {
                    routeId: 'route:root',
                    leafIds: [
                        'route:root:wallmart'
                    ],
                },
            ],
            routes: {
                [storesRouteId]: {
                    routeId: storesRouteId,
                    path: '/stores/*',
                    leafIds: [
                        'route:root:wallmart'
                    ],
                    rendering: [],
                    parentId: '',
                    rawData: {
                        id: 'route:store',
                        path: '/store/*',
                    },
                    prefixPath: '',
                    caseSensitive: true,
                },
                [adidasRouteId]: {
                    routeId: adidasRouteId,
                    path: 'adidas',
                    leafIds: [],
                    rendering: [],
                    parentId: storesRouteId,
                    rawData: {
                        id: adidasRouteId,
                        path: 'adidas',
                        element: <div>Adidas Store</div>
                    },
                    prefixPath: '/stores'
                },
                [nikeRouteId]: {
                    routeId: nikeRouteId,
                    path: 'nike',
                    leafIds: [],
                    rendering: [],
                    parentId: storesRouteId,
                    rawData: {
                        id: nikeRouteId,
                        path: 'nike',
                        element: <div>Nike Store</div>,
                    },
                    prefixPath: '/stores'
                }
               /* [rootRouteId]: {
                    routeId: rootRouteId,
                    path: '/!*',
                    leafIds: [
                        'route:root:wallmart'
                    ],
                    rendering: [],
                    nodeId: '',
                    rawData: {
                        id: 'route:root',
                        path: '/!*',
                    },
                    prefixPath: '',
                    caseSensitive: true,
                },
                'route:root:wallmart': {
                    routeId: 'route:root:wallmart',
                    path: 'walmart/!*',
                    leafIds: [
                        'route:root:wallmart:products'
                    ],
                    rendering: [
                        {
                            area: RoutingArea.TOP,
                            element: <div></div>,
                        },
                        {
                            area: RoutingArea.BODY,
                            element: <div>Welcome to Angler Online Store!</div>,
                        }
                    ],
                    nodeId: 'route:root',
                    rawData: {
                        id: 'route:root:wallmart',
                        path: 'wallmart/!*',
                        navigation: {
                            label: 'Online Store'
                        },
                    },
                    prefixPath: '/',
                    caseSensitive: true,
                },
                'route:root:wallmart:products': {
                    routeId: 'route:root:wallmart:products',
                    path: 'products',
                    leafIds: [],
                    rendering: [
                        {
                            area: RoutingArea.TOP,
                            element: <div>Product List Top Panel</div>
                        },
                        {
                            area: RoutingArea.BODY,
                            element: <div>Welcome to Product List!</div>,
                        }
                    ],
                    nodeId: 'route:root:wallmart',
                    rawData: {
                        id: 'route:root:wallmart:products',
                        path: 'products',
                    },
                    prefixPath: '/walmart/',
                    caseSensitive: true,
                },
                'route:root:wallmart:products:details': {
                    routeId: 'route:root:wallmart:products:details',
                    path: ':id',
                    leafIds: [],
                    rendering: [
                        {
                            area: RoutingArea.TOP,
                            element: <div>Product List Top Panel</div>
                        },
                        {
                            area: RoutingArea.BODY,
                            element: <div>Welcome to Product List!</div>,
                        }
                    ],
                    nodeId: 'route:root:wallmart:products',
                    rawData: {
                        id: 'route:root:wallmart:products:details',
                        path: 'products',
                    },
                    prefixPath: '/walmart/products',
                    caseSensitive: true,
                }*/
            }
        } as RoutesRegistry)
    })
})
