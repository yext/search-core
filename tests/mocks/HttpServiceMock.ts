export const HttpServiceMock = jest.fn(() => ({
  get: jest.fn(
    function get<T>(): Promise<T> {
      return Promise.resolve(null);
    }
  ),
  post: jest.fn(
    function post<T>(): Promise<T> {
      return Promise.resolve(null);
    }
  )
}));