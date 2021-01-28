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
      title="Owais" time={new Date().toLocaleTimeString()} body="A computer keyboard is a typewriter-style device[1] which uses an arrangement of buttons or keys to act as mechanical levers or electronic switches. Replacing early punched cards and paper tape technology, interaction via teleprinter-style keyboards have been the main input method for computers since the 1970s, supplemented by the computer mouse since the 1980s.:"
      imgUrl="https://ichef.bbci.co.uk/news/976/cpsprodpb/13E3C/production/_106186418_gettyimages-471395639.jpg" />

    <MediaCard profilePic="https://image.freepik.com/free-vector/machine-warrior-e-sports-logo-design-machine-warrior-gaming-mascot-twitch-profile_74154-43.jpg"
      title="Owais" time={new Date().toLocaleTimeString()} body="Karton (Carton) is the debut studio album by German recording artist Mark Forster. It was released by Four Music on 1 June 2012 in.:"
      imgUrl="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />

    <MediaCard profilePic="https://previews.123rf.com/images/muslihalamin/muslihalamin1811/muslihalamin181100409/115438002-simple-real-estate-logo-house-logo-design-.jpg"
      title="Owais" time={new Date().toLocaleTimeString()} body="For the act of making buildings, see Construction. For structures not intended for human use, see Nonbuilding structure. For other uses, see Building (disambiguation). For another use of , see Casio Edifice..:"
      imgUrl="https://i.pinimg.com/originals/be/98/c2/be98c20386ceb5f69a43879f2a51927e.jpg" />
  </>,
  document.getElementById('root')
)