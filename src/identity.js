import uuid from '../node_modules/uuid/uuid';

const IDENTITY_LOCAL_STORAGE_KEY = 'sentry-identity';

/**
 * @return {string} Persistent UUID4 for identifying users anonymously across
 *    incidents.
 */
export default function getIdentity() {
  let identity = window.localStorage.getItem(IDENTITY_LOCAL_STORAGE_KEY);
  if (identity === null) {
    identity = uuid.v4();
    window.localStorage.setItem(IDENTITY_LOCAL_STORAGE_KEY, identity);
  }

  return identity;
}
