import Link from 'next/link'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>index page</title>
      </Head>
      <div>
      index page works
      <Link href="/list">
        <a className="demo">jump to list page</a>
      </Link>
      <img src="/images/img01.png" alt="" />
    </div>

    <style jsx>{`
      .demo {
        color : red
      }
    `}
    </style>
    </>
  )
}
