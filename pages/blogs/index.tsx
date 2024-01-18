import Blog from 'components/Blog/Blog';
import { BlogTypes } from 'models/Blog';

export default function Index() {
  return (
    <Blog type={BlogTypes.Index} />
  )
}