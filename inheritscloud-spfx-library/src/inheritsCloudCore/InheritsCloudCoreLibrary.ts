import { format, distanceInWords } from 'date-fns';

export default class InheritsCloudCoreLibrary {
  public name(): string {
    return 'InheritsCloudCoreLibrary';
  }

  public formatDateAsCoolString(date: Date): string {
    const timeAgo: string = distanceInWords(
      date,
      new Date(),
      {addSuffix: true}
    );

    const dateFormatted = format(date, "Do MMM YYYY");

    return `${dateFormatted} (${timeAgo})`;
  }
}
