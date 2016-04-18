var raven;

function processError() {
  const e = new Error('WTF - What a Terrible Failure');
  raven.captureException(e);
}

function init() {
  raven = window.Raven.config('https://5d23c63bdbb347dfa548ab3e8a3ffbf5@app.getsentry.com/74553').install();

  document.querySelector('form').addEventListener('submit', (e) => {
    processError();

    e.preventDefault();
    return false;
  });
}

export default init;
