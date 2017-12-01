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