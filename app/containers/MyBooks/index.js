/*
 *
 * MyBooks
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import MyBooksTabs from 'components/MyBooksTabs';
import AddBookForm from 'components/AddBookForm';
import SearchResultsList from 'components/SearchResultsList';
import MyBooksList from 'components/MyBooksList';
import MyBooksTitle from 'components/MyBooksTitle';
import * as selectors from './selectors';
import * as actions from './actions';
import { Wrapper } from '../../globalStyledComponents';


export class MyBooks extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.retrieveMyBooks();
  }

  handleSubmit(payload) {
    return new Promise((resolve, reject) => {
      this
        .props
        .submitTitleSearch({ data: payload, resolve, reject });
    });
  }

  render() {
    return (
      <Wrapper className="mybooks-wrapper">
        <Helmet
          title="My Books"
          meta={[{
            name: 'My Books',
            content: 'My Books',
          },
          ]}
        />
        <MyBooksTitle {...this.props} />
        <MyBooksTabs {...this.props} />
        { this.props.activeNavKey === 1 && this.props.myBooks && <MyBooksList {...this.props} />}
        { this.props.activeNavKey === 2 && <AddBookForm {...this.props} onSubmit={(payload) => this.handleSubmit(payload)} />}
        { this.props.searchResults.length > 0 && this.props.activeNavKey === 2 && <SearchResultsList {...this.props} />}
      </Wrapper>
    );
  }
}

MyBooks.propTypes = {
  activeNavKey: PropTypes.number.isRequired,
  submitTitleSearch: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  retrieveMyBooks: PropTypes.func.isRequired,
  myBooks: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  activeNavKey: selectors.selectActiveNavKey(),
  searchResults: selectors.selectSearchResults(),
  myBooks: selectors.selectMyBooks(),
  slideFrom: selectors.selectSlideFrom(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeActiveNavKey: (payload) => dispatch(actions.changeActiveNavKey(payload)),
    submitTitleSearch: (payload) => dispatch(actions.submitTitleSearch(payload)),
    addBook: (payload) => dispatch(actions.addBook(payload)),
    retrieveMyBooks: () => dispatch(actions.retrieveMyBooks()),
    incrementNav: () => dispatch(actions.incrementActiveNavKey()),
    decrementNav: () => dispatch(actions.decrementActiveNavKey()),
    deleteBook: (payload) => dispatch(actions.deleteMyBook(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks);
