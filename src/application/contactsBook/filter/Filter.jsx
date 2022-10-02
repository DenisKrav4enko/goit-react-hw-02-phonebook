import React from 'react';
import {
  WrapperFilter,
  Wrapper,
  FilterTitle,
} from './Styled.Components';

const Filter = props => {
  const {
    filter,
    setFilter,
  } = props;

  return (
    <Wrapper>
      <FilterTitle>
        Find contacts by name
      </FilterTitle>
      <WrapperFilter
        value={filter}
        onChange={event => setFilter(event.currentTarget.value)}
      />
    </Wrapper>
  )
}

export default Filter;