import Link from 'next/link';

const Home = () => {
  return (
    <div>
      Click{' '}
      <Link href="/about">
        <a>here</a>
      </Link>{' '}
      to read more
    </div>
  );
}

export default Home;
