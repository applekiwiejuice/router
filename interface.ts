type RequestHandler = any;
type ResponseHandler = any;
type Callback = (request: RequestHandler, response: ResponseHandler) => void;
type HtppMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";

interface Method {
  path: string;
}

interface GetMethod extends Method {
  GET: Callback;
}

interface PostMethod extends Method {
  POST: Callback;
}

interface PatchMethod extends Method {
  PATCH: Callback;
}

interface PutMethod extends Method {
  PUT: Callback;
}

interface DeleteMethod extends Method {
  DELETE: Callback;
}

interface OptionsMethod extends Method {
  OPTIONS: Callback;
}

type Route = GetMethod | PostMethod | PatchMethod | PutMethod | DeleteMethod | OptionsMethod;

export { Route, HtppMethods, RequestHandler, ResponseHandler };