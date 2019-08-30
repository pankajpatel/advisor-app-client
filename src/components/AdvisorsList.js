import React, { useContext } from 'react';
import { connect } from 'react-redux';
import ConfigContext from '../ConfigContext';
import { AdvisorsListItem, Select } from './';
import { List, FloatRight, Clearfix, FloatLeft } from '../styled';
import { triggerFilter, triggerSort } from '../store/ui/actions';

const AdvisorsList = props => {
  const { advisors, language } = props;
  const { languages, sorters } = useContext(ConfigContext);
  const langRef = React.createRef();
  const sortRef = React.createRef();

  const changeLang = () => {
    const key = langRef.current.value;
    const lang = languages.filter(lang => lang.locale === key)[0];
    props.triggerFilter((lang || {}).locale);
  };
  const changeSort = () => {
    const key = sortRef.current.value;
    props.triggerSort(key);
  };
  return (
    <>
      <Clearfix>
        <FloatLeft>
          Filter by Language:
          <Select onChange={changeLang} ref={langRef} defaultValue={language}>
            <option value="">All</option>
            {languages.map(lang => (
              <option key={lang.locale} value={lang.locale}>
                {lang.name}
              </option>
            ))}
          </Select>
        </FloatLeft>
        <FloatRight>
          Sort:
          <Select onChange={changeSort} ref={sortRef} defaultValue={''}>
            <option value="">-</option>
            {Object.keys(sorters).map(sorter => (
              <option key={sorters[sorter].key} value={sorters[sorter].key}>
                {sorters[sorter].label}
              </option>
            ))}
          </Select>
        </FloatRight>
      </Clearfix>
      <List>
        {advisors.map(advisor => (
          <li key={advisor.uuid}>
            <AdvisorsListItem advisor={advisor} />
          </li>
        ))}
      </List>
    </>
  );
};

const mapStateToProps = state => ({
  language: state.ui.language,
});

const mapDispatchToProps = dispatch => ({
  triggerFilter: lang => dispatch(triggerFilter(lang)),
  triggerSort: sort => dispatch(triggerSort(sort)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdvisorsList);
