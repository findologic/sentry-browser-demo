import _assign from 'lodash/assign';
import Raven from '../node_modules/raven-js/src/singleton';

import ErrorUi from './error-ui';
import getIdentity from './identity';

let raven;
let errorUi;

function init(sentryDsn) {
  raven = Raven.config(sentryDsn, {
    // We can resolve issues ahead of deployment, so they are silenced until the
    // version number is bumped.
    release: '0.1.3',

    // Before the error is tracked, we have an opportunity to add extra
    // information. We use it to add some extra information based on the form.
    dataCallback: (data) => {
      data.tags = _assign(data.tags, errorUi.formData.tags);

      return data;
    },

    // We can set default tags that are transmitted with each error or message.
    tags: {
      event: 'Salzburg Web Dev @ FINDOLOGIC'
    }
  }).install();

  // The default identity used by Sentry is the IP address, which is a privacy
  // concern and may even be borderline-illegal. Let's use a random ID that
  // has nothing to do with the user's real identity. This way, we can still
  // track how many users are affected by an issue, without threatening their
  // freedoms.
  Raven.setUserContext({
    id: getIdentity()
  });

  errorUi = new ErrorUi(document.querySelector('.fl-container'));
}

export default init;
export { errorUi };
