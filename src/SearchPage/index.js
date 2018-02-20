import React from "react";
import SearchForm from "./Header/Search";
import Footer from "./Footer";

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchForm />
        <Footer />
      </div>
    );
  }
}
