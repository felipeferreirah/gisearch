  import * as React from "react";
  import { RouteComponentProps, withRouter } from "react-router";

  /**
  * Arquivo auxiliar para dar ScrollToTop depois que carregar o DOM.
  */

  export var ScrollToTop = withRouter(
    class ScrollToTopWithoutRouter extends React.Component<RouteComponentProps<any>, void> {
      componentDidUpdate(prevProps: Readonly<RouteComponentProps<any>>) {
        if (this.props.location !== prevProps.location) {
          window.scrollTo(0, 0)
        }
      }

      render(): JSX.Element {
        return null;
      }
    }
  );
  export default ScrollToTop;
