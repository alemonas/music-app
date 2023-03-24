import NextImage from 'next/image'
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout'

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md'

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="yellow"
      paddingX={5}
      color="gray"
    >
      <Box paddingY={20}>
        <Box width={120} marginBottom={20} paddingX={20}>
          <List>
            <ListItem>Hlleo </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
