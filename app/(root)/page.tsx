import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {

  const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                type='greeting'
                title='Welcome'
                user={loggedIn?.name || 'Guest'}
                subtext='Manage Your Transactions Properly.'
                />  

                <TotalBalanceBox
                 accounts={[]}
                 totalBanks={1}
                 totalCurrentBalance={1350.43}
                />
            </header>  

            RECENT Transactions
        </div> 

        <RightSideBar
        user = {loggedIn}
        transactions = {[]}
        banks = {[{ currentBalance: 159.83 },{ currentBalance: 372.31 }]}
        />
    </section>
  )
}

export default Home