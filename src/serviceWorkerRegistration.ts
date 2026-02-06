// This optional code is used to register a service worker.
// register() is not called by default.

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );
  
  type Config = {
    onSuccess?: (registration: ServiceWorkerRegistration) => void;
    onUpdate?: (registration: ServiceWorkerRegistration) => void;
  };
  
  export function register(config?: Config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      const publicUrl = new URL(
        process.env.PUBLIC_URL,
        window.location.href
      );
  
      if (publicUrl.origin !== window.location.origin) return;
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        registerValidSW(swUrl, config);
      });
    }
  }
  
  function registerValidSW(swUrl: string, config?: Config) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        if (registration.waiting) {
          config?.onUpdate?.(registration);
        }
  
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (!installingWorker) return;
  
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                config?.onUpdate?.(registration);
              } else {
                config?.onSuccess?.(registration);
              }
            }
          };
        };
      })
      .catch(console.error);
  }
  