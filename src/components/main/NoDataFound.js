import React from "react";

const NoDataFound = ({ userInput }) => {
  return (
    <section className="no-data-found">
      <div className="wrapper">
        <h2>Your search for "{userInput}" did not find any matches.</h2>
        <div className="suggestions">
          <h3>Suggestions:</h3>
          <ul>
            <li>- Try different keywords</li>
            <li>- Looking for a movie or TV show</li>
            <li>- Try using a movie, TV show title, an actor, director </li>
            <li>- Try a genre, such as comedy, romance, sports or drama</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NoDataFound;
