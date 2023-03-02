import React, { useState, useEffect } from 'react'

import { useParams } from "react-router-dom"

import { Box } from "@mui/material"

import { Videos, ChannelCard } from "./"
import { fetchFromApi } from '../utils/fetchFromApi'




const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])


  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))


  }, [id])

  return (
<Box minHeight="95vh">

<Box>
  <div style={{
    background: 'linear-gradient(90deg, rgba(0,0,0,0.9419117988992471) 20%, rgba(250,0,0,1) 55%, rgba(27,27,27,1) 100%, rgba(6,6,6,1) 100%)',
    zIndex:10,
    height:"300px"

    
    }}
     />
        <ChannelCard channelDetail={channelDetail} marginTop={"-93px"}  />


 
</Box>
<Box display="flex" justifyContent="center" alignItems="center" p="2">

<Box sx={{mr:{sm:"100px"}}} />
<Videos videos={videos}/>


</Box>


</Box>
  )
}

export default ChannelDetail