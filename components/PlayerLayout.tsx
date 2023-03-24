import {Box} from '@chakra-ui/layout'
import Sidebar from './Sidebar'

const PlayerLayout = ({children}) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width={250}>
        <Sidebar />
      </Box>
      <Box marginLeft={250}>{children}</Box>
      <Box position="absolute" left={0} bottom={0}>
        Player goes here
      </Box>
    </Box>
  )
}

export default PlayerLayout
