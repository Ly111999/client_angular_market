export class ApiResultBase {
  status: number;
  message: string;
}

export class Result<T> extends ApiResultBase {
  metaData: T;
}
