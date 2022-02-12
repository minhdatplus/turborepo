export default async function fetcher(...args: any) {
  try {
    const response: any = await fetch(...args)

    // if the server replies, there's always some data in json
    // if there's a network error, it will throw at the previous line
    const data: any = await response.json()
    if (response.ok) {
      return data
    }
  } catch (error: any) {
    console.log(error)
    if (!error.data) {
      error.data = { message: error.message }
    }
    throw error
  }
}
