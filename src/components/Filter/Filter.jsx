import { useRef } from 'react';
import css from './Filter.module.css'
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilterContacts } from 'Redux/filterSlice';
import { getFilter } from 'Redux/selectors';

const Filter = () => {
  const filterInputId = useRef(nanoid());

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { value } }) => dispatch(changeFilterContacts(value));

  return (
    <div className={css.filterBox}>
      <label htmlFor={filterInputId.current} className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        id={filterInputId.current}
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.input}
        onChange={handleChangeFilter}
        value={filter}
      />
    </div>
  );
};

export default Filter;
