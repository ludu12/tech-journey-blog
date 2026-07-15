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
            Hey I&apos;m Musau This is my site.
          </p>
          <div className={'my-4'}>
            <i>
              Check out the repo{' '}
                <Link
                  href={'https://github.com/ludu12/tech-journey-blog'}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  <button className={'btn btn-sm btn-primary'}>
                      <span className={'text-primary-content'}>
                        here
                      </span>
                  </button>
                </Link>
            </i>
          </div>
        </section>

        <div className={'my-4'}>
          <Image className={'rounded'} src={imageUrl} alt={'My Image'} width={500}
                 height={500}/>
        </div>

        <section className={'prose'}>
          <h2>Pages</h2>
          <ul>
            <li>
              <Link href={'/Genshin'}>Genshin</Link>
            </li>
            <li>
              <Link href={'/blog'}>Blog</Link>
            </li>
          </ul>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({id, date, title}) => (
                <li key={id}>
                  <div>
                    <Link href={`/blog/${id}`}>{title}</Link>
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
