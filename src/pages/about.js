import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle='about me'>
            <p>Hi ........ im childern of about page</p>
        </Layout>
    )
}

export const Head = () =>
    <>
        <title>About Me</title>
        <meta name="description" content="passionate photography" />
    </>

export default AboutPage