import HomePage from './Home'

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function Home({ data }) {
  return (
    <HomePage data={data} />
  )
}
