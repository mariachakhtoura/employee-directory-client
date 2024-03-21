export default class DataService {
  private static baseUrl = import.meta.env.VITE_GQL_URL;

  public static async post(
    query: string,
    variables: Record<string, unknown> = {}
  ): Promise<Response> {
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
  }
}
