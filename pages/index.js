import Head from 'next/head'

import Header from './../components/Header/index'
import MovieList from './../components/MovieList/index'
import Footer from './../components/Footer/index'

export default function IndexPage( { movies } ) {
  return (
    <>   
      <Head>
        <title>Star Wars | Classic Movies Collection</title>
        <meta name="description" content="A website dedicated to the Star Wars classic franchise" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <MovieList movies={ movies }/>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://swapi.dev/api/films/')
  const data = await res.json()

  return {
    props: { 
      movies: data.results
    },
  }
}
