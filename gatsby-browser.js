import ReactGA from "react-ga";
ReactGA.initialize("UA-64071383-7");

exports.onClientEntry = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
