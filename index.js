'use strict';

module.exports = BrowserFile;


/**
 * Class: Browserfile
 * @param {File} raw expects a BlobFile from an <input type="file"> element
 */
function BrowserFile(raw) {

	var self = this;

	this.raw = raw;

	/**
	 * convert file to data url
	 * @return {Object} promise which resolves with data url of file
	 */
	this.toDataUrl = function() {

		return new Promise(function(resolve, reject) {

			var reader = new FileReader();

			reader.onload = function() {
				self.dataUrl = reader.result;
				resolve(self.dataUrl);
			};

			reader.onerror = function(err) {
				reject(err);
			};

			reader.readAsDataURL(raw);

		});

	};
};
