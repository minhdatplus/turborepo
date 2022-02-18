import React from 'react'

type Props = {
  adsImage: string
}

const Banner = (props: Props) => {
  const imageURL = props.adsImage
  return (
    <div className="max-w-7xl items-center justify-center text-right">
      <img
        className="mx-auto items-end justify-center text-center"
        alt="banner"
        src={imageURL}
      />
    </div>
  )
}

export default Banner
