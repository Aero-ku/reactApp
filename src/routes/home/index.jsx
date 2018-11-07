import React, { Component } from 'react';
import './index.css';
import TopBar from './components/TopBar';
import Slider from './components/Slider';
import MovieItem from './components/MovieItem';
import TabMenu from '../../components/TabMenu';
import RenderToBody from '../../components/RenderToBody';
import CityLayer from './components/CityLayer';
import request from '../../helpers/request';
class Home extends Component {
  state = {
    city: '', //当前城市
    poster: [], // slide 海报
    movie: [], //当前热映电影
    cityLayerVisible: false, //当前城市浮层， 是否展示

  }
  showCityLayer = () => {
    console.log('show city layer');
    this.setState({
      cityLayerVisible: true
    });
  }

  onChangeCity = (city) => {
    this.setState({
      city,
    });
    this.hideCityLayer();
  }

  hideCityLayer = () => {
    this.setState({
      cityLayerVisible: false
    });
  }

  componentWillMount(){
    this.getData();
  }

  getData = async () => {
    const data = await request('/index');
    const {city, poster, movie, cityLayerVisible} = data;
    this.setState({
      city,
      poster,
      movie,
      cityLayerVisible
    });
  }
  getCity = async () => {
    const data = await request('/city ');
  }
  render() {
    const {city, poster, movie, cityLayerVisible} = this.state;

    return (
      <div className="home">
        <TopBar city={ city } showCityLayer={this.showCityLayer}  />
        <div className="home__slide">
          <div className="home__slideWrap">
            <Slider data = {poster} />
          </div>
        </div>
        <ul className="home__content">
          { movie.map(item => <li key={item.name}><MovieItem data={item} /></li>)}
        </ul>
        <TabMenu current="movie"/>
        { cityLayerVisible &&<RenderToBody><CityLayer onClose={this.hideCityLayer} onSelect={this.onChangeCity}/> </RenderToBody>}
      </div>
    );
  }
}

Home.propType = {};

export default Home;
