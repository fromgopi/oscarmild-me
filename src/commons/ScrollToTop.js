const { useEffect } = require("react");
const { useLocation } = require("react-router-dom");

const ScrollToTop = () => {
    const {pathname} = useLocation();
    console.log(pathname);
    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;