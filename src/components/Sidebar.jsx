// Import necessary React and React Router libraries for building the Sidebar component.
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// Import data and context-related dependencies.
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

// Sidebar component definition.
const Sidebar = () => {
    // Retrieve activeMenu state and setActiveMenu function from the context provider.
    const { activeMenu, setActiveMenu } = useStateContext();

    // Define styles for active and normal links.
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu &&
                (
                    <>
                        {/* Header section with application logo and menu toggle button */}
                        <div className="flex justify-between items-center">
                            <Link to="/" onClick={() => setActiveMenu(false)} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                                <SiShopware /> <span>Shoppy</span>
                            </Link>

                            {/* Toggle button for the mobile menu */}
                            <TooltipComponent content="Menu" position="BottomCenter">
                                <button
                                    type="button"
                                    onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                                    className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                                >
                                    <MdOutlineCancel />
                                </button>
                            </TooltipComponent>
                        </div>

                        {/* Navigation links section */}
                        <div className="mt-10">
                            {/* Map through the array of links and render each category */}
                            {links.map((item) => (
                                <div key={item.title}>
                                    {/* Display category title */}
                                    <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                                        {item.title}
                                    </p>

                                    {/* Map through the links within each category and render NavLink components */}
                                    {item.links.map((link) => (
                                        <NavLink
                                            to={`/${link.name}`}
                                            key={link.name}
                                            onClick={() => { }}
                                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                        >
                                            {link.icon}

                                            {/* Display link name */}
                                            <span className="capitalize ">{link.name}</span>
                                        </NavLink>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </>
                )
            }
        </div>
    );
};

// Export the Sidebar component as the default export.
export default Sidebar;