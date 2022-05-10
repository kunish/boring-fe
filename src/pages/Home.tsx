import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

import { fetchPosts } from '@/apis'

export default () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetchPosts().then(setPosts)
  }, [])

  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid key={post.id} item xs={4}>
          <Card>{post.title}</Card>
          <Card>{post.body}</Card>
        </Grid>
      ))}
    </Grid>
  )
}
