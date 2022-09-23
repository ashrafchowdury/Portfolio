import React from 'react'
import Nav from '../components/Nav'
import Bio from '../components/Bio';
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import { useQuery } from "react-query";
const about = () => {
  const { data } = useQuery("author",);
  console.log(data);
  return (
    <>
    <Nav />
    <Heading title='About Me' style=' lg:!mt-16 lg:!mb-28' />
    <Bio author={data} />
<section>

</section>
<Footer />
    </>
  )
}

export default about