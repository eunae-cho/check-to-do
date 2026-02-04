export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(
        `${process.env.PUBLIC_URL}/service-worker.js`
      );
    });
  }
}

