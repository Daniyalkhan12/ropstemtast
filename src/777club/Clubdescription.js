import React from 'react'
import './clubdescription.css'
import clubimg from './src/../../Assets/Group142.png'
function Clubdescription() {
    return (
        <div className="bgimg2">
          <div class="container" style={{padding: '6rem'}}>
  <div class="row">
    <div class="col-6">
     <img className="clubpasses" src={clubimg}/>
    </div>
    <div class="col-6 clubintro">
      <h2>The 777 Club</h2>
      <p>
      We are the 777Club, a global collective of like-minded individuals with a DeFi lifestyle who appreciate access to the finest things in life. We have a lot planned. The wildest events, real-world benefits like none-other, a metaverse social club, connections to new business opportunities, and a ton more.<br/><br/> Our NFT collection is a launchpad to the best things in life and we want to give you the chance to share it with us. Getting in early on the 777Club will give you more benefits, more utility, and more opportunities to enhance your lifestyle.
      </p>
    </div>
   
  </div>
</div>  
        </div>
    )
}

export default Clubdescription
