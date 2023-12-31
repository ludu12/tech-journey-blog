import Date from '@/components/Date'
import {getPostData} from '@/lib/posts'

type Props = {
  params: {
    id: string
  }
}

type PostData = {
  title: string
  date: string
  contentHtml: string
}

export async function generateMetadata({params}: Props) {
  const postData: PostData = await getPostData(params.id)

  return {
    title: postData.title,
  }
}

export default async function Post({params}: Props) {
  const postData: PostData = await getPostData(params.id)

  return (
      <article className={'prose'}>
        <h1>{postData.title} </h1>
        <Date dateString={postData.date}/>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
      </article>
  )
}
