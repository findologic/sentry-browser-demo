import getIdentity from './identity';

export default class ErrorUi {
  /**
   * @param {Element} uiContainer
   */
  constructor(uiContainer) {
    this._uiContainer = uiContainer;
    this._installEventListeners();
    this._formData = undefined;

    // Show anonymous identity UUID.
    this._uiContainer.querySelector('#fl-identity').value = getIdentity();
  }

  /**
   * @returns {{message: string, tags: {string: *}}}
   */
  get formData() {
    return this._formData;
  }

  _installEventListeners() {
    // Prevent form submission to avoid needless page reload.
    this._uiContainer.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
    });

    // Throw an exception.
    const errorButton = this._uiContainer.querySelector('form button[type=submit]');
    errorButton.addEventListener('click', () => {
      this._refreshFormData();

      // Briefly disable the button to convey the effect that something happened.
      errorButton.disabled = true;
      window.setTimeout(() => {
        errorButton.disabled = false;
      }, 1500);

      throw new Error(this.formData.message);
    });
  }

  _refreshFormData() {
    this._formData = {
      tags: {}
    };

    const form = this._uiContainer.querySelector('form');
    const errorMessageElem = form.querySelector('input[name="fl-error-message"]');

    for (let tag of ['favoriteDrink', 'dietaryPreference']) {
      let tagElement = form.querySelector('select[name*=' + tag + ']');
      this._formData.tags[tag] = tagElement.value;
    }

    this._formData.message = errorMessageElem.value;
  }
}
