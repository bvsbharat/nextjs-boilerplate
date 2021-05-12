import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const RouteLinks = ({ routes }) => {
    const renderRouteLinks = () => {
        if (!routes.length) {
            return false;
        }

        return routes.map((item, i) => (
            <a
                key={item.name}
                href="#"
                className={classNames(
                    item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "px-3 py-2 rounded-md text-sm font-medium",
                )}
                aria-current={item.current ? "page" : undefined}
            >
                <Link href={`/${item.href}`}>{item.name}</Link>
            </a>
        ));
    };

    return <>{renderRouteLinks()}</>;
};

RouteLinks.propTypes = {
    routes: PropTypes.array,
};

RouteLinks.defaultProps = {
    routes: [],
};

export default RouteLinks;
