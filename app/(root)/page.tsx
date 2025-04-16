import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

  const loggedIn = {firstName : 'Harsh'};
  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                type='greeting'
                title='welcome'
                user={loggedIn?.firstName || 'Guest'}
                subtext='Manage Your Transactions Properly.'
                />  

                <TotalBalanceBox
                 accounts={[]}
                 totalBanks={1}
                 totalCurrentBalance={1350.43}
                />
            </header>  
        </div> 
    </section>
  )
}

export default Home