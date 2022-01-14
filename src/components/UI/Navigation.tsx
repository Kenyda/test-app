import React from 'react';
import {Breadcrumbs, Container} from "@mui/material";
import {
    useLocation,
    matchRoutes,
    RouteMatch,
    NavLink
} from "react-router-dom";
import {routes, IRoute} from "../../utils/routes";

interface IRouteMatch extends RouteMatch {
    route: IRoute,
}

const Navigation = () => {
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        console.log(event)

    }

    let location = useLocation();

    const matchedRoutes: IRouteMatch[] | null = matchRoutes(routes, location.pathname);
    const navRoutes = matchedRoutes ? matchedRoutes.filter(route => route.route.name !== undefined) : null;

    return (
        <Container maxWidth="lg">
            <div>
                <Breadcrumbs>
                    {navRoutes && navRoutes.map((routeMatch, index) =>
                        routeMatch.route.name &&
                        <NavLink to={routeMatch.pathname}
                                 className={index === navRoutes.length - 1 ? "disabledLink" : "activeLink"}
                                 key={routeMatch.pathname}>{routeMatch.route.name}</NavLink>
                    )}
                </Breadcrumbs>
            </div>
        </Container>
    );
};

export default Navigation;