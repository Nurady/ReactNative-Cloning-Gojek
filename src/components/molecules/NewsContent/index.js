import React, {Component} from 'react';
import {NewsSection, Line} from '../../atoms';

export default class NewsContent extends Component {
  render() {
    return (
      <>
        <NewsSection
          type="news"
          title="Euro 2021"
          desc="Tim Jaguar dan Buru Sergap Gerebek Rumah Untuk Ritual Santet Di Depok."
        />
        <Line />
        <NewsSection
          type="football"
          title="Go-News"
          desc="Tim Perancis Menang Atas Tim Portugal."
        />
      </>
    );
  }
}
