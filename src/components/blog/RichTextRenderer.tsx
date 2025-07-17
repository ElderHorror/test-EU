"use client";
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Text, Heading, UnorderedList, OrderedList, ListItem, Link, Box } from '@chakra-ui/react';

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text mb={4}>{children}</Text>,
    [BLOCKS.HEADING_1]: (node, children) => <Heading as="h1" size="xl" mb={4}>{children}</Heading>,
    [BLOCKS.HEADING_2]: (node, children) => <Heading as="h2" size="lg" mb={4}>{children}</Heading>,
    [BLOCKS.HEADING_3]: (node, children) => <Heading as="h3" size="md" mb={4}>{children}</Heading>,
    [BLOCKS.UL_LIST]: (node, children) => <UnorderedList mb={4}>{children}</UnorderedList>,
    [BLOCKS.OL_LIST]: (node, children) => <OrderedList mb={4}>{children}</OrderedList>,
    [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
    [INLINES.HYPERLINK]: (node, children) => <Link href={node.data.uri} isExternal color="blue.500">{children}</Link>,
  },
};

export const RichText = ({ content }: { content: any }) => {
  return <Box>{documentToReactComponents(content, options)}</Box>;
};