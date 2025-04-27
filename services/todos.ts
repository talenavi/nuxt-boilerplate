export class TodoService {
  getTodos() {
    return useFetchApi('GET', '/todos');
  }
}
