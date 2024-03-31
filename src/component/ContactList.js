import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { contactList, searchWord } = useSelector((state) => state);
  const [list, setList] = useState([]);
  useEffect(() => {
    if (searchWord)
      setList(contactList.filter((item) => item.name.includes(searchWord)));
    else setList(contactList);
  }, [searchWord, contactList]);
  return (
    <div>
      <SearchBox />
      <div>num : {list.length}</div>
      {list.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
