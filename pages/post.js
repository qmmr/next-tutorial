import { withRouter } from 'next/router'
import Layout from '../components/Layout.js'

const Content = withRouter(({ router }) => (
	<div>
		<h1>{router.query.title}</h1>
		<p>This is the blog post content.</p>
	</div>
))

const Page = props => (
	<Layout>
		<Content {...props} />
	</Layout>
)

export default Page
