import { getRootRouteByPath } from "./getRootRouteByPath";
import { registerRootRouting } from "../utils";
import { RoutingArea } from "../factory";

describe("[getRootRouteByPath] function", () => {
    beforeAll(() => {
        registerRootRouting([
            {
                id: 'route:store',
                path: '/store/*',
            },
            {
                id: "route:root",
                path: '/*',
                routes: [
                    {
                        id: 'route:root:wallmart',
                        path: 'wallmart/*',
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
                            }
                        ],
                        navigation: {
                            label: 'Online Store'
                        },
                    }
                ],
            },
        ]);
    })
    test("should return correct root route object", () => {
        expect(getRootRouteByPath("/store?search=restaurants#show-tabs")?.path).toEqual("/store/*");

        expect(getRootRouteByPath("/")?.path).toEqual("/*");

        const wallmartRoute = getRootRouteByPath("/wallmart");
        expect(wallmartRoute?.path).toEqual("/*");
        expect(wallmartRoute?.routes?.length).toBe(1);
    });

    test("should resolve correct root route for path", () => {
        expect(getRootRouteByPath("/wallmart/products/33231")).toEqual(undefined);
    });
})

