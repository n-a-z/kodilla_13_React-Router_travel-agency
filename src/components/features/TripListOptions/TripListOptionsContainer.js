import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  changeFromDuration,
  changeToDuration,
  changeSearchTag,
} from '../../../redux/filtersRedux';

const mapStateToProps = (state) => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchPhrase: (phrase) => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeFromDuration: (value) => dispatch(changeFromDuration(value)),
  changeToDuration: (value) => dispatch(changeToDuration(value)),
  changeSearchTag: (tags) => dispatch(changeSearchTag(tags)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
