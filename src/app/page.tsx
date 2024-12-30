import React from 'react';
import AuthorSection from './components/Authorsection';
import TopTrends from './components/topTrends';
import RecentBlogs from './components/recentBlogs';
import Hero from './components/hero';

export default function Home() {
  return (
    <div>
      <Hero/>
      <TopTrends/>
      <RecentBlogs/>
      <AuthorSection/>
      
      
    </div>
  )
}
