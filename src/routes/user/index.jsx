import React from 'react';
import './index.css';
import TabMenu from '../../components/TabMenu';
import LineLink from '../../components/LineLink';
const User = () => {
  return (
    <div className="user">
      <div className="user__top">
        <div className="tOperator">
          <div className="tOperator__icon--setting tOperator__icon"></div>
          <div className="tOperator__icon--message tOperator__icon"></div>
        </div>
        <div className="user__info">
          <div className="user__avatar" style={{backgroundImage:'url(/source/avatar.jpeg)'}}></div>
          <div className="user__detail">
            <div className="user__name">温</div>
            <div>
              <span className="user__fellow">关注 100</span>
              <span className="user__fans">被关注 100</span>
            </div>
            <div className="user__level">钻石会员</div>
          </div>
        </div>
      </div>
      <div className="user_content">
        <LineLink title="收藏的电影" extra="20" href="#"/>
        <LineLink title="看过的电影" extra="20" href="#"/>
      </div>
      <TabMenu current="user"/>
    </div>
  );
};

export default User;
