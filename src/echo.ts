export const handler = async function(event: any, context: any) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        event.queryStringParameters && event.queryStringParameters.message,
    }),
  };
};
