import client from '@/apis/client'

export const fetchPosts = async () => {
  const { data } = await client.get('/post')
  return data
}
