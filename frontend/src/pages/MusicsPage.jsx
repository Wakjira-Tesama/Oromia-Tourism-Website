import React from "react";
import "../styles/MusicsPage.css";
import HeaderMusic from "../pages/headerMusic";

const Music = () => {
  const musicItems = [
    {
      id: 1,
      name: "Music 1",
      description: "Description 1",
      videoId: "HRHFd8wtuXU",
    },
    {
      id: 2,
      name: "Music 2",
      description: "Description 2",
      videoId: "li7crwtEN68",
    },
    {
      id: 3,
      name: "Music 3",
      description: "Description 3",
      videoId: "6yDU8efPLrI",
    },
    {
      id: 4,
      name: "Music 4",
      description: "Description 4",
      videoId: "5UDqO6NtC20",
    },
    {
      id: 5,
      name: "Music 5",
      description: "Description 5",
      videoId: "rsh_v7A6Ng4",
    },
    {
      id: 6,
      name: "Music 6",
      description: "Description 6",
      videoId: "QSfeTO8YWIY",
    },
    {
      id: 7,
      name: "Music 7",
      description: "Description 7",
      videoId: "-BgHaXb3rGw",
    },
    {
      id: 8,
      name: "Music 8",
      description: "Description 8",
      videoId: "-eLlc1QDH8U",
    },
    {
      id: 9,
      name: "Music 9",
      description: "Description 9",
      videoId: "WaKGFq4LKYI",
    },
    {
      id: 10,
      name: "Music 10",
      description: "Description 10",
      videoId: "9Xjywjgpdwo",
    },
    {
      id: 11,
      name: "Music 11",
      description: "Description 11",
      videoId: "J8hv7mDIYX8",
    },
  ];

  return (
    <div>
      <HeaderMusic />
      <div className="music-container">
        <h2>Oromo Music</h2>
        <div className="youtube-videos">
          {musicItems.map((item) => (
            <div className="youtube-video" key={item.id}>
              <iframe
                src={`https://www.youtube.com/embed/${item.videoId}`}
                title={item.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-description">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tempofooter"></div>
    </div>
  );
};

export default Music;
