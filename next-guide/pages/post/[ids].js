
export default function Post ({data}) {
    return <div>
        <span>{data.id}</span>
        <span>{data.title}</span>
    </div>
}

// 1.创建[].js 文件
// 2.返回用户可以访问到的所有的路由参数
export async function getStaticPaths () {
    return {
        paths:[{params:{ids:'11'}},{params:{ids:'22'}}],
        fallback:false
    }
}

// 3.返回路由参数所对应的具体数据
// 4.npm run build 会根据getStaticPaths返回的paths 去生成对应的html文件
export async function getStaticProps (context) {
    const id = context.params.ids;
    let data;
    switch (id) {
        case "11":
            data = {id:"1",title:'hello'}
            break;
        case "22":
            data = {id:"2",title:'world'}
            break;
        default:
            data = {}
            break;
    }
    return {
        props : {
            data
        }
    }
}