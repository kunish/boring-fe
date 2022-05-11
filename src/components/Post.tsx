import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default ({ post }: { post: Post }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2">{post.body}</Typography>
      </CardContent>
    </Card>
  )
}
