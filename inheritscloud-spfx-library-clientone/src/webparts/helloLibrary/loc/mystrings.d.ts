declare interface IHelloLibraryWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloLibraryWebPartStrings' {
  const strings: IHelloLibraryWebPartStrings;
  export = strings;
}
