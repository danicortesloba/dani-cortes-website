import Layout from '../components/layout'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import Link from 'next/link'
import fiction from '../public/publications/fiction.json'
import poetry from '../public/publications/poetry.json'
import nonfiction from '../public/publications/nonfiction.json'



const Publicaciones = () => {
 return (
    <Layout>
    <br />
      <h2> Publicaciones</h2>
      <Tabs>
  <TabList>
    <Tab>Ficción</Tab>
    <Tab>Poesía</Tab>
    <Tab>No Ficción</Tab>
  </TabList>

  <TabPanel>
    <h2>Ficción</h2>
    <div>
    {fiction.pieces.map((piece) => (
        <p key={piece.title}> <Link href={piece.link}>{piece.title}</Link></p>
      ))}
    </div>
  </TabPanel>
  <TabPanel>
    <h2>Poesía</h2>
    <div>
    {poetry.pieces.map((piece) => (
        <p key={piece.title}> <Link href={piece.link}>{piece.title}</Link></p>
      ))}
    </div>
  </TabPanel>
  <TabPanel>
    <div>
    <h2>No Ficción</h2>
    {fiction.pieces.map((piece) => (
        <p key={piece.title}> <Link href={piece.link}>{piece.title}</Link></p>
      ))}
    </div>
  </TabPanel>
</Tabs>
     
  </Layout>
  )
};



export default Publicaciones