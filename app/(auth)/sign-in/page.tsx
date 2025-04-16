import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const LoggedIn = { firstName : "Harsh" };

  return (
    <section className='home'>
        <div className='home-content'>
          <header className="home-header">
             <HeaderBox 
              type = "greeting"
              title = "welcome"
              user = {LoggedIn?.firstName || "Guest"}
              subtext = "Access and manage your Transactions Efficiently."
             />

             <TotalBalanceBox 
              accounts = {[]}
              totalBanks = {1}
              totalCurrentBalance = {1256.53}
             />

          </header>
        </div> 
    </section>
  )
}

export default Home