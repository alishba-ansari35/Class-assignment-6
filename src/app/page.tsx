
import Achievements from '@/components/achievements';
import Courses from '@/components/courses';
import Coursescard from '@/components/coursescard';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import React from 'react'

const Homepage = () => {
  return (
    <div>
<Header/>
<Hero/>
<Courses/>
<Achievements/>
<Coursescard/>
<Footer/>


    </div>

  )
}

export default Homepage
