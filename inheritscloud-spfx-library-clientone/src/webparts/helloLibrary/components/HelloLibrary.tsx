import * as React from 'react';
import styles from './HelloLibrary.module.scss';
import { IHelloLibraryProps } from './IHelloLibraryProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { InheritsCloudCoreLibrary } from 'inheritscloud-spfx-library';

export default class HelloLibrary extends React.Component<IHelloLibraryProps, {}> {
  public render(): React.ReactElement<IHelloLibraryProps> {

    const library = new InheritsCloudCoreLibrary();
    const testDate = new Date(2019, 5, 3);
    const dateFormatted = library.formatDateAsCoolString(testDate);

    return (
      <div className={ styles.helloLibrary }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Webpart using shared code from Library!</span>
              <p className={ styles.description }>Date formatted: {dateFormatted}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
