import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
  console.log(ctx);
  const { limit = 20, nextToken } = ctx.arguments;
  return ddb.scan({ limit, nextToken });
}

export function response(ctx) {
  console.log(ctx);
  return ctx.result.items;
}
