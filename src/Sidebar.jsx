 import React from 'react';
import ComingSoon from './assets/icons/commingSoon.svg';
import Favourite from './assets/icons/favourite.svg';
import NewRelease from './assets/icons/newRelease.svg';
import Trending from './assets/icons/trending.svg';
import WatchLater from './assets/icons/watchLater.svg';
 const Sidebar = () => {
   return (
    <main>
		<div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
    <aside>
    <ul className="space-y-2">
        <li>
            <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                <img src={Trending} width="24" height="24" alt="trending" />
                <span>Trending</span>
            </a>
        </li>
        <li>
            <a className ="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                <img src={NewRelease} width="24" height="24" alt="newrelease" />
                <span>New Releases</span>
            </a>
        </li>
        <li>
            <a className ="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                <img src={ComingSoon} width="24" height="24" alt="comingsoon" />
                <span>Coming Soon</span>
            </a>
        </li>
        <li>
            <a className ="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                <img src={Favourite} width="24" height="24" alt="favourite" />
                <span>Favourites</span>
            </a>
        </li>
        <li>
            <a className ="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                <img src={WatchLater} width="24" height="24" alt="watchlater" />
                <span>Watch Later</span>
            </a>
        </li>
    </ul>
</aside>

</div>
</main>
   )
 }
 
 export default Sidebar