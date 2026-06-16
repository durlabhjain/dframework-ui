import { useState, useEffect } from 'react';

/**
 * Detects the current device type and screen orientation via User-Agent sniffing and window dimensions.
 * @returns {{ mobile: boolean, tablet: boolean, portrait: boolean, landscape: boolean }}
 */
function checkDevice() {
  let userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
  const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
  userAgent = userAgent.toLowerCase();
  const tablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
  const currentOrientation = window.innerWidth <= window.innerHeight ? "portrait" : "landscape";
  return { mobile, tablet, portrait: currentOrientation === 'portrait', landscape: currentOrientation === 'landscape' };
}

function useMobile(onlyMobile = false) {
  const [view, setView] = useState(checkDevice);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setTimeout(() => setView(checkDevice()), 10);
    };
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return onlyMobile ? view.mobile : view;
}

export default useMobile;