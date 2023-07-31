import React from 'react';
import './about.css';

class about extends React.Component {
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>Library Name: My Library</p>
        <p>Location: City, Country</p>
        <p>Established Year: 2000</p>
        <p>Number of Branches: 5</p>
        <p>Number of Books: 1000</p>
        <p>Number of Staff: 20</p>
        <p>Is Open: Yes</p>
        <p>Working Hours: 9:00 AM to 6:00 PM</p>
        <p>A library management system is software that is designed to manage all the functions of a library. It helps librarian to maintain the database of new books and the books that are borrowed by members along with their due dates.

This system completely automates all your library’s activities. The best way to maintain, organize, and handle countless books systematically is to implement a library management system software.

A library management system is used to maintain library records. It tracks the records of the number of books in the library, how many books are issued, or how many books have been returned or renewed or late fine charges, etc.

You can find books in an instant, issue/reissue books quickly, and manage all the data efficiently and orderly using this system. The purpose of a library management system is to provide instant and accurate data regarding any type of book, thereby saving a lot of time and effort.</p>
      </div>
    );
  }
}

export default about;

