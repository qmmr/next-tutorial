import Layout from '../components/Layout.js'
import Link from 'next/link'

const PostLink = ({ id, title }) => (
	<li>
		<Link as={`/p/${id}`} href={`/post?title=${title}`}>
			<a>{title}</a>
		</Link>
	</li>
)

const Index = () => (
	<Layout>
		<h1>My Blog</h1>
		<ul>
			<PostLink id="hello-nextjs" title="Hello Next.js" />
			<PostLink id="nextjs-is-awesome" title="Learn Next.js is awesome" />
			<PostLink id="deploy-with-zeit" title="Deploy apps with Zeit" />
		</ul>
	</Layout>
)

export default Index
