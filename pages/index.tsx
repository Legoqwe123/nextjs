/* eslint-disable import/no-default-export */
/* eslint-disable filenames/no-index */

import React, { ReactElement } from "react"

import { Box } from "../styled-ui/box"

const Home = (): ReactElement => {
  return (
    <Box mb={1} bg={"linear"}>
      <div>Hello index</div>
    </Box>
  )
}

export default Home
