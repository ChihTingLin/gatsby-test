import * as React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import { StaticImage } from "gatsby-plugin-image";
import styles from "./index.module.css";

const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.heroImage} />
      <Container>
        <div className={styles.section}>
          <div className={styles.column}>
            <StaticImage
              style={{ borderRadius: "6px" }}
              src="https://images.unsplash.com/photo-1588883707883-55d9d34ee523?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />
          </div>
          <div className={styles.column}>
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.column}>
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className={styles.column}>
            <StaticImage
              style={{ borderRadius: "6px" }}
              src="https://images.unsplash.com/photo-1604746559951-318ad80c8bb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.column}>
            <StaticImage
              style={{ borderRadius: "6px" }}
              src="https://images.unsplash.com/photo-1555015827-d6f9ed722978?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            />
          </div>
          <div className={styles.column}>
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.column}>
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className={styles.column}>
            <StaticImage
              style={{ borderRadius: "6px" }}
              src="https://images.unsplash.com/photo-1570806516998-c4c167ee2f55?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80"
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
