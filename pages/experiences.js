import Head from 'next/head';
import { IoGameControllerOutline } from 'react-icons/io5';
import { MdPeopleOutline } from 'react-icons/md';
import { DiCodeBadge } from 'react-icons/di';
import { BiMessage } from 'react-icons/bi';
import styles from '../styles/Experiences.module.css';
import components from '../styles/Components.module.css';

export default function Experiences() {
  return (
    <div className={components.container}>
      <Head>
        <title>Experiences | Next Portfolio</title>
        <link rel="icon" href="https://raw.githubusercontent.com/ilhambara/nextjs-portfolio/main/public/favicon.ico" />
      </Head>

      <main className={components.main}>
        <div className={styles.title}>
          <h1>Experiences</h1>
          <p>Class, Bootcamp, Meetup, and other events from my past appearances</p>
        </div>
        <div className={styles.background__experiences}>
          <div className={styles.experiences}>
            <div className={styles.icon__experiences}>
              <DiCodeBadge size={56} />
            </div>
            <div className={styles.detail__experiences}>
              <h3>Hacktoberfest 2020</h3>
              <p>Open Source Contributor</p>
              <p>October 2020 - A monthlong celebration of open source software run by DigitalOcean</p>
              <p className={styles.text__tag}>Code, Open Source, Collaboration</p>
            </div>
          </div>
          <hr className={styles.hr__line}></hr>
          <div className={styles.experiences}>
            <div className={styles.icon__experiences}>
              <IoGameControllerOutline size={56} />
            </div>
            <div className={styles.detail__experiences}>
              <h3>Global Game Jam Surabaya 2020</h3>
              <p>Game Jammer (Programmer & 2D Artist)</p>
              <p>February 2020 - A hackathon focused on game development. It is all condensed into a 48-hour development cycle</p>
              <p className={styles.text__tag}>Game Development, Collaboration, Group Work</p>
            </div>
          </div>
          <hr className={styles.hr__line}></hr>
          <div className={styles.experiences}>
            <div className={styles.icon__experiences}>
              <MdPeopleOutline size={56} />
            </div>
            <div className={styles.detail__experiences}>
              <h3>Workshop Developer Student Clubs PENS</h3>
              <p>Club Member</p>
              <p>January to February 2020 - A university based community for students interested in Google developer technologies</p>
              <p className={styles.text__tag}>Community, Technologies, Google</p>
            </div>
          </div>
          <hr className={styles.hr__line}></hr>
          <div className={styles.experiences}>
            <div className={styles.icon__experiences}>
              <DiCodeBadge size={56} />
            </div>
            <div className={styles.detail__experiences}>
              <h3>DILo x Cilsy: #DILoDevelopersClass</h3>
              <p>Bootcamp Participant</p>
              <p>November to Desember 2019 - A bootcamp to learn and build "React JS based app" in a group project</p>
              <p className={styles.text__tag}>Bootcamp, Collaboration, Group Project</p>
            </div>
          </div>
          <hr className={styles.hr__line}></hr>
          <div className={styles.experiences}>
            <div className={styles.icon__experiences}>
              <DiCodeBadge size={56} />
            </div>
            <div className={styles.detail__experiences}>
              <h3>Hacktoberfest 2019</h3>
              <p>Open Source Contributor</p>
              <p>October 2019 - A monthlong celebration of open source software run by DigitalOcean</p>
              <p className={styles.text__tag}>Code, Open Source, Collaboration</p>
            </div>
          </div>
          <hr className={styles.hr__line}></hr>
          <div className={styles.experiences}>
            <div className={styles.icon__experiences}>
              <BiMessage size={56} />
            </div>
            <div className={styles.detail__experiences}>
              <h3>AndroidDev Surabaya Meetup</h3>
              <p>Participant</p>
              <p>October 2019 - An event related to Hacktoberfest 2019. Discussing about Android X and Jetpack library</p>
              <p className={styles.text__tag}>MeetUp, Android, Sharing</p>
            </div>
          </div>
        </div>
        <div className={components.back__button}>
          <a href="/">&larr; Home</a>
        </div>
      </main>
    </div>
  );
}
