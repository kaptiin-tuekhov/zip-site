import * as React from "react";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      },
    },
  };
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }
  public render() {
    return (
      <div>
        <h1>Hello Typescript world!</h1>
        <p>This site is named <strong>{this.props.data.site.siteMetadata.title}</strong></p>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery{
    site {
      siteMetadata {
        title
      }
    }
  }
`;
