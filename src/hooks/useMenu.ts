const isRouteActive = (route: string) => {
  //   return true if the route is active
  const isActive =
    route === window.location.pathname ||
    window.location.pathname.includes(route);
  return isActive;
};
const homeRouteActive = (route: string) => {
  const isActive = route === window.location.pathname;
  return isActive;
};

const useMenu = () => {
  const menu = [
    { label: "Home", route: "/", active: homeRouteActive("/") },
    {
      label: "Service",
      route: "/service",
      active: isRouteActive("/service"),
    },
    {
      label: "About",
      submenu: [
        {
          label: "Blogs",
          route: "/about/blogs",
          active: isRouteActive("/about/blogs"),
        },
        {
          label: "News",
          route: "/about/news",
          active: isRouteActive("/about/news"),
        },
      ],
    },
    {
      label: "Contact",
      route: "/contact",
      active: isRouteActive("/contact"),
    },
  ];
  return menu;
};

export default useMenu;
