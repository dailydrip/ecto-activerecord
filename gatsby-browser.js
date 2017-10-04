import ReactGA from "react-ga";
ReactGA.initialize("UA-64071383-7");

exports.onRouteUpdate = (state, page, pages) => {
  const { pathname } = state;
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
};
