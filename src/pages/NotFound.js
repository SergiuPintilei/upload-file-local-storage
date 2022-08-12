import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section>
      <h1>Not Found</h1>
      <Link to="/home/upload/images">Go home</Link>
    </section>
  );
}
