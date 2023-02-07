const routerWrapper = document.querySelector(`#router-wrapper`);
const routes = {};
let cleanupFunctionsns = [];
const initRoute = (id) => {
  const routeElement = document.querySelector(`#${id}`);
  routes[id] = routeElement;
  routeElement.remove();
};
const setRoute = (id, clicked = false) => {
  cleanupFunctionsns.forEach((fn) => fn());
  cleanupFunctionsns = [];
  while (routerWrapper.firstChild) {
    routerWrapper.removeChild(routerWrapper.firstChild);
  }
  routerWrapper.appendChild(routes[id]);
  requestAnimationFrame(() => {});
};
initRoute(`route-1`);
initRoute(`route-2`);
initRoute(`route-3`);
initRoute(`route-4`);
setRoute(`route-1`);
document.querySelectorAll(`#tabs-wrapper [data-link]`).forEach((link) => {
  const clickHandler = () => {
    setRoute(link.getAttribute("data-link"), true);
  };
  link.addEventListener("click", clickHandler);
});
