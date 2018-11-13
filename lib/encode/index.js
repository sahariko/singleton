/**
 * Encodes a single character.
 * @param  {String}  char The character to encode.
 * @return {String}       The encoded character.
 */
export const encodeChar = (char) => char.charCodeAt().toString(16);

/**
 * Simple isomorphic encoding function to encode strings in a hexadecimal representation.
 * @param  {String}  string The string to encode.
 * @return {String}         The encoded string.
 */
const encode = (string) => string.split('').map(encodeChar).join('');

export default encode;
