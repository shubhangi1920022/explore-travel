import React from 'react'
import './TripStyle.css'
import TripData from './TripData'

const Trip = () => {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className="tripcard">
            <TripData image="https://images.unsplash.com/photo-1555043722-4523972f07ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" heading="Trip in Indonesia" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ab nam quas maxime veniam consectetur dolores expedita debitis vero nisi quidem, labore corrupti placeat facilis voluptates necessitatibus illo aperiam possimus temporibus tenetur itaque aliquid nulla fugit laborum. Doloremque amet atque ducimus sit facilis fugiat blanditiis, quaerat nam ut inventore! Inventore, optio. Esse consectetur numquam tempore velit quos mollitia magni quisquam."/>

            <TripData image="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsYXlzaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" heading="Trip in Malaysia" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ab nam quas maxime veniam consectetur dolores expedita debitis vero nisi quidem, labore corrupti placeat facilis voluptates necessitatibus illo aperiam possimus temporibus tenetur itaque aliquid nulla fugit laborum. Doloremque amet atque ducimus sit facilis fugiat blanditiis, quaerat nam ut inventore! Inventore, optio. Esse consectetur numquam tempore velit quos mollitia magni quisquam."/>

            <TripData image="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" heading="Trip in France" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ab nam quas maxime veniam consectetur dolores expedita debitis vero nisi quidem, labore corrupti placeat facilis voluptates necessitatibus illo aperiam possimus temporibus tenetur itaque aliquid nulla fugit laborum. Doloremque amet atque ducimus sit facilis fugiat blanditiis, quaerat nam ut inventore! Inventore, optio. Esse consectetur numquam tempore velit quos mollitia magni quisquam."/>
        </div>
      </div>
    </>
  )
}

export default Trip
