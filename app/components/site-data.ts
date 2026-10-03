export const images = {
  favicon: "/logo.webp",
  book: "/book-cover.webp",
  jacketOff: "/kelvin/jacket-off.jpg",
  portrait: "/kelvin/portrait.jpg",
  seated: "/kelvin/seated.jpg",
  smiling: "/kelvin/seated-smiling.png",
  moving: "/kelvin/moving.jpeg",
  moment: "/kelvin/moment.jpeg",
} as const;

export const publisherUrl =
  "https://www.bespokenpublishing.co/the-royal-doctor#pre-order-now";
export const heraldUrl =
  "https://www.heraldonline.co.zw/national-pride-at-the-heart-of-young-authors-new-book/";
export const linkedinUrl = "https://www.linkedin.com/in/kelvin-t-zivhu250570360";
export const instagramUrl = "https://www.instagram.com/docteur.__.royal";

export const galleryImages = [
  { src: images.moving, alt: "On The Move, Kelvin Tadiwanashe", title: "On The Move", description: "Campus life at the University of Nottingham Malaysia." },
  { src: images.seated, alt: "Seated Portrait, Kelvin Tadiwanashe", title: "Seated Portrait", description: "A quiet moment between chapters." },
  { src: images.moment, alt: "In The Moment, Kelvin Tadiwanashe", title: "In The Moment", description: "Leading, learning, and living the story." },
  { src: images.smiling, alt: "Seated and smiling, Kelvin Tadiwanashe", title: "Seated, Smiling", description: "Kelvin at ease, the story behind the pen." },
] as const;

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export const launchGalleryImages: GalleryImage[] = [
  { src: "/gallery/launch/01-venue-table.webp", alt: "Zimbabwe-themed table setting at the book launch", title: "A Zimbabwean Welcome", description: "The launch venue prepared in Zimbabwe's national colours." },
  { src: "/gallery/launch/02-welcome-display.webp", alt: "This Is Our Country welcome display", title: "Welcome", description: "Guests were welcomed into an evening centred on memory, identity, and hope." },
  { src: "/gallery/launch/03-launch-stage.webp", alt: "This Is Our Country launch stage", title: "The Launch Stage", description: "The stage set for the official unveiling of This Is Our Country." },
  { src: "/gallery/launch/04-author-arrival.webp", alt: "Kelvin Tadiwanashe arriving at the book launch", title: "The Author Arrives", description: "Kelvin enters the venue accompanied by traditional musicians." },
  { src: "/gallery/launch/05-author-and-guest-of-honour.webp", alt: "Kelvin Tadiwanashe with the guest of honour", title: "Guest of Honour", description: "Kelvin welcomes the evening's Guest of Honour." },
  { src: "/gallery/launch/06-launch-guests.webp", alt: "Guests posing together at the launch", title: "Launch Guests", description: "Friends and supporters gather in celebration of the new book." },
  { src: "/gallery/launch/07-event-team.webp", alt: "Book launch event team", title: "The Event Team", description: "Members of the team who helped bring the launch together." },
  { src: "/gallery/launch/08-author-portrait.webp", alt: "Kelvin Tadiwanashe smiling at the launch", title: "The Royal Doctor", description: "Kelvin during the opening moments of the celebration." },
  { src: "/gallery/launch/09-author-speaking.webp", alt: "Kelvin Tadiwanashe speaking from the podium", title: "In His Own Words", description: "The author speaks about the journey behind This Is Our Country." },
  { src: "/gallery/launch/10-author-address.webp", alt: "Kelvin Tadiwanashe addressing launch guests", title: "The Author's Address", description: "Kelvin reflects on belonging, responsibility, and Zimbabwe's future." },
  { src: "/gallery/launch/11-author-applauding.webp", alt: "Kelvin Tadiwanashe applauding during the launch", title: "A Shared Celebration", description: "A moment of appreciation during the evening's programme." },
  { src: "/gallery/launch/12-official-book-presentation.webp", alt: "Official presentation of This Is Our Country", title: "Official Presentation", description: "The book is formally presented during the launch ceremony." },
  { src: "/gallery/launch/13-guest-speaker.webp", alt: "Guest speaker addressing the book launch", title: "Guest Speaker", description: "A guest speaker contributes reflections to the programme." },
  { src: "/gallery/launch/14-guest-reading.webp", alt: "Guest reading at the launch podium", title: "A Reading", description: "A guest shares words from the stage." },
  { src: "/gallery/launch/15-guest-of-honour-speaking.webp", alt: "Guest of honour speaking at the book launch", title: "Guest of Honour's Address", description: "The Guest of Honour addresses the author and assembled guests." },
  { src: "/gallery/launch/16-launch-address.webp", alt: "Speaker delivering an address at the launch", title: "From the Podium", description: "One of the evening's speakers addresses the audience." },
  { src: "/gallery/launch/17-guests-at-table.webp", alt: "Launch guests seated around a decorated table", title: "Around the Table", description: "Guests share conversation before the programme begins." },
  { src: "/gallery/launch/18-audience-listening.webp", alt: "Audience members listening during the launch", title: "The Audience", description: "Guests listen as the story behind the book unfolds." },
  { src: "/gallery/launch/19-guests-in-conversation.webp", alt: "Guests in conversation at the launch", title: "In Conversation", description: "An evening of ideas, connection, and shared purpose." },
  { src: "/gallery/launch/20-launch-audience.webp", alt: "Book launch audience seated together", title: "Gathered Together", description: "Supporters and readers gathered for the official launch." },
  { src: "/gallery/launch/21-official-group-photo.webp", alt: "Kelvin Tadiwanashe and guests in an official group photograph", title: "An Official Portrait", description: "The author and distinguished guests mark the occasion together." },
  { src: "/gallery/launch/22-book-handover.webp", alt: "Kelvin Tadiwanashe presenting a copy of his book", title: "The Book Handover", description: "A signed copy of This Is Our Country is presented to a guest." },
  { src: "/gallery/launch/23-readers-with-the-book.webp", alt: "Readers holding copies of This Is Our Country", title: "With Readers", description: "Readers celebrate with their copies of the newly launched book." },
  { src: "/gallery/launch/24-launch-team.webp", alt: "Kelvin Tadiwanashe with the launch support team", title: "The Launch Team", description: "Kelvin closes the evening with members of the event team." },
];
