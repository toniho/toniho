import Head from 'next/head'
import LinkedInIcon from '../components/icons/LinkedIn';
import SendEmailIcon from '../components/icons/SendEmail';

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 dark:bg-gray-900 dark:text-gray-50">
      <Head>
        <title>Toni Ho: Frontend Engineer, PNW, Pinoy</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <h1 className="text-6xl lg:text-8xl text-center dark:text-white playful">
          &lt;th&gt;
        </h1>
        <p className="text-l text-center">Heya! I'm Toni, javascript dev, dad, PNW resident, proud Cebuano and occasional glutton.</p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <a href="https://www.linkedin.com/in/toniho/">
                <LinkedInIcon />
              </a>
          </div>
          <div>
            <a href="mailto:hello@toniho.com">
              <SendEmailIcon />
            </a>
          </div>
          <div><SendEmailIcon /></div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  )
}
