import Head from 'next/head'
import styles from './list.module.css'
import { readFile } from 'fs' // 浏览器端渲染会对代码进行摇树
import { promisify } from 'util'
import { join } from 'path'

const read = promisify(readFile)

function List({data}) {
  return (
    <>
      <Head>
        <title>list page</title>
      </Head>
      <div className={styles.demo}>这是list页面</div>
      <div>{data}</div>
    </>
  )
}

export default List

// export async function getStaticProps () {
export async function getServerSideProps (context) {
  let data = await read(join(process.cwd(),'pages','_app.js'),'utf-8')
  console.log(context.query) //能拿到客户端向服务端的请求参数,比如在浏览器url中的参数
  console.log('hello')
  return {
    props : {
      data
    }
  }
}