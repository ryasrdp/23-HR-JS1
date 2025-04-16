import {getEmail} from '../util/emailUtil.js';

describe('get Email function', () => {
  let consoleErrorMock;

  beforeEach(() => {
    consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
  })

  afterEach(() => {
    consoleErrorMock.mockRestore();
  })

  it('Should return the email if it contain valid domain .com', () => {
    expect(getEmail('testExample@gmail.com')).toBe('testExample@gmail.com');
  });

  it('Should return the email if it contain valid domain .net', () => {
    expect(getEmail('testExample@gmail.net')).toBe('testExample@gmail.net');
  });

  it('Should return the email if it contain valid domain .ru', () => {
    expect(getEmail('testExample@gmail.ru')).toBe('testExample@gmail.ru');
  });

  it('Should return false if the email does not contain a valid domain', () => {
    expect(getEmail('testExample@gmail.org')).toBe(false);
  });

  it('Should return false if the email contain number', () => {
    expect(getEmail('20250409')).toBe(false);
  });

  it('Should return false if the value contain empty array', () => {
    expect(getEmail('')).toBe(false);
  });

  it('Should return false if the value contain empty array', () => {
    expect(getEmail('undefined')).toBe(false);
  });

  it('Should throw Error if the input is not a string', () => {
    const allowedDomains = jest.fn(() => ['.com', '.net', '.ru']);
    expect(() => getEmail(3234, allowedDomains)).toThrow(TypeError);
  });

  it('Should throw Error if the input is not a string', () => {
    const allowedDomains = jest.fn(() => ['.com', '.net', '.ru']);
    expect(() => getEmail(undefined, allowedDomains)).toThrow(TypeError);
  });
});
