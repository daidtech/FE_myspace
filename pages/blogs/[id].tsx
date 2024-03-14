import BlogComponent from 'src/components/Blog/Blog';
import { BlogTypes } from 'src/models/blog';

export default function Show() {
  return (
    <BlogComponent type={BlogTypes.Show} />
  )
}