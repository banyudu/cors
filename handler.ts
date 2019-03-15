import axios from 'axios'

export const get = async (event: any, context: any, callback: any) => {
  const parameters = Object.keys(event.queryStringParameters)
  if (parameters.length !== 1) {
    callback(null, {
      statusCode: 400
    })
  }
  const url = parameters[0]
  try {
    const result = await axios.get(url)
    callback(null, {
      statusCode: 200,
      headers: {
        'content-type': result.headers['content-type'] || 'text/html; charset=utf-8'
      },
      body: result.data
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}
