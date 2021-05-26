import { gql, useQuery } from '@apollo/client';

export const MEDIA_CONTENT_ITEM_FRAGMENT = gql`
  fragment MediaContentItemFragment on MediaContentItem {
    id
    title
    summary
    coverImage {
      sources {
        uri
      }
    }
    videos {
      sources {
        uri
      }
    }
    audios {
      sources {
        uri
      }
    }
    htmlContent
    childContentItemsConnection {
      edges {
        node {
          id
          ... on ContentItem {
            videos {
              sources {
                uri
              }
            }
          }
        }
      }
    }
    sharing {
      url
    }
  }
`;

export const GET_MEDIA_CONTENT_ITEM = gql`
  query getMediaContentItem($itemId: ID!) {
    node(id: $itemId) {
      ...MediaContentItemFragment
    }
  }
  ${MEDIA_CONTENT_ITEM_FRAGMENT}
`;

function useMediaContentItem(options = {}) {
  const query = useQuery(GET_MEDIA_CONTENT_ITEM, options);

  return {
    item: query?.data?.node,
    ...query,
  };
}

export default useMediaContentItem;
