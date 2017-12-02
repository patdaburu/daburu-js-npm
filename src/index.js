/**
 * Accept a string and return it as is or LOUDER.
 * @param {string} msg the original message
 * @param {boolean} loud Do you want it returned LOUDER?
 * @returns {string} the original message, or the LOUDER version
 */
exports.echo = function (msg, loud) {
	if (!msg) {
		return "";
	}
	else if (loud) {
		return msg.toUpperCase();
	}
	else {
		return msg;
	}
};