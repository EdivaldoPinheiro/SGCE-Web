import React from "react"
import './styles.css'
import { AiOutlineShareAlt, AiOutlineMore, AiOutlineGithub, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

export default function AboutUs(props) {
  return (
    <>
      <article class="profile">
        <div className="profile-image">
          <img src={props.src} alt="Picture..." />
        </div>
        <h2 className="profile-username">{props.name}</h2>
        <small className="profile-user-handle">{props.email}</small>
        <div className="profile-actions">
          <button className="btn0 btn--primary">Seguir</button>
          <button className="btn0 btn--icon">
            <i className="ph-export">
              <AiOutlineShareAlt />
            </i>
          </button>
          <button className="btn0 btn--icon">
            <i className="ph-dots-three-outline-fill">
              <AiOutlineMore />
            </i>
          </button>
        </div>
        <div className="profile-links">
          <a href="#" class="link link--icon">
            <i >
              <AiOutlineTwitter />
            </i>
          </a>
          <a href="#" className="link link--icon">
            <i >
              <AiOutlineGithub />
            </i>
          </a>
          <a href="#" className="link link--icon">
            <i >
              <AiOutlineInstagram />
            </i>
          </a>
        </div>
      </article>
    </>
  )
}