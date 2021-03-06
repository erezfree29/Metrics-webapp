/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-key */

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { updatePremier } from '../app/redux/premer';

function Premier() {
  const dispatch = useDispatch();
  const pmatches = useSelector((state) => state.premierReducer);
  const fetchItems = async () => {
    const data = await fetch('https://www.scorebat.com/video-api/v3/');
    const matchesJason = await data.json();
    const preMatches = matchesJason.response.filter((match) => match.competition === 'ENGLAND: Premier League');
    dispatch(updatePremier(preMatches));
  };

  useEffect(() => {
    if (pmatches.length === 0) {
      fetchItems();
    }
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="link">
          <NavLink
            to="/"
          >
            <div className="back"><i className="fas fa-angle-left" /></div>
          </NavLink>
        </div>
        <div className="views">League matches</div>
      </nav>
      <div className="hand move_down"><i className="fas fa-hand-point-up" /></div>
      <div className="league_top">
        <div className="lename name"> premier League</div>
        <img className="image_top" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632316697/Premier_League_Logo.svg.png" alt="premier" />
      </div>
      <div className="breakdwon">League team Breakdown 2021</div>
      <table className=" table table-borderless table-striped">
        <thead>
          <tr>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {pmatches.map((match) => (
            <tr>
              <td>
                <a href={match.matchviewUrl}>
                  <div className="mcard">
                    <div>{match.title}</div>
                    <div className="mdate">
                      <div className="dword">Date</div>
                      <div>{match.date.slice(0, 10)}</div>
                      <div><i className="fas fa-arrow-circle-right" /></div>
                    </div>
                  </div>
                </a>
              </td>
            </tr>

          ))}
        </tbody>
      </table>

    </>

  );
}
export default Premier;
