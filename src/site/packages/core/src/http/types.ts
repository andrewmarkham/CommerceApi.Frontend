/**
 * Represents an HTTP error with a code and message.
 *
 * @property {string} code - The error code associated with the HTTP error.
 * @property {string} message - A descriptive message providing details about the error.
 */
export type HttpError = {
    code: string;
    message: string;
}