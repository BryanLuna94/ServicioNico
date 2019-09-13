class genericResponse {
    constructor(
        result,
        message,
        success
    ) {
        this.result = result;
        this.message = message;
        this.success = success;
    }
}

module.exports = genericResponse;