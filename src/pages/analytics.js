export const pageview = (url) => {
    window.gtag('config', 'AW-10840021031', {
      page_path: url,
    });
  };
  