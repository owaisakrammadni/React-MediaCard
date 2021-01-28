// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function MediaCard({ profilePic, title, time, body, imgUrl }) {
  return <div>
    <div className="f-card">
      <div className="start">
        <img className="file" src={profilePic} />
        <div className="co-name"><a href="#">{title}</a></div>
        <div className="time"><a href="#">{time}</a></div>
      </div>
      <div className="content">
        <p>{body}</p>
      </div>
      <div className="ref">
        <img className="ref1" src={imgUrl} />
      </div>
    </div>
  </div>
}
ReactDOM.render(
  <>
    <MediaCard profilePic="https://image.shutterstock.com/image-vector/profile-icon-vector-logo-template-260nw-1412217830.jpg"
      title="Owais" time={new Date().toLocaleTimeString()} body="Height is optional, if no height is specified the image will be a square.Example:"
      imgUrl="https://ichef.bbci.co.uk/news/976/cpsprodpb/13E3C/production/_106186418_gettyimages-471395639.jpg" />

    <MediaCard profilePic="https://image.shutterstock.com/image-vector/profile-icon-vector-logo-template-260nw-1412217830.jpg"
      title="Owais" time={new Date().toLocaleTimeString()} body="Height is optional, if no height is specified the image will be a square.Example:"
      imgUrl="https://ichef.bbci.co.uk/news/976/cpsprodpb/13E3C/production/_106186418_gettyimages-471395639.jpg" />

    <MediaCard profilePic="https://image.shutterstock.com/image-vector/profile-icon-vector-logo-template-260nw-1412217830.jpg"
      title="Owais" time={new Date().toLocaleTimeString()} body="Height is optional, if no height is specified the image will be a square.Example:"
      imgUrl="https://ichef.bbci.co.uk/news/976/cpsprodpb/13E3C/production/_106186418_gettyimages-471395639.jpg" />
  </>,
  document.getElementById('root')
)