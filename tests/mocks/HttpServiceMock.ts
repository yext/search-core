export const HttpServiceMock = jest.fn(() => ({
  get: jest.fn<Promise<unknown>, unknown[]>(
    function get<T>(): Promise<T> {
      return Promise.resolve(null);
    }
  ),
  post: jest.fn<Promise<unknown>, unknown[]>(
    function post<T>(): Promise<T> {
      return Promise.resolve(null);
    }
  )
}));