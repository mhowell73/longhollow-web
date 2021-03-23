import { useRouter } from 'next/router';

import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { Layout, MainPhotoHeader, PageSplit } from 'components';
import { Box, Button, Heading } from 'ui-kit';
import { initializeApollo } from 'lib/apolloClient';

function getItemId(id) {
  return `UniversalContentItem:${id}`;
}

export default function Page({ data }) {
  const router = useRouter();

  return (
    <Layout title={data.title} bg="bg_alt">
      <MainPhotoHeader src={data.coverImage?.sources?.[0].uri || ''} />
      <Box px="xxl" pt="xl" pb="m">
        {data.subtitle && (
          <Heading fontSize="h2" lineHeight="h2" color="fg" fontWeight="800" opacity="50%">
            {data.subtitle}
          </Heading>
        )}
        {data.title && (
          <Heading fontSize="h1" lineHeight="h1" color="fg" fontWeight="800" textTransform="uppercase">
            {data.title}
          </Heading>
        )}
        {data.summary && (
          <Heading fontSize="h3" lineHeight="h3" color="fg" fontWeight="700">
            {data.summary}
          </Heading>
        )}
      </Box>
      {data.htmlContent && (
        <Box
          px="xxl"
          pt="m"
          pb="l"
          dangerouslySetInnerHTML={{ __html: data.htmlContent }}
        />
      )}
      {data.ctaLinks?.length ? (
        <Box px="xl" py="l">
          <Box
            px="xl"
            py="l"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {data.ctaLinks?.map(cta => (
              <Button onClick={() => router.push(cta.buttonLink)}>
                {cta.buttonText}
              </Button>
            ))}
          </Box>
        </Box>
      ) : null}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  const pageResponse = await apolloClient.query({
    query: GET_CONTENT_ITEM,
    variables: {
      itemId: getItemId(context.params.id),
    },
    skip: !context.params.id,
    fetchPolicy: 'no-cache',
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data: pageResponse?.data?.node,
    },
  };
}
