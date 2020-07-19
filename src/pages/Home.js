import React, { Fragment, useContext } from 'react';
import { Search } from '../components/Search';
import { Card } from '../components/Card';
import { GitHubContext } from './../context/gitHub/gitHubContext';

export const Home = (props) => {
  const { loading, users } = useContext(GitHubContext);

  return (
    <Fragment>
      <Search />
      <div className="row">
        {loading ? (
          <p className="text-center">LOADING....</p>
        ) : (
          users.map((user) => (
            <div className="col-sm-4 mb-4" key={user.id}>
              <Card user={user} />
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
};
