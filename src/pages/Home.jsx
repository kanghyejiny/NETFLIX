import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row
        rowID="1"
        title="넷플릭스 인기 콘텐츠"
        fetchURL={requests.requestPopular}
      />
      <Row
        rowID="2"
        title="새로 올라온 콘텐츠"
        fetchURL={requests.requestUpcoming}
      />
      <Row
        rowID="3"
        title="지금 뜨는 콘텐츠"
        fetchURL={requests.requestTrending}
      />
      <Row rowID="4" title="어워드 수상!" fetchURL={requests.requestTopRated} />
      {/* <Row title='SF 영화' fetchURL={requests.requestSf} /> */}
    </>
  );
};

export default Home;
