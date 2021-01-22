import React, { useEffect } from 'react';


function Header(props) {
    const { navItems = [],
        setCurrentNavItem,
        currentNavItem } = props;

        useEffect(() => {
            document.title = currentNavItem.name;
        }, [currentNavItem]);

    return (
        <header>
        <h1>Welcome to my Portfolio</h1>
            <nav className="container">
                <ul className="navBar">
                    {navItems.map((navItem) => (
                        <li
                            key={navItem.name}
                            className={`navActive ${navItem.name === currentNavItem.name}`}
                        >
                            <a href={"#" + navItem.name}>
                                <span
                                    onClick={() => {
                                        setCurrentNavItem(navItem.name);
                                    }}
                                >
                                    {navItem.name}
                                </span></a>
                        </li>
                    ))}
                </ul>


            </nav>
        </header>
    )

}

export default Header;