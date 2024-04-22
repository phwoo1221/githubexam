import "./Frame.css";

const Frame = () => {
  return (
    <div className="parent">
      <div className="div">메인 페이지 구성</div>
      <div className="frame-child" />
      <div className="frame-child" />
      <div className="nav-bar">
        nav_bar (네비게이션 바를 사용하거나 페이지 스크롤시 따라오게 할까
        생각중)
      </div>
      <div className="frame-inner" />
      <div className="rectangle-div" />
      <img className="rectangle-icon" alt="" src="/rectangle-862.svg" />
      <img className="frame-child1" alt="" src="/rectangle-862.svg" />
      <div className="or-container">
        <span className="txt">
          <p className="or">
            메인 화면 디자인 슬라이드 or 영상 기능 넣을거고 링크 추가
          </p>
          <p className="or">
            (추가 하고 싶은 내용은 고정적인 화면이 아닌 그 날의 인기 키워드나
            추천 식당의 이미지를 메인 화면을 메인에 노출시키고 싶은 개인적인
            바램)
          </p>
        </span>
      </div>
      <div className="frame-child2" />
      <div className="div1">{`<   페이지 버튼   >`}</div>
      <img className="frame-child3" alt="" src="/rectangle-864@2x.png" />
      <div className="div2">
        <span className="txt">
          <p className="or">
            메인 화면은 비회원, 일반 회원과 클라이언트 메인 화면을 다르게 만들고
            싶음
          </p>
          <p className="or">
            그날의 핵심키워드, 인기식당(비오는날, 연말회식, 날씨가 좋으면 데이트
            하기 좋은 식당)
          </p>
          <p className="or">등을 메인페이지에 띄워주기</p>
          <p className="or">
            카드가 제일 깔끔하기는 함 애니메이션 기능은 학원에서 보여줄건데 막상
            크게 넣으면 조화가 안되고
          </p>
          <p className="or">
            작게 넣으면 홈화면이 비어보이고 더러워 보임 만약 넣는다면 페이지
            전체에 동일한 백그라운드 이미지를 넣어야 하는데 우리 사이트 특성상
            텍스트가 들어가게 되면 더러워 보임
          </p>
          <p className="or">{`카드가 제일 깔끔하긴 하고 직관적 왼쪽은 깔끔하지만 하지만 밋밋한 느낌이 있음 `}</p>
          <p className="p7">
            오른쪽 카드는 동일한 배치로 카드를 놓지만 클릭시 뒷장으로 애니메이션
            효과로 카드가 뒤집어 지며
          </p>
          <p className="or">
            상세 설명이 나오는데 우리가 사용시 뒷장에 매장 설명 예약 정보보기
            지도보기 등 기능을 넣어 퀵기능처럼 사용이 되면 편리할거 같음
          </p>
          <p className="or">&nbsp;</p>
          <p className="or">
            배승이 추천처럼 카드를 계속 이동? 마우스 호버시 스탑기능
          </p>
          <p className="or">{`메인을 최대한 깔끔히 해야함 여러 대기업 사이트들 봤는데 대부분 메인은 광고거나 깔끔하고 `}</p>
          <p className="or">
            실질적인 사용은 전부 네비게이션 바로 들어가서 사용함
          </p>
          <p className="or">&nbsp;</p>
          <p className="or">&nbsp;</p>
        </span>
      </div>
      <div className="ellipse-div" />
      <div className="frame-child4" />
      <div className="top">예약 TOP</div>
      <div className="frame-child5" />
      <div className="div3">
        <span className="txt">
          <p className="or">우리 추천</p>
          <p className="or">(광고요청 클라이언트 매장)</p>
        </span>
      </div>
      <div className="top1">키워드(검색)TOP</div>
      <img className="frame-child6" alt="" src="/rectangle-865.svg" />
      <div className="div4">검색 기능( ** 시 / ** 구 / ** 동 / 날짜)</div>
      <div className="frame-child7" />
      <div className="div5">{`메인페이지 매장들 `}</div>
      <img className="image-36-icon" alt="" src="/image-36@2x.png" />
      <img className="image-37-icon" alt="" src="/image-37@2x.png" />
      <div className="div6">
        <span className="txt">
          <p className="or">푸터도 이번에는 깔끔하게 꾸며보고</p>
          <p className="or">잡다하게 링크나 기능 넣지말고</p>
          <p className="or">깔끔하게 보이자!</p>
          <p className="or">
            (대기업말고 이상한 개인 쇼핑몰같은 사이트들이 푸터를 엄청 길게
            해놨음)
          </p>
        </span>
      </div>
    </div>
  );
};

export default Frame;
