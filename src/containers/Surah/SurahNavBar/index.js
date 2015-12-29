import React, { Component, PropTypes } from 'react';
// import { IndexLink } from 'react-router';
import {
  Col,
  Navbar,
  CollapsibleNav,
  Nav
} from 'react-bootstrap';

import ReciterDropdown from './ReciterDropdown';
import ContentDropdown from './ContentDropdown';
import SurahsDropdown from './SurahsDropdown';
import ReadingModeToggle from './ReadingModeToggle';
import FontSizeDropdown from './FontSizeDropdown';
import Audioplayer from 'components/Audioplayer';
import VersesDropdown from 'components/VersesDropdown';
import SearchInput from 'components/SearchInput';

const style = require('./style.scss');

function zeroPad(num, places) {
  const zero = places - num.toString().length + 1;

  return Array(+(zero > 0 && zero)).join('0') + num;
}

export default class SurahNavBar extends Component {
  static propTypes = {
    currentSurah: PropTypes.object,
    handleOptionUpdate: PropTypes.func,
    lazyLoadAyahs: PropTypes.func
  }

  render() {
    const { currentSurah, handleOptionUpdate, lazyLoadAyahs } = this.props;

    return (
      <Navbar fixedTop toggleNavKey={0} fluid>
        <div className={`row ${style.primaryNav}`}>
          <Col xs={3} className="padding-none">
            <img src="http://quran-1f14.kxcdn.com/images/ornament-left.png" className={style.ornament} />
          </Col>
          <Col xs={6} className={`text-center ${style.title}`}>
            <img src={`http://quran-1f14.kxcdn.com/images/titles/${zeroPad(currentSurah.id, 3)}.svg`}/>
            <span>{currentSurah.name.simple} ({currentSurah.name.english})</span>
          </Col>
          <Col xs={3} className="text-right padding-none">
            <img src="http://quran-1f14.kxcdn.com/images/ornament-right.png" className={style.ornament} />
          </Col>
        </div>
        <CollapsibleNav eventKey={0} className={style.bottomNav}>
          <Nav navbar>
            <SurahsDropdown currentSurah={currentSurah} />
            <VersesDropdown ayat={currentSurah.ayat} />
            <ReciterDropdown />
            <Audioplayer currentSurah={currentSurah} lazyLoadAyahs={lazyLoadAyahs} />
            <ContentDropdown handleOptionUpdate={handleOptionUpdate} />
            <FontSizeDropdown />
            <ReadingModeToggle />
          </Nav>

          <Nav navbar right>
            <SearchInput />
          </Nav>
        </CollapsibleNav>
      </Navbar>
    );
  }
}


// <div className="row">
//             {this.renderNavBrand()}
//             {this.renderMobileOptions()}
//             <div className="col-md-3 col-xs-3 surah-title">
//               <img src="//quran-1f14.kxcdn.com/images/ornament-left.png" className="ornament" />
//               {this.previousChapter()}
//             </div>
//             <div className="col-md-6 col-xs-6 surah-title text-center">
//               {this.surahTitle(currentSurah)}
//               <br />
//               {this.surahName(currentSurah)}
//             </div>
//             <div className="col-md-3 col-xs-3 surah-title text-right">
//               {this.nextChapter()}
//               <img src="//quran-1f14.kxcdn.com/images/ornament-right.png" className="ornament" />
//             </div>
//           </div>
