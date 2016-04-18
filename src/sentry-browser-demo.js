var raven;

function processError() {
  const e = new Error('WTF - What a Terrible Failure');
  raven.captureException(e);
}

function init(sentryDsn) {
  raven = window.Raven.config(sentryDsn).install();

  document.querySelector('form').addEventListener('submit', (e) => {
    processError();

    e.preventDefault();
    return false;
  });
}

export default init;
