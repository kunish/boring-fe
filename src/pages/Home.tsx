import { fetchPosts } from '@/apis'
import Post from '@/components/Post'
import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react'

export default () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetchPosts().then(setPosts)
  }, [])

  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid key={post.id} item xs={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  )
}
