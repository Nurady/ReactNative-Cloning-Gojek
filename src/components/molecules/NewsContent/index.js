import React, {Component} from 'react';
import {NewsSection, Line} from '../../atoms';

class NewsContent extends Component {
  render() {
    return (
      <>
        <NewsSection
          type="news"
          title="Euro 2021"
          desc="Tim Jaguar dan Buru Sergap Gerebek Rumah Untuk Ritual Santet Di Depok."
          go={'NewsDetail'}
        />
        <Line />
        <NewsSection
          type="football"
          title="Go-News"
          desc="Tim Perancis Menang Atas Tim Portugal."
          go={'NewsDetail2'}
        />
      </>
    );
  }
}

export default NewsContent;
