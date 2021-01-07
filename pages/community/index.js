import { GroupsProvider } from '../../providers';
import { Box, Card, CardGrid } from '../../ui-kit';
import { GroupsList, Layout, CustomLink } from '../../components';
import { slugify } from '../../utils';
import { useAuthState } from '../../providers/AuthProvider';
import { useModalDispatch, showModal } from '../../providers/ModalProvider';

export default function Groups() {
  const { authenticated } = useAuthState();
  const modalDispatch = useModalDispatch();

  function handleOnClick(event) {
    if (!authenticated) {
      event.preventDefault();
      modalDispatch(showModal('Auth'));
    }
    modalDispatch(showModal('GroupFilter'));
  }

  const CardwithBackground = (
    <Box as="a" onClick={handleOnClick}>
      <Card
        display="flex"
        alignItems={'center'}
        justifyContent={'center'}
        p={'l'}
        flexDirection={'column'}
        backgroundImage={"url('https://source.unsplash.com/random/300x200')"}
        backgroundSize={'cover'}
        color={'white'}
        maxWidth={'300px'}
      >
        <Box as={'h1'} display={'flex'}>
          Crew
        </Box>
        <Box as={'p'} display={'flex'}>
          A movement of guys of every generation that stand of the Kingdom of
          God and for each other.
        </Box>
      </Card>
    </Box>
  );

  return (
    <Layout title="Community">
      <Box as="h1" mb="l">
        Live. Laugh. Together.
      </Box>
      <Box as="p" mb="l">
        Build the kind of friendships we all need to live aout our faith.
        There's community for everyone.
      </Box>
      <Box as="button" mb="l">
        Watch
      </Box>
      <Box as="button" mb="l">
        Find your community
      </Box>
      <CardGrid>{CardwithBackground}</CardGrid>
    </Layout>
  );
}
