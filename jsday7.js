class ValidationError extends Error {
    constructor(message) {
    super(message);
    this.name = "ValidationError";
    }
}

if (!user.name) {
    throw new ValidationError("'name' is required.");
}

if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
} else if (error instanceof ReferenceError) {
    console.log(error.message);
} else {
    console.log(error.stack);
}