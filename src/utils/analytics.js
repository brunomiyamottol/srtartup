export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'AW-10840021031', {
      page_path: url,
    });
  }
};
