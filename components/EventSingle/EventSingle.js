import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button } from '../../ui-kit';
import { ContentLayout } from '../';

function EventSingle(props = {}) {
  return (
    <ContentLayout
      title={props.data.title}
      summary={props.data.summary}
      coverImage={props.data?.coverImage?.sources[0]?.uri}
      renderC={() => (
        <Button variant="secondary">Invite others to this event</Button>
      )}
      contentTitleD="About"
      htmlContent={props.data.htmlContent}
      contentTitleE="Schedule"
      renderContentE={() => <Box as="p">The schedule will go here&hellip;</Box>}
    />
  );
}

EventSingle.propTypes = {
  data: PropTypes.object,
};

export default EventSingle;
