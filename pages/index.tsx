import Head from 'next/head'
import Header from "../components/Header";
import {sanityClient, urlFor} from '../sanity';
import {Post} from "../typings";
import Link from 'next/link';

interface Props {
    posts: [Post]
}

export default function Home({posts}: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header />
        <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
            <div className="px-10 space-y-5">
                <h1 className="text-5xl max-w-xl font-serif">
                    <span className="underline decoration-black decoration-4">Stay Healthy</span> {" "}
                    is a place where you can learn all the tips to be healthy 
                </h1>
                <h2>The greatest wealth is health</h2>
            </div>
            <img
                className="hidden md:inline-flex w-32 lg:w-2/5"
                src="https://static.vecteezy.com/system/resources/previews/001/188/239/non_2x/heart-logo-png.png"
            />
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
            {posts.map((post) => (
                <Link key={post._id} href={`post/${post.slug.current}`}>
                    <div className="group cursor-pointer border rounded-lg overflow-hidden">
                        <img
                            className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                            src={urlFor(post.mainImage).url()!}
                        />
                        <div className="flex justify-between p-5 bg-white">
                            <div>
                                <p className="text-lg font-bold">{post.title}</p>
                                <p className="text-xs">{post.description} by {post.author.name}</p>
                            </div>
                            <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!} />
                            {/* ! means make sure it has a value */}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const query = `*[_type == "post"] {
        _id,
        title,
        author -> {
            name,
            image
        },
        description,
        mainImage,
        slug
    }`;

    const posts = await sanityClient.fetch(query);

    return {
        props: {
            posts
        }
    }
}
