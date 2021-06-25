import Head from 'next/head'

interface Props {
  pageTitle?: string
  description?: string
}

const Header:React.FC<Props> = ({ 
  description='', 
  // lang='en', 
  // metaTags=[], 
  pageTitle 
}) => {

  const title = (pageTitle) ? `${process.env.SITE_TITLE} | ${pageTitle}` : process.env.SITE_TITLE
  
  return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

export default Header