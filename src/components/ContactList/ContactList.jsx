import { removeContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const {items, error} = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = items.filter(contact => contact.name.toLowerCase().includes(filter));

  return (
    <div>

      {error && <p>{error}</p>}
      {filteredContacts.length > 0 && (
        <ul>
          {filteredContacts.map(item => (
            <li key={item.id}>
              {item.name}: {item.number}
              <button
                type="button"
                onClick={() => dispatch(removeContact(item.id))}
                style={{
                  marginLeft: 5,
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};