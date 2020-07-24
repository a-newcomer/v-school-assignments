import React from 'react';
import Callout from './components/Callout'
import Info from './components/Info'
import Image from './components/Image'
import Email from './components/Email'
//assignment and base code by Bob Ziroll, mistakes by Ann Newcomer
//make each callout into a component of its info-type, and put those compnents inside the Callout components
///don't forget to add Bob's CSS

function App() {
  return (
    <div className="App">
      <h1>React Children Practice</h1>
      <Callout>
      <Info 
                header="Don't miss out!"
                body="Unless you don't suffer from FOMO, you better make sure you fill out the email form below!" 
            />
      </Callout>
      <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>
      <Callout>

      <Image 
                img={"https://picsum.photos/id/102/4320/3240"} 
                caption="Just look at those sparkling raspberries!"
            />
      </Callout>
      <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>
      <Callout>
         
      <Email
                header="Give us your email. We definitely won't sell it to anyone." 
                btnText="Sign me up!" 
            />
      </Callout>
    </div>
  );
}

export default App;
