import React, {useState, useEffect} from 'react'

function Slider(){
  const [icons, setIcons] = useState(["https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"])
  const [currentIcon, setCurrentIcon] = useState(0)

  useEffect(() => {
    console.log("timer stareted")

  })

  return (
    <img src={icons[currentIcon]} alt=""/>
  )
}

export default Slider