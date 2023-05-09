import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter/slice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    
    return (
        <label
            htmlFor="InputFilter"
            style={{
                display: 'inline-grid',
            }}
        >
            Find contacts by name
            <input
                type="text"
                name="filter"
                id="InputFilter"
                value={filter}
                onChange={e => {
                    const action = setFilter(e.target.value.toLowerCase());
                    dispatch(action);
                }}
                style={{
                    marginTop: 15,
                    height: 30,
                }}
            />
        </label>
    )
};
