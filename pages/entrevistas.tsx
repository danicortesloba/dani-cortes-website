import Layout from '../components/layout'
import Link from 'next/link'
import interviews from '../public/interviews.json'

const Entrevistas = () => {

    return (
        <Layout>
            <br />
            <h2>Entrevistas</h2>
            <div>
                {interviews.interviews.map((interview) => (
                 <p key={interview.title}> <Link href={interview.link}>{interview.title}</Link></p>
                 ))}
             </div>
        </Layout>
    )

}

export default Entrevistas