export default class ErrorUi {
  /**
   * @param {Element} uiContainer
   */
  constructor(uiContainer) {
    this._uiContainer = uiContainer;
    this._installEventListeners();
    this._formData = undefined;
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
    this._uiContainer.querySelector('form button[type=submit]').addEventListener('click', () => {
      this._refreshFormData();

      throw new Error(this.formData.message);
    });
  }

  _refreshFormData() {
    var form = this._uiContainer.querySelector('form');
    var errorMessageElem = form.querySelector('input[name="fl-error-message"]');

    this._formData = {
      message: errorMessageElem.value,
      tags: {
        foo: 'bar'
      }
    };
  }
}
