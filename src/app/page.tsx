import Link from 'next/link'
import Date from '@/components/Date'

import {getSortedPostsData} from '@/lib/posts'
import Image from "next/image";

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

// Change this url to change the image!
const imageUrl = '/images/snorlax.jpg';

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
      <div>
        <section>
          <p className={'prose'}>
            Hey I&apos;m Liam. This is my site.
          </p>

        </section>

        <div className={'my-4'}>
          <Image className={'rounded'} src={imageUrl} alt={'My Image'} width={500}
                 height={500}/>
        </div>

        <section className={'prose'}>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({id, date, title}) => (
                <li key={id}>
                  <div>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br/>
                    <small>
                      <Date dateString={date}/>
                    </small>
                  </div>
                </li>
            ))}
          </ul>
        </section>
      </div>
  )
}
