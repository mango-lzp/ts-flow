export const sw = () => {
  if ('serviceWorker' in window.navigator) {
    navigator.serviceWorker.register('./src/service-worker/sw.js', { scope: '/src/service-worker/' })
      .then(function (reg) {
        console.log('success', reg);
        navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage("this message is from page");
      })
      .catch(function (err) {
        console.log('fail', err);
      });
  }
  console.log(navigator.serviceWorker)
}