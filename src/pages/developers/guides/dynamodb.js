import React from 'react'
import DefaultLayout from 'src/layouts/Default'
import { Helmet } from 'src/fragments'
import { NewToServerlessPrefooter } from 'src/fragments'
import {Box, Heading, P} from 'serverless-design-system'
import styled from 'styled-components'

const TextWithHoverableLinks = styled(P)`
    a:hover  {
        color: #5b5b5b;
    }
`

export default ({ data }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter} footerBackground={false}>
   <Helmet {...data.Dynamo.frontmatter} />
   <Box
        px={[30, 30, 300]}
        my={10}
        pb={200}>
            <Heading.h1 align='center' fontSize={['32px', '32px', '48px']}>
                {data.Dynamo.frontmatter.title}
            </Heading.h1>
            <TextWithHoverableLinks width={1} pt={40} dangerouslySetInnerHTML={{ __html: data.Dynamo.content }} />
        </Box>
  </DefaultLayout>
)

export const query = graphql`
  query DynamoGuide {
    Dynamo: guide (id: { eq: "dynamodb" }) {
      id
      frontmatter {
        title,
        description
      }
      content
    }
  }
`