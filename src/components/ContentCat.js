import React from 'react'

const ContentCat = () => {
  return (
    <article className='wellContent'>
      <div className='content1'>
        <h2>Treatments A-Z</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          sapiente quas ullam commodi pariatur aperiam! Atque doloribus possimus
          magni praesentium.
        </p>
        <button className='btn  contentbtn' style={{ fontSize: '0.85rem' }}>
          View Treatments
        </button>
      </div>
      <div className='v1'></div>
      <div className='content2 '>
        <h2>Conditions A-Z</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          sapiente quas ullam commodi pariatur aperiam! Atque doloribus possimus
          magni praesentium.
        </p>
        <button className='btn  contentbtn' style={{ fontSize: '0.85rem' }}>
          View Condition
        </button>
      </div>
    </article>
  )
}

export default ContentCat
