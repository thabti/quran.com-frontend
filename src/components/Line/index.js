import React from 'react';
import debug from 'utils/Debug';

const styles = require('../Ayah/style.scss');

export default class Line extends React.Component {
  static propTypes = {
    line: React.PropTypes.array.isRequired
  };

  // shouldComponentUpdate(nextProps) {
  //   return this.props.line.length !== nextProps.line.length;
  // }

  renderText() {
    const { line } = this.props;

    if (!line[0].code) { // TODO shouldn't be possible, remove this clause
      return;
    }

    let text = line.map((word, index) => {
      if (word.translation) {
        let tooltip = word.translation;

        return (
          <b
            key={`${index}`}
            className={`${word.className} pointer`}
            data-toggle="tooltip"
            data-ayah={word.ayahKey}
            data-line={word.lineNun}
            data-page={word.pageNum}
            data-position={word.position}
            data-placement="top" title={tooltip}
            dangerouslySetInnerHTML={{__html: word.code}}>
          </b>
        );
      }

      return (
        <b
          className={`${word.className} pointer`}
          key={`${word.pageNum}${word.lineNum}${word.position}`}
          data-line={word.lineNum}
          data-page={word.pageNum}
          dangerouslySetInnerHTML={{__html: word.code}}>
        </b>
      );
    });

    return (
      <span className={`${styles.line} text-center`}>
        {text}
      </span>
    );
  }

  render() {
    const { line } = this.props;

    debug('component:Line', `Page: ${line[0].pageNum} - Line: ${line[0].lineNum} - Ayah: ${line[0].ayahKey}`);

    return (
      <div className={`row ${styles.font} text-justify text-arabic`}>
        <div className="col-md-12 line-container">
          {this.renderText()}
        </div>
      </div>
    );
  }
}
