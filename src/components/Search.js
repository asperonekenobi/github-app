import React, { useContext, useState } from 'react';
import { AlertContext } from './../context/alert/alertContext';
import { GitHubContext } from './../context/gitHub/gitHubContext';

export const Search = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const github = useContext(GitHubContext);

  const onSubmit = (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    github.clearUsers();

    if (value.trim()) {
      alert.hide();
      github.searchUsers(value.trim());
    } else {
      alert.show('Enter correct username');
    }
  };

  return (
    <div className="form-group">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">@</span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={onSubmit}
        />
      </div>
    </div>
  );
};
