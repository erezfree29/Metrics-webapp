/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-key */

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { updateState } from '../app/redux/premer';

function Premier() {
  const dispatch = useDispatch();
  const storeMatches = useSelector((state) => state.premierReducer);
  const fetchItems = async () => {
    const data = await fetch('https://www.scorebat.com/video-api/v3/');
    const matchesJason = await data.json();
    const matches = matchesJason.response.filter((match) => match.competition === 'ENGLAND: Premier League');
    dispatch(updateState(matches));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="link">
          <NavLink
            to="/"
          >
            <div className="back">{'<'}</div>
          </NavLink>
        </div>
        <div className="views">League matches</div>
      </nav>
      <div className="league_top">
        <div className="lename name"> premier League</div>
        <img className="image_top" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632316697/Premier_League_Logo.svg.png" alt="premier" />
      </div>
      <table className=" table table-borderless table-striped up container">
        <thead>
          <tr>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {storeMatches.map((match) => (
            <tr>
              <td>
                <div className="mcard">
                  <div className="mtitle">{match.title}</div>
                  <div className="mdate">
                    <div className="dword">Date</div>
                    <div>{match.date.slice(0, 10)}</div>
                    <div><i className="fas fa-arrow-circle-right" /></div>
                  </div>
                </div>
              </td>
            </tr>

          ))}
        </tbody>
      </table>

    </>

  );
}
export default Premier;
