export function getEmail(value) {
  const domains = ['.com', '.net', '.ru'];
  try {
    if (typeof value !== 'string') {
      throw new TypeError('Input value must be a string');
    }
    const hasValidDomain = domains.some(domain => value.includes(domain))
    return hasValidDomain ? value : false;
  } catch (error) {
    console.error('Error in getEmail function ', error.message);
    throw error
  }
}
